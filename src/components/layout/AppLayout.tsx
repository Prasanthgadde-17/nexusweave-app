import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Navbar } from "./Navbar";
import { MobileBottomNav } from "./MobileBottomNav";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  const hideNavbar = ['/messages', '/communities'].includes(location.pathname);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-surface">
        {!hideNavbar && <AppSidebar />}
        
        <div className="flex-1 flex flex-col">
          {!hideNavbar && <Navbar />}
          
          <main className={`flex-1 overflow-auto ${hideNavbar ? 'pb-0' : 'pb-20 lg:pb-0'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          
          {!hideNavbar && <MobileBottomNav />}
        </div>
      </div>
    </SidebarProvider>
  );
};