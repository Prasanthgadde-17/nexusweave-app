import { motion } from "framer-motion";
import { Search, Bell, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full hidden lg:block"
    >
      <div className="mx-4 mt-4">
        <div className="bg-card/70 backdrop-blur-md border border-border/50 rounded-2xl shadow-soft">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Left - Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts, people, topics..."
                  className="pl-10 bg-muted/30 border-border/30 focus:bg-card focus:border-primary/50 transition-all duration-300 rounded-xl"
                />
              </div>
            </div>

            {/* Right - Notifications and Create */}
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-gradient-accent">
                    3
                  </Badge>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="gradient" size="sm">
                  <PlusCircle className="h-4 w-4" />
                  Create
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};