import { useState } from "react";
import { Link } from "react-router";
import {
  Brain,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Info,
  Download,
  RefreshCw,
  Shield,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

const materials = [
  {
    name: "Portland Cement",
    unit: "per bag (50kg)",
    marketPrice: 12.5,
    paidPrice: 12.8,
    qty: 500,
    totalMarket: 6250,
    totalPaid: 6400,
    risk: "Low",
    variance: 2.4,
    category: "Foundation",
  },
  {
    name: "Structural Steel (Grade A)",
    unit: "per ton",
    marketPrice: 920,
    paidPrice: 993.6,
    qty: 15,
    totalMarket: 13800,
    totalPaid: 14904,
    risk: "Medium",
    variance: 8.0,
    category: "Framing",
  },
  {
    name: "Electrical Wire (Cu 12AWG)",
    unit: "per roll (100m)",
    marketPrice: 85,
    paidPrice: 127.5,
    qty: 40,
    totalMarket: 3400,
    totalPaid: 5100,
    risk: "High",
    variance: 50.0,
    category: "Electrical",
  },
  {
    name: "PVC Pipe 4-inch",
    unit: "per 6m length",
    marketPrice: 18.5,
    paidPrice: 17.2,
    qty: 120,
    totalMarket: 2220,
    totalPaid: 2064,
    risk: "Low",
    variance: -7.0,
    category: "Plumbing",
  },
  {
    name: "Drywall Sheets 4x8",
    unit: "per sheet",
    marketPrice: 14.2,
    paidPrice: 19.88,
    qty: 300,
    totalMarket: 4260,
    totalPaid: 5964,
    risk: "High",
    variance: 40.0,
    category: "Interior",
  },
  {
    name: "Concrete (Ready Mix)",
    unit: "per cubic yard",
    marketPrice: 145,
    paidPrice: 151.25,
    qty: 80,
    totalMarket: 11600,
    totalPaid: 12100,
    risk: "Low",
    variance: 4.3,
    category: "Foundation",
  },
  {
    name: "Rebar (Grade 60)",
    unit: "per ton",
    marketPrice: 730,
    paidPrice: 788.4,
    qty: 8,
    totalMarket: 5840,
    totalPaid: 6307,
    risk: "Medium",
    variance: 8.0,
    category: "Foundation",
  },
  {
    name: "HVAC Ductwork",
    unit: "per linear foot",
    marketPrice: 22,
    paidPrice: 21.12,
    qty: 400,
    totalMarket: 8800,
    totalPaid: 8448,
    risk: "Low",
    variance: -4.0,
    category: "HVAC",
  },
];

const chartData = materials.map((m) => ({
  name: m.name.split(" ").slice(0, 2).join(" "),
  market: m.marketPrice,
  paid: m.paidPrice,
  variance: m.variance,
}));

const trendData = [
  { month: "Oct", alerts: 2, flagged: 0 },
  { month: "Nov", alerts: 4, flagged: 1 },
  { month: "Dec", alerts: 3, flagged: 1 },
  { month: "Jan", alerts: 6, flagged: 2 },
  { month: "Feb", alerts: 5, flagged: 1 },
  { month: "Mar", alerts: 8, flagged: 3 },
  { month: "Apr", alerts: 4, flagged: 2 },
];

const riskConfig = {
  Low: { color: "#10B981", bg: "rgba(16,185,129,0.1)", icon: CheckCircle2, label: "Low Risk" },
  Medium: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)", icon: AlertTriangle, label: "Medium Risk" },
  High: { color: "#EF4444", bg: "rgba(239,68,68,0.1)", icon: AlertTriangle, label: "High Risk — Review" },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl p-3" style={{ background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB" }}>
        <p style={{ fontWeight: 600, color: "#111827", marginBottom: "6px", fontSize: "0.8rem" }}>{label}</p>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>{p.name}:</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#111827" }}>${p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function AIAnalysis() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"variance" | "risk">("variance");

  const highRisk = materials.filter((m) => m.risk === "High");
  const totalOverpaid = materials.reduce((sum, m) => sum + Math.max(0, m.totalPaid - m.totalMarket), 0);
  const totalSaved = materials.reduce((sum, m) => sum + Math.max(0, m.totalMarket - m.totalPaid), 0);

  const categories = ["All", ...Array.from(new Set(materials.map((m) => m.category)))];

  const filtered = materials
    .filter((m) => activeCategory === "All" || m.category === activeCategory)
    .sort((a, b) => sortBy === "variance" ? Math.abs(b.variance) - Math.abs(a.variance) : 0);

  const overallRisk = highRisk.length >= 2 ? "High" : highRisk.length === 1 ? "Medium" : "Low";
  const riskCfg = riskConfig[overallRisk as keyof typeof riskConfig];

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0F172A, #312E81)", padding: "48px 0 80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/dashboard" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem" }}>Dashboard</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
            <span style={{ color: "white", fontSize: "0.85rem" }}>AI Price Analysis</span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.2)" }}>
                  <Brain className="w-5 h-5" style={{ color: "#A78BFA" }} />
                </div>
                <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
                  AI Price Analysis
                </h1>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>
                Downtown Office Complex · Last updated 2 hours ago
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", fontSize: "0.85rem", fontWeight: 500, border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}>
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all"
                style={{ background: "#8B5CF6", color: "white", fontSize: "0.85rem", fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(139,92,246,0.4)" }}>
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: "-48px" }}>
        {/* Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Overall Risk Level",
              value: overallRisk,
              sub: `${highRisk.length} items flagged`,
              icon: riskCfg.icon,
              color: riskCfg.color,
              bg: riskCfg.bg,
            },
            {
              label: "Potential Overpayment",
              value: `$${totalOverpaid.toLocaleString()}`,
              sub: "Detected in materials",
              icon: TrendingUp,
              color: "#EF4444",
              bg: "rgba(239,68,68,0.08)",
            },
            {
              label: "Savings Identified",
              value: `$${totalSaved.toLocaleString()}`,
              sub: "Under-market pricing",
              icon: TrendingDown,
              color: "#10B981",
              bg: "rgba(16,185,129,0.08)",
            },
            {
              label: "Items Analyzed",
              value: `${materials.length}`,
              sub: "Across all categories",
              icon: Brain,
              color: "#8B5CF6",
              bg: "rgba(139,92,246,0.08)",
            },
          ].map(({ label, value, sub, icon: Icon, color, bg }) => (
            <div key={label} className="rounded-2xl p-5"
              style={{ background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontSize: "0.72rem", color: "#6B7280", fontWeight: 600 }}>{label.toUpperCase()}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: bg }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: color === "#EF4444" ? color : "#111827", letterSpacing: "-0.03em" }}>
                {value}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "2px" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Risk banner */}
        {highRisk.length > 0 && (
          <div className="rounded-2xl p-4 mb-6 flex items-start gap-3"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
            <div>
              <div style={{ fontWeight: 700, color: "#B91C1C", marginBottom: "2px" }}>
                {highRisk.length} High-Risk Items Detected
              </div>
              <p style={{ fontSize: "0.85rem", color: "#DC2626", lineHeight: 1.5 }}>
                {highRisk.map((m) => m.name).join(" and ")} are priced significantly above market rates.
                We recommend requesting itemized quotes from the contractor.
              </p>
            </div>
          </div>
        )}

        {/* Charts section */}
        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          {/* Bar chart */}
          <div className="rounded-2xl p-5"
            style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "4px" }}>Market vs Paid Price</h2>
            <p style={{ fontSize: "0.8rem", color: "#6B7280", marginBottom: "16px" }}>Unit price comparison per material</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis tick={{ fontSize: 11, fill: "#6B7280" }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "0.75rem" }} />
                <Bar dataKey="market" name="Market Price" fill="#1D4ED8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="paid" name="Paid Price" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={entry.variance > 20 ? "#EF4444" : entry.variance > 8 ? "#F59E0B" : "#10B981"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line chart */}
          <div className="rounded-2xl p-5"
            style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "4px" }}>Alert Trend</h2>
            <p style={{ fontSize: "0.8rem", color: "#6B7280", marginBottom: "16px" }}>Monthly price alerts vs flagged items</p>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis tick={{ fontSize: 11, fill: "#6B7280" }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "0.75rem" }} />
                <Line type="monotone" dataKey="alerts" name="Alerts" stroke="#1D4ED8" strokeWidth={2} dot={{ fill: "#1D4ED8", r: 4 }} />
                <Line type="monotone" dataKey="flagged" name="Flagged High Risk" stroke="#EF4444" strokeWidth={2} dot={{ fill: "#EF4444", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Materials Table */}
        <div className="rounded-2xl mb-16"
          style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b" style={{ borderColor: "#F3F4F6" }}>
            <h2 style={{ fontWeight: 700, color: "#111827" }}>Material Price Analysis</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 rounded-lg text-sm transition-all"
                  style={{
                    background: activeCategory === cat ? "#1D4ED8" : "rgba(0,0,0,0.04)",
                    color: activeCategory === cat ? "white" : "#374151",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                  }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "#F9FAFB" }}>
                  {["Material", "Category", "Market Average", "Price Paid", "Variance", "Total Difference", "Risk Level"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left"
                      style={{ fontSize: "0.72rem", fontWeight: 600, color: "#6B7280", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((mat, i) => {
                  const risk = riskConfig[mat.risk as keyof typeof riskConfig];
                  const RiskIcon = risk.icon;
                  const diff = mat.totalPaid - mat.totalMarket;
                  const isOverpriced = mat.variance > 0;

                  return (
                    <tr key={i} style={{ borderTop: "1px solid #F3F4F6" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F9FAFB"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                      <td className="px-5 py-4">
                        <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>{mat.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>{mat.unit} · Qty: {mat.qty}</div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 rounded-lg"
                          style={{ background: "rgba(29,78,216,0.06)", color: "#1D4ED8", fontSize: "0.72rem", fontWeight: 600 }}>
                          {mat.category}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>
                          ${mat.marketPrice.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span style={{ fontWeight: 700, color: isOverpriced ? "#EF4444" : "#10B981", fontSize: "0.875rem" }}>
                          ${mat.paidPrice.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          {isOverpriced ? (
                            <ArrowUpRight className="w-4 h-4" style={{ color: "#EF4444" }} />
                          ) : (
                            <ArrowDownRight className="w-4 h-4" style={{ color: "#10B981" }} />
                          )}
                          <span style={{
                            fontWeight: 700,
                            color: mat.variance > 20 ? "#EF4444" : mat.variance > 8 ? "#F59E0B" : mat.variance < 0 ? "#10B981" : "#111827",
                            fontSize: "0.875rem",
                          }}>
                            {mat.variance > 0 ? "+" : ""}{mat.variance.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span style={{
                          fontWeight: 700,
                          color: diff > 0 ? "#EF4444" : "#10B981",
                          fontSize: "0.875rem",
                        }}>
                          {diff > 0 ? "+" : "-"}${Math.abs(diff).toLocaleString()}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg w-fit"
                          style={{ background: risk.bg }}>
                          <RiskIcon className="w-3.5 h-3.5" style={{ color: risk.color }} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: risk.color }}>
                            {mat.risk}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          <div className="p-5 border-t flex flex-wrap items-center justify-between gap-4"
            style={{ borderColor: "#F3F4F6" }}>
            <div className="flex gap-6">
              <div>
                <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>Total Overpayment Risk</span>
                <div style={{ fontWeight: 800, color: "#EF4444", fontSize: "1rem" }}>
                  +${totalOverpaid.toLocaleString()}
                </div>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>Under-Market Savings</span>
                <div style={{ fontWeight: 800, color: "#10B981", fontSize: "1rem" }}>
                  -${totalSaved.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}>
              <Brain className="w-4 h-4" style={{ color: "#8B5CF6" }} />
              <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 600 }}>
                AI recommends disputing 2 line items to save ${totalOverpaid.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
