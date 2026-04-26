import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Marketplace } from "./pages/Marketplace";
import { SellerProfile } from "./pages/SellerProfile";
import { Dashboard } from "./pages/Dashboard";
import { Escrow } from "./pages/Escrow";
import { Chat } from "./pages/Chat";
import { AIAnalysis } from "./pages/AIAnalysis";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Landing },
      { path: "marketplace", Component: Marketplace },
      { path: "seller/:id", Component: SellerProfile },
      { path: "dashboard", Component: Dashboard },
      { path: "escrow", Component: Escrow },
      { path: "chat", Component: Chat },
      { path: "ai-analysis", Component: AIAnalysis },
    ],
  },
]);
