import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isChat = location.pathname === "/chat";

  // Dashboard and Chat have their own full-height layouts
  const isFullHeight = isDashboard || isChat;

  return (
    <div className="min-h-screen" style={{ background: "#F9FAFB", fontFamily: "'Inter', sans-serif" }}>
      {!isFullHeight && <Navbar />}
      <Outlet />
    </div>
  );
}
