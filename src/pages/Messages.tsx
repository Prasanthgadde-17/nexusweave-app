import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChatSidebar } from "@/components/messages/ChatSidebar";
import { ChatWindow } from "@/components/messages/ChatWindow";

export interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<ChatUser | null>(null);

  // Mock data - replace with actual data later
  const chatUsers: ChatUser[] = [
    {
      id: "1",
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c9a4?w=150&h=150&fit=crop&crop=face",
      lastMessage: "Hey! How's the new project going?",
      lastMessageTime: "2 min",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2", 
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      lastMessage: "Thanks for sharing that article!",
      lastMessageTime: "1h",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      lastMessage: "See you at the meeting tomorrow",
      lastMessageTime: "3h",
      unreadCount: 1,
      isOnline: true,
    },
  ];

  return (
    <AppLayout>
      <div className="h-full flex bg-background">
        <ChatSidebar 
          users={chatUsers}
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
        />
        <ChatWindow 
          selectedChat={selectedChat}
        />
      </div>
    </AppLayout>
  );
};

export default Messages;