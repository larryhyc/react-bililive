export interface DanmuMessage {
  uname: string;
  content: string;
  emojiUrl?: string;
  emojiWidth?: number;
  emojiHeight?: number;
}

export interface DanmuItemProps {
  message: {
    uname: string;
    content: string;
    emojiUrl?: string;
    emojiWidth?: number;
    emojiHeight?: number;
  };
}