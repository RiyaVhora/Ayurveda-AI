import { useNavigate, useLocation } from "react-router";
import { X, BookOpen, Camera, MessageCircle, Leaf } from "lucide-react";
import { motion } from "motion/react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      id: "dictionary", 
      label: "Medicinal Dictionary", 
      icon: BookOpen, 
      path: "/" 
    },
    { 
      id: "ai-identification", 
      label: "AI Plant Identification", 
      icon: Camera, 
      path: "/ai-identification" 
    },
    { 
      id: "chatbot", 
      label: "Ayur Chatbot", 
      icon: MessageCircle, 
      path: "/chatbot" 
    },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-50"
        />
      )}

      {/* Drawer */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-[75%] max-w-md bg-sidebar text-sidebar-foreground shadow-xl z-50"
      >
        <div className="flex flex-col h-full">
          {/* Header with Botanical Illustration */}
          <div className="px-6 py-6 border-b border-sidebar-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg text-sidebar-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                    Welcome
                  </h2>
                  <p className="text-xs text-sidebar-foreground/70">Explore Ayurvedic Wisdom</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "hover:bg-sidebar-accent text-sidebar-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-sidebar-border space-y-3">
            <div className="space-y-2">
              <button className="text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                About Ayurveda
              </button>
              <br />
              <button className="text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                Settings
              </button>
            </div>
            <p className="text-xs text-sidebar-foreground/50 pt-2">
              AyurVeda AI v1.0
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
}