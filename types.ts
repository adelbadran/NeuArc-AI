export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface FloatingElementProps {
    text: string;
    delay?: number;
    x: number;
    y: number;
}