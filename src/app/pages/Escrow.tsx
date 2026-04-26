import { Link } from "react-router";
import {
  Shield,
  ArrowRight,
  ArrowUpRight,
  ArrowDownLeft,
  Lock,
  CheckCircle2,
  Clock,
  TrendingUp,
  Eye,
  Download,
  Filter,
} from "lucide-react";

const transactions = [
  {
    id: "TXN-001",
    type: "deposit",
    desc: "Initial escrow deposit",
    amount: 77000,
    date: "Jan 5, 2026",
    status: "Completed",
    from: "Alex Morgan",
    to: "Escrow Account",
  },
  {
    id: "TXN-002",
    type: "release",
    desc: "Milestone 1: Site Preparation",
    amount: 15000,
    date: "Jan 14, 2026",
    status: "Completed",
    from: "Escrow Account",
    to: "Marcus Johnson",
  },
  {
    id: "TXN-003",
    type: "fee",
    desc: "Platform fee (2%)",
    amount: 300,
    date: "Jan 14, 2026",
    status: "Completed",
    from: "Escrow Account",
    to: "BuildTrust",
  },
  {
    id: "TXN-004",
    type: "deposit",
    desc: "Additional escrow top-up",
    amount: 5000,
    date: "Feb 1, 2026",
    status: "Completed",
    from: "Alex Morgan",
    to: "Escrow Account",
  },
  {
    id: "TXN-005",
    type: "pending",
    desc: "Milestone 2: Framing — Pending approval",
    amount: 22000,
    date: "Apr 25, 2026",
    status: "Pending",
    from: "Escrow Account",
    to: "Marcus Johnson",
  },
];

const typeConfig: Record<string, { icon: typeof ArrowUpRight; color: string; bg: string; label: string }> = {
  deposit: { icon: ArrowDownLeft, color: "#10B981", bg: "rgba(16,185,129,0.1)", label: "Deposit" },
  release: { icon: ArrowUpRight, color: "#1D4ED8", bg: "rgba(29,78,216,0.1)", label: "Released" },
  fee: { icon: ArrowUpRight, color: "#6B7280", bg: "rgba(107,114,128,0.1)", label: "Fee" },
  pending: { icon: Clock, color: "#F59E0B", bg: "rgba(245,158,11,0.1)", label: "Pending" },
};

