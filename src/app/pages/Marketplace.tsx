import { useState } from "react";
import { Link } from "react-router";
import {
  Search,
  Star,
  MapPin,
  Filter,
  BadgeCheck,
  ChevronDown,
  Zap,
  SlidersHorizontal,
} from "lucide-react";

const contractors = [
  {
    id: "1",
    name: "Marcus Johnson",
    specialty: "General Contractor",
    rating: 4.9,
    reviews: 128,
    priceRange: "$80–120/hr",
    location: "New York, NY",
    category: "General",
    avatar: "https://images.unsplash.com/photo-1659353586403-7abfe52d0665?w=120&h=120&fit=crop&crop=face",
    verified: true,
    completedProjects: 94,
    badge: "Top Rated",
    badgeColor: "#F59E0B",
    tags: ["Renovation", "New Build", "Commercial"],
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    specialty: "Interior Designer & Contractor",
    rating: 4.8,
    reviews: 87,
    priceRange: "$70–100/hr",
    location: "Miami, FL",
    category: "Interior",
    avatar: "https://images.unsplash.com/photo-1619799090425-0efe92bd62a7?w=120&h=120&fit=crop&crop=face",
    verified: true,
    completedProjects: 62,
    badge: "Verified Pro",
    badgeColor: "#10B981",
    tags: ["Interior", "Residential", "Design"],
  },
  {
    id: "3",
    name: "Robert Kim",
    specialty: "Structural Engineer",
    rating: 4.7,
    reviews: 56,
    priceRange: "$95–150/hr",
    location: "San Francisco, CA",
    category: "Structural",
    avatar: "https://images.unsplash.com/photo-1651500963570-e2bfd5a4f94b?w=120&h=120&fit=crop&crop=face",
    verified: true,
    completedProjects: 41,
    badge: null,
    badgeColor: "",
    tags: ["Structural", "Foundation", "Commercial"],
  },
  {
    id: "4",
    name: "David Mensah",
    specialty: "Electrical Contractor",
    rating: 4.9,
    reviews: 203,
    priceRange: "$65–90/hr",
    location: "Chicago, IL",
    category: "Electrical",
    avatar: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?w=120&h=120&fit=crop&crop=face",
    verified: true,
    completedProjects: 178,
    badge: "Top Rated",
    badgeColor: "#F59E0B",
    tags: ["Electrical", "Smart Home", "Solar"],
  },
  {
    id: "5",
    name: "Sophia Park",
    specialty: "Plumbing & HVAC",
    rating: 4.6,
    reviews: 74,
    priceRange: "$60–85/hr",
    location: "Seattle, WA",
    category: "Plumbing",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3a0?w=120&h=120&fit=crop&crop=face",
    verified: false,
    completedProjects: 55,
    badge: null,
    badgeColor: "",
    tags: ["Plumbing", "HVAC", "Residential"],
  },
  {
    id: "6",
    name: "Andre Thompson",
    specialty: "Masonry & Concrete",
    rating: 4.8,
    reviews: 92,
    priceRange: "$55–80/hr",
    location: "Atlanta, GA",
    category: "Masonry",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    verified: true,
    completedProjects: 73,
    badge: "Verified Pro",
    badgeColor: "#10B981",
    tags: ["Masonry", "Concrete", "Landscaping"],
  },
];

const categories = ["All", "General", "Electrical", "Plumbing", "Interior", "Structural", "Masonry"];

export function Marketplace() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = contractors.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.specialty.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || c.category === activeCategory;
    const matchRating = c.rating >= minRating;
    const matchVerified = !verifiedOnly || c.verified;
    return matchSearch && matchCategory && matchRating && matchVerified;
  });

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)", padding: "48px 0 80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Find Verified Contractors
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "28px" }}>
            Browse {contractors.length} verified contractors across the US
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#6B7280" }} />
            <input
              type="text"
              placeholder="Search by name, specialty, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl outline-none"
              style={{
                background: "white",
                fontSize: "0.9rem",
                color: "#111827",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                border: "none",
              }}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
              style={{ background: "#1D4ED8", color: "white", fontSize: "0.8rem", fontWeight: 600 }}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: "-32px" }}>
        {/* Filter panel */}
        {showFilters && (
          <div className="rounded-2xl p-5 mb-6"
            style={{ background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="flex flex-wrap gap-6">
              <div>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", display: "block", marginBottom: "8px" }}>
                  MIN RATING
                </label>
                <div className="flex gap-2">
                  {[0, 4, 4.5, 4.8].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className="px-3 py-1.5 rounded-lg text-sm transition-all"
                      style={{
                        background: minRating === r ? "#1D4ED8" : "rgba(0,0,0,0.04)",
                        color: minRating === r ? "white" : "#374151",
                        fontWeight: 500,
                        border: "none",
                        cursor: "pointer",
                      }}>
                      {r === 0 ? "All" : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: "#1D4ED8" }}
                  />
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151" }}>
                    Verified contractors only
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-6 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-xl transition-all"
              style={{
                background: activeCategory === cat ? "#1D4ED8" : "white",
                color: activeCategory === cat ? "white" : "#374151",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: activeCategory === cat ? "none" : "1px solid rgba(0,0,0,0.08)",
                boxShadow: activeCategory === cat ? "0 2px 8px rgba(29,78,216,0.25)" : "0 1px 4px rgba(0,0,0,0.04)",
                cursor: "pointer",
              }}>
              {cat}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2" style={{ fontSize: "0.85rem", color: "#6B7280" }}>
            <span>{filtered.length} contractors found</span>
          </div>
        </div>

        {/* Contractor grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
          {filtered.map((contractor) => (
            <div key={contractor.id} className="rounded-2xl overflow-hidden transition-all group"
              style={{
                background: "white",
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 8px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              {/* Card header */}
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={contractor.avatar}
                      alt={contractor.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    {contractor.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "#10B981", border: "2px solid white" }}>
                        <BadgeCheck className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 style={{ fontWeight: 700, color: "#111827", fontSize: "1rem", marginBottom: "2px" }}>
                          {contractor.name}
                        </h3>
                        <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>{contractor.specialty}</p>
                      </div>
                      {contractor.badge && (
                        <span className="px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            background: `${contractor.badgeColor}15`,
                            color: contractor.badgeColor,
                            fontSize: "0.65rem",
                            fontWeight: 700,
                          }}>
                          {contractor.badge}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3 h-3"
                            style={{ color: i < Math.floor(contractor.rating) ? "#F59E0B" : "#E5E7EB",
                              fill: i < Math.floor(contractor.rating) ? "#F59E0B" : "#E5E7EB" }} />
                        ))}
                      </div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#111827" }}>{contractor.rating}</span>
                      <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>({contractor.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {contractor.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg"
                      style={{ background: "rgba(29,78,216,0.06)", color: "#1D4ED8", fontSize: "0.72rem", fontWeight: 600 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-5 pb-5 pt-3" style={{ borderTop: "1px solid #F3F4F6" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" style={{ color: "#6B7280", fontSize: "0.8rem" }}>
                    <MapPin className="w-3.5 h-3.5" />
                    {contractor.location}
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem" }}>{contractor.priceRange}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                    {contractor.completedProjects} projects done
                  </span>
                  <Link
                    to={`/seller/${contractor.id}`}
                    className="px-4 py-2 rounded-xl text-white transition-all"
                    style={{
                      background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      boxShadow: "0 2px 6px rgba(29,78,216,0.3)",
                    }}>
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-20">
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🔍</div>
              <h3 style={{ fontWeight: 600, color: "#111827", marginBottom: "6px" }}>No contractors found</h3>
              <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
