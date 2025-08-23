import { motion } from "framer-motion";
import { Search, Bell, MessageCircle, PlusCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md border-b border-border shadow-soft"
    >
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden" />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden lg:block"
          >
            <h1 className="text-xl font-bold gradient-text">NexusWeave</h1>
          </motion.div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts, people, topics..."
              className="pl-10 bg-muted/50 border-border/50 focus:bg-card focus:border-primary/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-gradient-accent">
                3
              </Badge>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="relative">
              <MessageCircle className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-gradient-primary">
                5
              </Badge>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="gradient" size="sm" className="hidden sm:flex">
              <PlusCircle className="h-4 w-4" />
              Create
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Avatar className="h-8 w-8 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};