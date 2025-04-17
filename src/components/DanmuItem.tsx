import { useEffect, useRef } from "react";
import { DanmuItemProps } from "../interface/Danmu";


export default function DanmuItem({ message }: DanmuItemProps) {
  const DanmuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (DanmuRef.current) {
      DanmuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  },[message])

  return (
    <div className="message" >
      <span className="username">{message.uname}: </span>
      <span className="content" ref={DanmuRef}>{message.content}</span>
    </div>
  );
}
