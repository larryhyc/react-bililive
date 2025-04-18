import { useState, useEffect, useRef } from 'react';
import { Input } from './ui/input';

const RoomForm = () => {
  const [roomId, setRoomId] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:8080/change-room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <Input
        type="text"
        placeholder="请输入房间号"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button type="submit" className="w-14 bg-blue-300 text-white rounded h-9">
        确认
      </button>
    </form>
  );
};

export default RoomForm;
