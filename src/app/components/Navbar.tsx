import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Shield, Menu, X, Bell, ChevronDown } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Escrow", href: "/escrow" },
    { label: "AI Analysis", href: "/ai-analysis" },
    { label: "Chat", href: "/chat" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}
            >
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span style={{ color: "#111827", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
              Build<span style={{ color: "#1D4ED8" }}>Trust</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isActive(link.href) ? "#1D4ED8" : "#6B7280",
                  background: isActive(link.href) ? "rgba(29,78,216,0.08)" : "transparent",
                  transition: "all 0.15s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.href)) {
                    (e.target as HTMLElement).style.color = "#111827";
                    (e.target as HTMLElement).style.background = "rgba(0,0,0,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href)) {
                    (e.target as HTMLElement).style.color = "#6B7280";
                    (e.target as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <Bell className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg transition-colors"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                alt="User"
                className="w-7 h-7 rounded-full object-cover"
              />
              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#111827" }}>Alex Morgan</span>
              <ChevronDown className="w-3.5 h-3.5" style={{ color: "#6B7280" }} />
            </div>

            <Link
              to="/marketplace"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 1px 4px rgba(29,78,216,0.3)",
              }}
            >
              Start Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#6B7280" }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t mt-1 pt-3" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: isActive(link.href) ? "#1D4ED8" : "#374151",
                  background: isActive(link.href) ? "rgba(29,78,216,0.08)" : "transparent",
                  textDecoration: "none",
                  marginBottom: "2px",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/marketplace"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center py-2.5 rounded-lg text-white"
              style={{
                background: "#1D4ED8",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Start Project
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
