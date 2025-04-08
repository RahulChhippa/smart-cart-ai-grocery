
import React, { ReactNode } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  onSearchChange?: (term: string) => void;
}

const Layout = ({ children, onSearchChange }: LayoutProps) => {
  const location = useLocation();
  const showSearch = location.pathname === "/products" || location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearchChange={showSearch ? onSearchChange : undefined} />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-grocery-light py-6 border-t">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 SmartCart AI Grocery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
