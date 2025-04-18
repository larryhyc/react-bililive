import { useContext } from 'react';
import { WebSocketContext } from '../contexts/WebSocketContext';
import DanmuItem from './DanmuItem';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DanmuList() {
  const { messages } = useContext(WebSocketContext);
  return (
    <ScrollArea className="messages-container">
      {messages.map((msg, index) => (
        <DanmuItem key={index} message={msg} />
      ))}
    </ScrollArea>
  );
}
