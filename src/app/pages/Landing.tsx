import { Link } from "react-router";
import {
  Shield,
  Milestone,
  Brain,
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Lock,
  Zap,
  Globe,
  ChevronRight,
  Play,
  BadgeCheck,
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const TESTIMONIAL_1 = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face";
const TESTIMONIAL_2 = "https://images.unsplash.com/photo-1494790108755-2616b332c3a0?w=60&h=60&fit=crop&crop=face";
const TESTIMONIAL_3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face";

const features = [
  {
    icon: Shield,
    title: "Escrow Protection",
    desc: "Funds are locked in a secure escrow account until each milestone is verified and approved. No upfront risks.",
    color: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)",
  },
  {
    icon: Milestone,
    title: "Milestone Payments",
    desc: "Break projects into clear milestones. Pay incrementally as work is completed and verified to your satisfaction.",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    icon: Brain,
    title: "AI Price Analysis",
    desc: "Our AI engine continuously monitors market prices to detect overpricing and flag potential corruption in real time.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
  },
  {
    icon: BadgeCheck,
    title: "Verified Contractors",
    desc: "Every contractor undergoes strict background checks, license verification, and identity confirmation.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    icon: TrendingUp,
    title: "Transparent Reporting",
    desc: "Full audit trail of every transaction, change order, and communication. Complete accountability at all stages.",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
  },
  {
    icon: Globe,
    title: "Multi-Project Management",
    desc: "Manage multiple construction projects simultaneously with centralized dashboards and unified reporting.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
  },
];

const steps = [
  { num: "01", title: "Post Your Project", desc: "Describe your project, set your budget, and define clear milestones for completion." },
  { num: "02", title: "Hire a Contractor", desc: "Browse verified contractors, review portfolios, and select the best match for your needs." },
  { num: "03", title: "Funds Go to Escrow", desc: "Your payment is securely held in our escrow account — not released until work is approved." },
  { num: "04", title: "Approve & Release", desc: "Inspect completed milestones and release funds only when you're fully satisfied." },
];

const testimonials = [
  {
    avatar: TESTIMONIAL_1,
    name: "David Chen",
    role: "Property Developer",
    rating: 5,
    text: "BuildTrust completely transformed how I manage construction projects. The escrow system gave me peace of mind and the AI analysis saved me over $40,000 in overpriced materials.",
  },
  {
    avatar: TESTIMONIAL_2,
    name: "Sarah Williams",
    role: "Homeowner",
    rating: 5,
    text: "I was always afraid of being scammed by contractors. With BuildTrust, every milestone was tracked and I only paid when I was happy with the work. Absolutely game-changing.",
  },
  {
    avatar: TESTIMONIAL_3,
    name: "James Okonkwo",
    role: "Real Estate Investor",
    rating: 5,
    text: "The transparency this platform brings to construction payments is incredible. I've completed 8 projects with zero payment disputes. The AI pricing alerts are incredibly accurate.",
  },
];

const stats = [
  { value: "$2.4B+", label: "Funds Protected" },
  { value: "18,000+", label: "Projects Completed" },
  { value: "99.8%", label: "Dispute Resolution" },
  { value: "4.9/5", label: "Average Rating" },
];

