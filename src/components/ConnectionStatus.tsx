import { useContext } from 'react';
import { WebSocketContext } from '../contexts/WebSocketContext';

export default function ConnectionStatus() {
  const { isConnected } = useContext(WebSocketContext);
  return (
    <div
      className={`status-indicator ${
        isConnected ? 'connected' : 'disconnected'
      }`}
    >
      {isConnected ? '已连接' : '连接中...'}
    </div>
  );
}
