interface DanmuItemProps {
  message: {
    uname: string;
    content: string;
    emoji?: string;
  };
}

export default function DanmuItem({ message }: DanmuItemProps) {
  return (
    <div className="message">
      <span className="username">{message.uname}: </span>
      <span className="content">{message.content}</span>
      {message.emoji && <span className="emoji">{message.emoji}</span>}
    </div>
  );
}