export function Escrow() {
  const totalEscrow = 77000 + 5000;
  const released = 15000 + 300;
  const locked = totalEscrow - released;

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)", padding: "48px 0 80px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/dashboard" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem" }}>
              Dashboard
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
            <span style={{ color: "white", fontSize: "0.85rem" }}>Escrow</span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: "6px" }}>
            Escrow Account
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>Downtown Office Complex · Secure payment management</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: "-48px" }}>
        {/* Escrow Flow Visual */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "20px" }}>Payment Flow</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Client */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(29,78,216,0.08)", border: "2px solid rgba(29,78,216,0.15)" }}>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face"
                  alt="Client"
                  className="w-12 h-12 rounded-xl object-cover"
                />
              </div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>Alex Morgan</div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Client</div>
              <div className="mt-2 px-3 py-1 rounded-full"
                style={{ background: "rgba(29,78,216,0.08)", display: "inline-block" }}>
                <span style={{ fontWeight: 700, color: "#1D4ED8", fontSize: "0.75rem" }}>
                  ${(totalEscrow / 1000).toFixed(0)}K deposited
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-20 sm:w-24" style={{ background: "linear-gradient(90deg, #1D4ED8, #6B7280)" }} />
              <div className="mt-1 flex items-center gap-1">
                <ArrowRight className="w-4 h-4" style={{ color: "#1D4ED8" }} />
                <span style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 500 }}>Deposited to</span>
              </div>
            </div>

            {/* Escrow */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(16,185,129,0.08)", border: "2px dashed rgba(16,185,129,0.4)" }}>
                <Shield className="w-8 h-8" style={{ color: "#10B981" }} />
              </div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>BuildTrust Escrow</div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Secure Vault</div>
              <div className="mt-2 px-3 py-1 rounded-full"
                style={{ background: "rgba(16,185,129,0.08)", display: "inline-block" }}>
                <span style={{ fontWeight: 700, color: "#10B981", fontSize: "0.75rem" }}>
                  ${(locked / 1000).toFixed(1)}K locked
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-20 sm:w-24" style={{ background: "linear-gradient(90deg, #6B7280, #10B981)" }} />
              <div className="mt-1 flex items-center gap-1">
                <ArrowRight className="w-4 h-4" style={{ color: "#10B981" }} />
                <span style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 500 }}>Released to</span>
              </div>
            </div>

            {/* Contractor */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(245,158,11,0.08)", border: "2px solid rgba(245,158,11,0.15)" }}>
                <img
                  src="https://images.unsplash.com/photo-1659353586403-7abfe52d0665?w=60&h=60&fit=crop&crop=face"
                  alt="Contractor"
                  className="w-12 h-12 rounded-xl object-cover"
                />
              </div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.875rem" }}>Marcus Johnson</div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Contractor</div>
              <div className="mt-2 px-3 py-1 rounded-full"
                style={{ background: "rgba(245,158,11,0.08)", display: "inline-block" }}>
                <span style={{ fontWeight: 700, color: "#F59E0B", fontSize: "0.75rem" }}>
                  ${(released / 1000).toFixed(1)}K received
                </span>
              </div>
            </div>
          </div>

          {/* Condition note */}
          <div className="mt-6 flex items-center justify-center gap-2 p-3 rounded-xl"
            style={{ background: "#F0FDF4", border: "1px solid rgba(16,185,129,0.2)" }}>
            <Lock className="w-4 h-4" style={{ color: "#10B981" }} />
            <span style={{ fontSize: "0.8rem", color: "#065F46", fontWeight: 500 }}>
              Funds are released only upon your explicit approval of each milestone.
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              label: "Total Deposited",
              value: `$${totalEscrow.toLocaleString()}`,
              icon: ArrowDownLeft,
              color: "#1D4ED8",
              bg: "rgba(29,78,216,0.08)",
              sub: "2 deposits made",
            },
            {
              label: "Locked in Escrow",
              value: `$${locked.toLocaleString()}`,
              icon: Lock,
              color: "#F59E0B",
              bg: "rgba(245,158,11,0.08)",
              sub: "4 milestones remaining",
            },
            {
              label: "Total Released",
              value: `$${released.toLocaleString()}`,
              icon: ArrowUpRight,
              color: "#10B981",
              bg: "rgba(16,185,129,0.08)",
              sub: "1 milestone approved",
            },
          ].map(({ label, value, icon: Icon, color, bg, sub }) => (
            <div key={label} className="rounded-2xl p-5"
              style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
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

        {/* Transaction History */}
        <div className="rounded-2xl mb-16"
          style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
          <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: "#F3F4F6" }}>
            <h2 style={{ fontWeight: 700, color: "#111827" }}>Transaction History</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg"
                style={{ border: "1px solid #E5E7EB", color: "#6B7280", fontSize: "0.8rem", fontWeight: 500, background: "transparent", cursor: "pointer" }}>
                <Filter className="w-3.5 h-3.5" />
                Filter
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg"
                style={{ border: "1px solid #E5E7EB", color: "#6B7280", fontSize: "0.8rem", fontWeight: 500, background: "transparent", cursor: "pointer" }}>
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "#F9FAFB" }}>
                  {["Transaction ID", "Description", "Type", "Amount", "Date", "Status", ""].map((h) => (
                    <th key={h} className="px-5 py-3 text-left"
                      style={{ fontSize: "0.72rem", fontWeight: 600, color: "#6B7280", letterSpacing: "0.05em" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => {
                  const cfg = typeConfig[tx.type];
                  const Icon = cfg.icon;
                  return (
                    <tr key={tx.id}
                      style={{ borderTop: "1px solid #F3F4F6" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F9FAFB"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                      <td className="px-5 py-4">
                        <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#6B7280", fontFamily: "monospace" }}>
                          {tx.id}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div style={{ fontWeight: 500, color: "#111827", fontSize: "0.875rem" }}>{tx.desc}</div>
                        <div style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>{tx.from} → {tx.to}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: cfg.bg }}>
                            <Icon className="w-3 h-3" style={{ color: cfg.color }} />
                          </div>
                          <span style={{ fontSize: "0.8rem", color: cfg.color, fontWeight: 600 }}>{cfg.label}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span style={{
                          fontWeight: 800,
                          color: tx.type === "deposit" ? "#10B981" : tx.type === "pending" ? "#F59E0B" : "#111827",
                          fontSize: "0.9rem",
                        }}>
                          {tx.type === "deposit" ? "+" : "-"}${tx.amount.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span style={{ fontSize: "0.85rem", color: "#6B7280" }}>{tx.date}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 rounded-full"
                          style={{
                            background: tx.status === "Completed" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                            color: tx.status === "Completed" ? "#10B981" : "#F59E0B",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                          }}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button className="p-1.5 rounded-lg transition-colors"
                          style={{ color: "#6B7280", border: "none", background: "transparent", cursor: "pointer" }}>
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
