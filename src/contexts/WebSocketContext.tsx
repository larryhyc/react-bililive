import { createContext, ReactNode, useState, useEffect } from 'react';
import { DanmuMessage } from '../interface/Danmu';


export const WebSocketContext = createContext<{
  isConnected: boolean;
  messages: DanmuMessage[];
}>({
  isConnected: false,
  messages: [],
});

export function WebSocketProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<DanmuMessage[]>([]);
  const [retryCount, setRetryCount] = useState(0);
  const [wsInstance, setWsInstance] = useState<WebSocket | null>(null);

  const maxRetryDelay = 30000; // 30秒最大重试间隔
  const maxMessages = 30; // 最多保留14条消息

  const connectWebSocket = () => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('ws连接成功');
      setIsConnected(true);
      setRetryCount(0);
    };

    ws.onmessage = (event) => {
      try {
        const message: DanmuMessage = JSON.parse(event.data);
        setMessages((prev) => {
          const newMessages = [...prev, message];
          // 限制消息数量
          return newMessages.slice(-maxMessages);
        });
        // console.log('message:', message);
      } catch (error) {
        console.error('解析ws消息失败:', error);
      }
    };

    ws.onclose = () => {
      console.log('ws连接关闭');
      setIsConnected(false);
      scheduleReconnect();
    };

    ws.onerror = (error) => {
      console.error('ws连接错误', error);
      setIsConnected(false);
      ws.close();
    };

    setWsInstance(ws);
  };

  const scheduleReconnect = () => {
    // 指数退避算法
    const delay = Math.min(1000 * Math.pow(2, retryCount), maxRetryDelay);
    console.log(`Will attempt reconnect in ${delay}ms`);

    setTimeout(() => {
      setRetryCount((prev) => prev + 1);
      connectWebSocket();
    }, delay);
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (wsInstance) {
        wsInstance.close();
      }
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ isConnected, messages }}>
      {children}
    </WebSocketContext.Provider>
  );
}