export function Landing() {
  return (
    <div style={{ background: "#F9FAFB" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #1D4ED8 100%)" }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Zap className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                  AI-Powered Corruption Prevention
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}>
                Secure Construction<br />
                Payments.<br />
                <span style={{ color: "#10B981" }}>Zero Corruption.</span>
              </h1>

              <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "480px" }}>
                The first construction escrow platform that uses AI to detect overpricing, protect payments, and ensure transparent milestone-based project delivery.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white transition-all"
                  style={{
                    background: "#10B981",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(16,185,129,0.4)",
                    fontSize: "0.95rem",
                  }}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/marketplace"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.95rem",
                  }}
                >
                  Join as Contractor
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {[
                  { icon: CheckCircle2, text: "Bank-grade Encryption" },
                  { icon: Lock, text: "Escrow Protected" },
                  { icon: BadgeCheck, text: "Verified Contractors" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4" style={{ color: "#10B981" }} />
                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Escrow Flow */}
            <div className="relative lg:flex justify-center hidden">
              <div className="relative">
                {/* Main card */}
                <div className="rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.4)", width: 440, height: 280 }}>
                  <img src={HERO_IMG} alt="Construction" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
                </div>

                {/* Floating escrow flow card */}
                <div className="absolute -bottom-6 -left-8 rounded-2xl p-4 w-64"
                  style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 500, marginBottom: "10px" }}>ESCROW FLOW</div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(29,78,216,0.1)" }}>
                        <span style={{ fontSize: "1rem" }}>👤</span>
                      </div>
                      <span style={{ fontSize: "0.65rem", color: "#6B7280", fontWeight: 500 }}>Client</span>
                    </div>
                    <div className="flex-1 flex items-center gap-1">
                      <div className="flex-1 h-0.5" style={{ background: "#E5E7EB" }} />
                      <ArrowRight className="w-3 h-3" style={{ color: "#1D4ED8" }} />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)" }}>
                        <Shield className="w-4 h-4" style={{ color: "#10B981" }} />
                      </div>
                      <span style={{ fontSize: "0.65rem", color: "#6B7280", fontWeight: 500 }}>Escrow</span>
                    </div>
                    <div className="flex-1 flex items-center gap-1">
                      <div className="flex-1 h-0.5" style={{ background: "#E5E7EB" }} />
                      <ArrowRight className="w-3 h-3" style={{ color: "#10B981" }} />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)" }}>
                        <span style={{ fontSize: "1rem" }}>🔨</span>
                      </div>
                      <span style={{ fontSize: "0.65rem", color: "#6B7280", fontWeight: 500 }}>Contractor</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 flex items-center gap-2" style={{ borderTop: "1px solid #F3F4F6" }}>
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
                    <span style={{ fontSize: "0.7rem", color: "#374151", fontWeight: 500 }}>Milestone approved → Funds released</span>
                  </div>
                </div>

                {/* Floating AI alert card */}
                <div className="absolute -top-4 -right-4 rounded-xl p-3 w-48"
                  style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(239,68,68,0.1)" }}>
                      <Brain className="w-3 h-3" style={{ color: "#EF4444" }} />
                    </div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#111827" }}>AI Alert</span>
                  </div>
                  <p style={{ fontSize: "0.65rem", color: "#6B7280", lineHeight: 1.4 }}>Cement price 32% above market rate detected</p>
                  <div className="mt-1.5 px-2 py-0.5 rounded-full inline-flex" style={{ background: "rgba(239,68,68,0.08)" }}>
                    <span style={{ fontSize: "0.6rem", color: "#EF4444", fontWeight: 600 }}>HIGH RISK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 48C480 48 240 32 0 0L0 48Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl p-6 text-center"
              style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>{stat.value}</div>
              <div style={{ fontSize: "0.8rem", color: "#6B7280", fontWeight: 500, marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(29,78,216,0.08)", border: "1px solid rgba(29,78,216,0.15)" }}>
            <span style={{ fontSize: "0.75rem", color: "#1D4ED8", fontWeight: 600 }}>PLATFORM FEATURES</span>
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Everything you need to build with confidence
          </h2>
          <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6, fontSize: "1.05rem" }}>
            From escrow protection to AI-powered fraud detection, BuildTrust has every tool to make construction payments transparent and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 transition-all group cursor-default"
              style={{
                background: "white",
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 8px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: f.bg }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}>
              <span style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 600 }}>HOW IT WORKS</span>
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>
              Start your first protected project in minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)", boxShadow: "0 4px 12px rgba(29,78,216,0.3)" }}>
                    <span style={{ color: "white", fontWeight: 800, fontSize: "0.9rem" }}>{step.num}</span>
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full"
                    style={{ borderTop: "2px dashed #E5E7EB", transform: "translateX(50%)", zIndex: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>
              Trusted by thousands of builders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6"
                style={{ background: "white", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Ready to build without the risk?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", marginBottom: "2.5rem" }}>
            Join over 18,000 satisfied clients who have protected more than $2.4 billion in construction payments.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/marketplace"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white"
              style={{
                background: "#10B981",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 4px 14px rgba(16,185,129,0.4)",
              }}>
              Start Your First Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/marketplace"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1rem",
              }}>
              View Demo
              <Play className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0F172A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
                  <Shield className="w-3.5 h-3.5 text-white" />
                </div>
                <span style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                  Build<span style={{ color: "#3B82F6" }}>Trust</span>
                </span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                The most trusted construction payment platform, powered by AI.
              </p>
            </div>
            {[
              { title: "Platform", links: ["Marketplace", "Dashboard", "Escrow", "AI Analysis"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.85rem", marginBottom: "1rem" }}>{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textDecoration: "none" }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "white"; }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-wrap justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
              © 2026 BuildTrust Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                <a key={s} href="#" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
