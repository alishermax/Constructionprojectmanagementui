import { useState } from "react";
import { Link } from "react-router";
import {
  Shield,
  LayoutDashboard,
  Wallet,
  MessageSquare,
  Brain,
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronRight,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  LogOut,
  Menu,
  X,
  Play,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";

const milestones = [
  {
    id: 1,
    title: "Site Preparation & Foundation",
    status: "Approved",
    amount: 15000,
    dueDate: "Jan 15, 2026",
    completedDate: "Jan 12, 2026",
    desc: "Excavation, grading, and concrete foundation pour",
  },
  {
    id: 2,
    title: "Framing & Structural Work",
    status: "Completed",
    amount: 22000,
    dueDate: "Feb 10, 2026",
    completedDate: "Feb 8, 2026",
    desc: "Steel frame erection, load-bearing walls, roof framing",
  },
  {
    id: 3,
    title: "Electrical & Plumbing Rough-In",
    status: "In Progress",
    amount: 18500,
    dueDate: "Mar 5, 2026",
    completedDate: null,
    desc: "Electrical conduit, plumbing pipes, HVAC ductwork installation",
  },
  {
    id: 4,
    title: "Insulation & Drywall",
    status: "Pending",
    amount: 12000,
    dueDate: "Apr 1, 2026",
    completedDate: null,
    desc: "Wall and ceiling insulation, drywall hanging and taping",
  },
  {
    id: 5,
    title: "Finishes & Final Inspection",
    status: "Pending",
    amount: 9500,
    dueDate: "May 15, 2026",
    completedDate: null,
    desc: "Paint, fixtures, trim, final inspections, and punch list",
  },
];

const activities = [
  { icon: CheckCircle2, color: "#10B981", text: "Milestone 1 payment released — $15,000", time: "2h ago" },
  { icon: FileText, color: "#1D4ED8", text: "Change order #3 submitted by Marcus Johnson", time: "5h ago" },
  { icon: Brain, color: "#8B5CF6", text: "AI Alert: Steel pricing 8% above market rate", time: "1d ago" },
  { icon: CheckCircle2, color: "#10B981", text: "Milestone 2 submitted for your review", time: "2d ago" },
  { icon: DollarSign, color: "#F59E0B", text: "Escrow deposit confirmed — $77,000", time: "3d ago" },
];

const statusConfig: Record<string, { color: string; bg: string; icon: typeof CheckCircle2 }> = {
  "Approved": { color: "#10B981", bg: "rgba(16,185,129,0.1)", icon: CheckCircle2 },
  "Completed": { color: "#1D4ED8", bg: "rgba(29,78,216,0.1)", icon: CheckCircle2 },
  "In Progress": { color: "#F59E0B", bg: "rgba(245,158,11,0.1)", icon: Play },
  "Pending": { color: "#9CA3AF", bg: "rgba(156,163,175,0.1)", icon: Clock },
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", active: true },
  { icon: Wallet, label: "Escrow", path: "/escrow" },
  { icon: MessageSquare, label: "Messages", path: "/chat" },
  { icon: Brain, label: "AI Analysis", path: "/ai-analysis" },
  { icon: Users, label: "Contractors", path: "/marketplace" },
  { icon: FileText, label: "Documents", path: "/dashboard" },
];

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<typeof milestones[0] | null>(null);

  const totalBudget = milestones.reduce((sum, m) => sum + m.amount, 0);
  const releasedAmount = milestones
    .filter((m) => m.status === "Approved")
    .reduce((sum, m) => sum + m.amount, 0);
  const lockedAmount = totalBudget - releasedAmount;
  const progress = Math.round((releasedAmount / totalBudget) * 100);

  const completedMilestones = milestones.filter((m) => m.status === "Approved" || m.status === "Completed").length;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F9FAFB", fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        style={{ width: "240px", background: "#0F172A", flexShrink: 0 }}>
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <Link to="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
              Build<span style={{ color: "#3B82F6" }}>Trust</span>
            </span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)} style={{ color: "rgba(255,255,255,0.5)" }}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project card */}
        <div className="mx-3 mt-4 p-3 rounded-xl" style={{ background: "rgba(29,78,216,0.15)", border: "1px solid rgba(29,78,216,0.2)" }}>
          <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "4px" }}>ACTIVE PROJECT</div>
          <div style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: "8px" }}>Downtown Office Complex</div>
          <div className="w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", height: "4px" }}>
            <div style={{ width: `${progress}%`, height: "100%", background: "#10B981", borderRadius: "9999px", transition: "width 0.5s ease" }} />
          </div>
          <div className="flex justify-between mt-1.5">
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)" }}>{progress}% complete</span>
            <span style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 600 }}>{completedMilestones}/{milestones.length} milestones</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pt-4 space-y-1">
          {navItems.map(({ icon: Icon, label, path, active }) => (
            <Link
              key={label}
              to={path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "9px 12px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: active ? "white" : "rgba(255,255,255,0.5)",
                background: active ? "rgba(29,78,216,0.3)" : "transparent",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}>
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div className="p-3 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-3 p-2 rounded-xl cursor-pointer"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div style={{ color: "white", fontWeight: 600, fontSize: "0.8rem" }}>Alex Morgan</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>Project Owner</div>
            </div>
            <LogOut className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4"
          style={{ background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-lg" onClick={() => setSidebarOpen(true)}
              style={{ color: "#6B7280", border: "1px solid #E5E7EB" }}>
              <Menu className="w-4 h-4" />
            </button>
            <div>
              <h1 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827" }}>Project Dashboard</h1>
              <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>Downtown Office Complex · Marcus Johnson</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg" style={{ color: "#6B7280", border: "1px solid #E5E7EB" }}>
              <Bell className="w-4 h-4" />
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-white"
              style={{ background: "#1D4ED8", fontSize: "0.8rem", fontWeight: 600, border: "none", cursor: "pointer" }}>
              <Plus className="w-3.5 h-3.5" />
              Add Milestone
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Overview cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Budget", value: `$${(totalBudget / 1000).toFixed(0)}K`, sub: "5 milestones", icon: DollarSign, color: "#1D4ED8", bg: "rgba(29,78,216,0.08)" },
              { label: "Locked in Escrow", value: `$${(lockedAmount / 1000).toFixed(0)}K`, sub: "Secure & protected", icon: Shield, color: "#F59E0B", bg: "rgba(245,158,11,0.08)" },
              { label: "Released", value: `$${(releasedAmount / 1000).toFixed(0)}K`, sub: "1 milestone approved", icon: TrendingUp, color: "#10B981", bg: "rgba(16,185,129,0.08)" },
              { label: "Progress", value: `${progress}%`, sub: `${completedMilestones} of ${milestones.length} done`, icon: CheckCircle2, color: "#8B5CF6", bg: "rgba(139,92,246,0.08)" },
            ].map(({ label, value, sub, icon: Icon, color, bg }) => (
              <div key={label} className="rounded-2xl p-5"
                style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 600 }}>{label.toUpperCase()}</span>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: bg }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                </div>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>{value}</div>
                <div style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "2px" }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="rounded-2xl p-5 mb-6"
            style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <div className="flex justify-between items-center mb-3">
              <h2 style={{ fontWeight: 700, color: "#111827" }}>Overall Progress</h2>
              <span style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                ${(releasedAmount).toLocaleString()} / ${(totalBudget).toLocaleString()}
              </span>
            </div>
            <div className="w-full rounded-full overflow-hidden" style={{ background: "#F3F4F6", height: "10px" }}>
              <div style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #1D4ED8, #10B981)",
                borderRadius: "9999px",
                transition: "width 0.5s ease",
              }} />
            </div>
            <div className="flex justify-between mt-2">
              <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>Project started Jan 2026</span>
              <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>Est. completion May 2026</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Milestones */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-5"
                style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "16px" }}>Milestones</h2>
                <div className="space-y-3">
                  {milestones.map((m, i) => {
                    const cfg = statusConfig[m.status];
                    const Icon = cfg.icon;
                    return (
                      <div key={m.id} className="flex items-start gap-4 p-4 rounded-xl transition-all"
                        style={{ border: "1px solid #F3F4F6", background: "#FAFAFA" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F0F9FF"; (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FAFAFA"; (e.currentTarget as HTMLElement).style.borderColor = "#F3F4F6"; }}>
                        {/* Timeline dot */}
                        <div className="flex flex-col items-center pt-1 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ background: cfg.bg }}>
                            <Icon className="w-3 h-3" style={{ color: cfg.color }} />
                          </div>
                          {i < milestones.length - 1 && (
                            <div className="w-0.5 mt-2" style={{ background: "#E5E7EB", height: "20px" }} />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem" }}>{m.title}</h4>
                            <span className="px-2 py-0.5 rounded-full flex-shrink-0"
                              style={{ background: cfg.bg, color: cfg.color, fontSize: "0.7rem", fontWeight: 700 }}>
                              {m.status}
                            </span>
                          </div>
                          <p style={{ fontSize: "0.78rem", color: "#6B7280", marginBottom: "8px" }}>{m.desc}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111827" }}>
                                ${m.amount.toLocaleString()}
                              </span>
                              <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                                Due: {m.dueDate}
                              </span>
                            </div>
                            {m.status === "Completed" && (
                              <button
                                onClick={() => { setSelectedMilestone(m); setShowReleaseModal(true); }}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white transition-all"
                                style={{
                                  background: "#10B981",
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                  border: "none",
                                  cursor: "pointer",
                                  boxShadow: "0 2px 6px rgba(16,185,129,0.3)",
                                }}>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                                Release Payment
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div>
              <div className="rounded-2xl p-5"
                style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "16px" }}>Activity Feed</h2>
                <div className="space-y-4">
                  {activities.map((act, i) => {
                    const Icon = act.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${act.color}15` }}>
                          <Icon className="w-3.5 h-3.5" style={{ color: act.color }} />
                        </div>
                        <div className="flex-1">
                          <p style={{ fontSize: "0.8rem", color: "#374151", lineHeight: 1.5 }}>{act.text}</p>
                          <span style={{ fontSize: "0.7rem", color: "#9CA3AF" }}>{act.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full mt-4 py-2.5 rounded-xl flex items-center justify-center gap-2"
                  style={{ border: "1px solid #E5E7EB", color: "#6B7280", fontSize: "0.8rem", fontWeight: 600, background: "transparent", cursor: "pointer" }}>
                  View All Activity
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick links */}
              <div className="mt-4 rounded-2xl p-5"
                style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Quick Actions</h2>
                <div className="space-y-2">
                  {[
                    { label: "View Escrow", to: "/escrow", icon: Shield, color: "#1D4ED8" },
                    { label: "AI Price Check", to: "/ai-analysis", icon: Brain, color: "#8B5CF6" },
                    { label: "Message Contractor", to: "/chat", icon: MessageSquare, color: "#10B981" },
                  ].map(({ label, to, icon: Icon, color }) => (
                    <Link key={label} to={to}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all"
                      style={{
                        textDecoration: "none",
                        border: "1px solid #F3F4F6",
                        color: "#374151",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = color; (e.currentTarget as HTMLElement).style.background = `${color}08`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F3F4F6"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: `${color}12` }}>
                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                      </div>
                      <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>{label}</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-auto" style={{ color: "#D1D5DB" }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Release Payment Modal */}
      {showReleaseModal && selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowReleaseModal(false)}>
          <div className="rounded-2xl p-6 max-w-md w-full"
            style={{ background: "white", boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}
            onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(16,185,129,0.1)" }}>
                <ArrowUpRight className="w-7 h-7" style={{ color: "#10B981" }} />
              </div>
              <h3 style={{ fontWeight: 800, color: "#111827", fontSize: "1.2rem" }}>Release Payment</h3>
              <p style={{ fontSize: "0.85rem", color: "#6B7280", marginTop: "4px" }}>
                Confirm milestone completion to release funds
              </p>
            </div>

            <div className="rounded-xl p-4 mb-4" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <div style={{ fontWeight: 600, color: "#111827", marginBottom: "4px" }}>
                {selectedMilestone.title}
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#10B981", letterSpacing: "-0.03em" }}>
                ${selectedMilestone.amount.toLocaleString()}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                Will be sent to Marcus Johnson's wallet
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", color: "#6B7280", marginBottom: "16px", lineHeight: 1.5 }}>
              By releasing this payment, you confirm that the milestone has been completed to your satisfaction. This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button onClick={() => setShowReleaseModal(false)}
                className="flex-1 py-3 rounded-xl"
                style={{ background: "#F3F4F6", color: "#374151", fontWeight: 600, border: "none", cursor: "pointer" }}>
                Cancel
              </button>
              <button
                onClick={() => setShowReleaseModal(false)}
                className="flex-1 py-3 rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg, #10B981, #059669)",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(16,185,129,0.3)",
                }}>
                Confirm Release
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
