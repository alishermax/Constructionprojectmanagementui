import { useState } from "react";
import { Link } from "react-router";
import {
  Star,
  MapPin,
  BadgeCheck,
  ArrowLeft,
  MessageSquare,
  Calendar,
  Award,
  ThumbsUp,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const PORTFOLIO = [
  "https://images.unsplash.com/photo-1768321903885-d0a6798485d2?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1765371514650-1f99696ca69f?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1608928657003-38ee0da940d8?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1751486289947-4f5f5961b3aa?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1668910227848-8b604673e051?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?w=400&h=280&fit=crop",
];

const reviews = [
  {
    name: "James L.",
    rating: 5,
    date: "March 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    text: "Marcus did an outstanding job on our commercial renovation. Every milestone was completed on time and the BuildTrust escrow gave us complete peace of mind. Highly recommend!",
    project: "Office Renovation",
  },
  {
    name: "Sarah T.",
    rating: 5,
    date: "February 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    text: "Professional, transparent and incredibly skilled. He communicated every step of the way and the final result exceeded our expectations. The AI price analysis caught one overpriced material which saved us $3,200.",
    project: "Home Addition",
  },
  {
    name: "Carlos M.",
    rating: 4,
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    text: "Great work overall. A few minor delays on one milestone but communicated proactively. Quality of work was excellent and I would hire again.",
    project: "Basement Finish",
  },
];

const packages = [
  {
    name: "Basic",
    price: "$2,500",
    desc: "Small renovation projects",
    features: ["Up to 500 sq ft", "2 milestones", "14-day completion", "Email support", "Basic materials report"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$7,500",
    desc: "Medium residential projects",
    features: ["Up to 2,000 sq ft", "5 milestones", "30-day completion", "Priority support", "Full AI price analysis", "Weekly progress reports"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Large commercial projects",
    features: ["Unlimited scope", "Custom milestones", "Custom timeline", "Dedicated manager", "Full compliance reporting", "On-site inspections"],
    popular: false,
  },
];

export function SellerProfile() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "reviews" | "packages">("portfolio");
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      {/* Cover */}
      <div className="relative h-48 lg:h-64 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?w=1200)`, backgroundSize: "cover" }} />
        <Link to="/marketplace"
          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{ background: "rgba(255,255,255,0.1)", color: "white", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500 }}>
          <ArrowLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile header */}
        <div className="relative -mt-16 mb-6">
          <div className="rounded-2xl p-6"
            style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.04)" }}>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1659353586403-7abfe52d0665?w=120&h=120&fit=crop&crop=face"
                  alt="Marcus Johnson"
                  className="w-24 h-24 rounded-2xl object-cover"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)", border: "3px solid white" }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "#10B981", border: "2px solid white" }}>
                  <BadgeCheck className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
                        Marcus Johnson
                      </h1>
                      <span className="px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", fontSize: "0.7rem", fontWeight: 700 }}>
                        TOP RATED
                      </span>
                    </div>
                    <p style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "8px" }}>General Contractor & Project Manager</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5" style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                          ))}
                        </div>
                        <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem" }}>4.9</span>
                        <span style={{ color: "#6B7280", fontSize: "0.8rem" }}>(128 reviews)</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: "#6B7280", fontSize: "0.85rem" }}>
                        <MapPin className="w-3.5 h-3.5" />
                        New York, NY
                      </div>
                      <div className="flex items-center gap-1" style={{ color: "#6B7280", fontSize: "0.85rem" }}>
                        <Calendar className="w-3.5 h-3.5" />
                        Member since 2021
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to="/chat"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all"
                      style={{
                        background: "rgba(29,78,216,0.08)",
                        color: "#1D4ED8",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        border: "1px solid rgba(29,78,216,0.15)",
                      }}>
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Link>
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all"
                      style={{
                        background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        boxShadow: "0 2px 8px rgba(29,78,216,0.3)",
                        border: "none",
                        cursor: "pointer",
                      }}>
                      Hire Now
                    </button>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-4 mt-5 pt-5" style={{ borderTop: "1px solid #F3F4F6" }}>
                  {[
                    { icon: CheckCircle2, value: "94", label: "Projects Done", color: "#10B981" },
                    { icon: ThumbsUp, value: "98%", label: "Success Rate", color: "#1D4ED8" },
                    { icon: Clock, value: "< 2hr", label: "Response Time", color: "#8B5CF6" },
                    { icon: Award, value: "7", label: "Certifications", color: "#F59E0B" },
                  ].map(({ icon: Icon, value, label, color }) => (
                    <div key={label} className="text-center">
                      <div className="w-8 h-8 rounded-lg mx-auto mb-1.5 flex items-center justify-center"
                        style={{ background: `${color}12` }}>
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "1rem" }}>{value}</div>
                      <div style={{ fontSize: "0.7rem", color: "#9CA3AF" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="rounded-2xl p-6 mb-5"
          style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontWeight: 700, color: "#111827", marginBottom: "10px" }}>About</h2>
          <p style={{ color: "#374151", lineHeight: 1.7, fontSize: "0.9rem" }}>
            With over 15 years of experience in general contracting, I specialize in delivering high-quality residential and commercial construction projects. Licensed and insured in New York, New Jersey, and Connecticut. I prioritize transparent communication, strict budget adherence, and quality craftsmanship. Every project on BuildTrust includes full milestone documentation and AI-verified material pricing.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Licensed GC", "Insured", "OSHA Certified", "Green Building", "BIM Certified"].map((cert) => (
              <span key={cert} className="px-3 py-1 rounded-full"
                style={{ background: "rgba(16,185,129,0.08)", color: "#10B981", fontSize: "0.75rem", fontWeight: 600 }}>
                <CheckCircle2 className="w-3 h-3 inline mr-1" />
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl mb-5"
          style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)", width: "fit-content" }}>
          {(["portfolio", "reviews", "packages"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 rounded-lg capitalize transition-all"
              style={{
                background: activeTab === tab ? "#1D4ED8" : "transparent",
                color: activeTab === tab ? "white" : "#6B7280",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "portfolio" && (
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {PORTFOLIO.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer"
                style={{ height: "200px", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
                <img src={img} alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4 mb-16">
            {reviews.map((review, i) => (
              <div key={i} className="rounded-2xl p-5"
                style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <div className="flex items-start gap-4">
                  <img src={review.avatar} alt={review.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem" }}>{review.name}</span>
                        <span style={{ fontSize: "0.75rem", color: "#9CA3AF", marginLeft: "8px" }}>— {review.project}</span>
                      </div>
                      <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5"
                          style={{ color: j < review.rating ? "#F59E0B" : "#E5E7EB",
                            fill: j < review.rating ? "#F59E0B" : "#E5E7EB" }} />
                      ))}
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.7 }}>{review.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "packages" && (
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {packages.map((pkg) => (
              <div key={pkg.name}
                className="rounded-2xl p-6 relative"
                style={{
                  background: pkg.popular ? "linear-gradient(135deg, #1D4ED8, #2563EB)" : "white",
                  boxShadow: pkg.popular ? "0 8px 24px rgba(29,78,216,0.3)" : "0 1px 8px rgba(0,0,0,0.06)",
                  border: pkg.popular ? "none" : "1px solid rgba(0,0,0,0.04)",
                }}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full"
                    style={{ background: "#10B981", color: "white", fontSize: "0.65rem", fontWeight: 700 }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontWeight: 800, color: pkg.popular ? "white" : "#111827", fontSize: "1.1rem", marginBottom: "4px" }}>
                  {pkg.name}
                </h3>
                <p style={{ fontSize: "0.8rem", color: pkg.popular ? "rgba(255,255,255,0.7)" : "#6B7280", marginBottom: "16px" }}>
                  {pkg.desc}
                </p>
                <div style={{ fontWeight: 900, fontSize: "2rem", color: pkg.popular ? "white" : "#111827", letterSpacing: "-0.03em", marginBottom: "20px" }}>
                  {pkg.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0"
                        style={{ color: pkg.popular ? "#10B981" : "#10B981" }} />
                      <span style={{ fontSize: "0.85rem", color: pkg.popular ? "rgba(255,255,255,0.9)" : "#374151" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-3 rounded-xl transition-all"
                  style={{
                    background: pkg.popular ? "white" : "#1D4ED8",
                    color: pkg.popular ? "#1D4ED8" : "white",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: pkg.popular ? "none" : "0 2px 6px rgba(29,78,216,0.3)",
                  }}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hire Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowModal(false)}>
          <div className="rounded-2xl p-6 max-w-md w-full"
            style={{ background: "white", boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(16,185,129,0.1)" }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: "#10B981" }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 800, color: "#111827", fontSize: "1.1rem" }}>Confirm Hire</h3>
                <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>Secure escrow payment</p>
              </div>
            </div>

            <div className="rounded-xl p-4 mb-4" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <div className="flex justify-between items-center mb-2">
                <span style={{ fontSize: "0.85rem", color: "#6B7280" }}>Contractor</span>
                <span style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>Marcus Johnson</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span style={{ fontSize: "0.85rem", color: "#6B7280" }}>Package</span>
                <span style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>Professional</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span style={{ fontSize: "0.85rem", color: "#6B7280" }}>Escrow Amount</span>
                <span style={{ fontWeight: 800, color: "#111827", fontSize: "0.875rem" }}>$7,500.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: "0.85rem", color: "#6B7280" }}>Platform Fee (2%)</span>
                <span style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>$150.00</span>
              </div>
              <div className="pt-3 mt-3 flex justify-between items-center" style={{ borderTop: "1px solid #E5E7EB" }}>
                <span style={{ fontWeight: 700, color: "#111827" }}>Total</span>
                <span style={{ fontWeight: 800, color: "#1D4ED8", fontSize: "1.1rem" }}>$7,650.00</span>
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", color: "#6B7280", marginBottom: "16px", lineHeight: 1.5 }}>
              Funds will be held securely in escrow and only released when you approve each milestone.
            </p>

            <div className="flex gap-3">
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-3 rounded-xl"
                style={{ background: "#F3F4F6", color: "#374151", fontWeight: 600, border: "none", cursor: "pointer" }}>
                Cancel
              </button>
              <Link to="/dashboard"
                className="flex-1 py-3 rounded-xl text-center text-white"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(29,78,216,0.3)",
                }}>
                Confirm & Pay
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
