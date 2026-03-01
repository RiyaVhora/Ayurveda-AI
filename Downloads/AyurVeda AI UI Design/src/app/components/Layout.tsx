import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Menu, Camera } from "lucide-react";
import { SideDrawer } from "./SideDrawer";

export function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 hover:bg-primary/80 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl text-primary-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
            AyurVeda AI
          </h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Side Drawer */}
      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Floating Action Button - Identify via Camera */}
      <button
        onClick={() => navigate("/ai-identification")}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center z-30"
        aria-label="Identify via Camera"
      >
        <Camera className="w-7 h-7" />
      </button>
    </div>
  );
}