import { Outlet } from "react-router-dom";

interface LayoutProps {
  showSidebar?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ showSidebar, showHeader, showFooter }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
};

export default Layout;