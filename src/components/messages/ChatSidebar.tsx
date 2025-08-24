import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ChatUser } from "@/pages/Messages";

interface ChatSidebarProps {
  users: ChatUser[];
  selectedChat: ChatUser | null;
  onSelectChat: (user: ChatUser) => void;
}

export const ChatSidebar = ({ users, selectedChat, onSelectChat }: ChatSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 border-r border-border bg-card flex flex-col">
      {/* Header with back button */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Messages</h1>
          <Button variant="ghost" size="icon" className="ml-auto text-muted-foreground hover:text-foreground">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary/50 border-secondary focus:bg-background"
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {filteredUsers.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ backgroundColor: "hsl(var(--muted)/0.5)" }}
            className={cn(
              "p-4 cursor-pointer border-b border-border/50 transition-colors",
              selectedChat?.id === user.id && "bg-muted"
            )}
            onClick={() => onSelectChat(user)}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {user.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-background rounded-full" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-sm truncate">{user.name}</h3>
                  <span className="text-xs text-muted-foreground">{user.lastMessageTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate flex-1">
                    {user.lastMessage}
                  </p>
                  {user.unreadCount > 0 && (
                    <Badge variant="default" className="ml-2 px-1.5 py-0 text-xs h-5 min-w-5 rounded-full">
                      {user.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            <p>No conversations found</p>
          </div>
        )}
      </div>
    </div>
  );
};