import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Compass, 
  Users, 
  MessageSquare, 
  Bookmark, 
  User, 
  Settings,
  TrendingUp,
  Newspaper,
  Heart
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Explore", url: "/explore", icon: Compass },
  { title: "Messages", url: "/messages", icon: MessageSquare, badge: 5 },
  { title: "Communities", url: "/communities", icon: Users },
  { title: "Bookmarks", url: "/bookmarks", icon: Bookmark },
];

const contentItems = [
  { title: "Tech News", url: "/news", icon: Newspaper },
  { title: "Trending", url: "/trending", icon: TrendingUp },
  { title: "Following", url: "/following", icon: Heart },
];

const accountItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  
  const getNavClassName = (path: string) => {
    const baseClasses = "transition-all duration-300 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";
    return isActive(path) 
      ? `${baseClasses} bg-sidebar-primary text-sidebar-primary-foreground shadow-medium` 
      : baseClasses;
  };

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 }
  };

  return (
    <motion.div
      variants={sidebarVariants}
      animate={collapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Sidebar className="border-r border-sidebar-border bg-sidebar">
        <SidebarContent className="px-2 py-4">
          {/* Logo/Brand */}
          <motion.div 
            className="px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {!collapsed ? (
              <h2 className="text-2xl font-bold gradient-text">NexusWeave</h2>
            ) : (
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
            )}
          </motion.div>

          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
              Main
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className={getNavClassName(item.url)}>
                        <NavLink to={item.url} className="flex items-center">
                          <item.icon className="h-5 w-5" />
                          {!collapsed && (
                            <>
                              <span className="ml-3">{item.title}</span>
                              {item.badge && (
                                <Badge className="ml-auto bg-gradient-accent text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Content Section */}
          <SidebarGroup>
            <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
              Content
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {contentItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + mainItems.length) * 0.1 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className={getNavClassName(item.url)}>
                        <NavLink to={item.url} className="flex items-center">
                          <item.icon className="h-5 w-5" />
                          {!collapsed && <span className="ml-3">{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Account Section */}
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
              Account
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {accountItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + mainItems.length + contentItems.length) * 0.1 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className={getNavClassName(item.url)}>
                        <NavLink to={item.url} className="flex items-center">
                          <item.icon className="h-5 w-5" />
                          {!collapsed && <span className="ml-3">{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </motion.div>
  );
};