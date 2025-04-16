import { useContext } from 'react';
import { WebSocketContext } from '../contexts/WebSocketContext';
import DanmuItem from './DanmuItem';

export default function DanmuList() {
  const { messages } = useContext(WebSocketContext);
  return (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <DanmuItem key={index} message={msg} />
      ))}
    </div>
  );
}
