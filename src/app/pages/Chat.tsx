import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  Shield,
  Search,
  Send,
  Paperclip,
  Phone,
  Video,
  MoreHorizontal,
  CheckCheck,
  Check,
  Image,
  FileText,
  Pin,
  ChevronDown,
  ArrowLeft,
  Smile,
} from "lucide-react";

interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
  time: string;
  read: boolean;
  attachment?: { type: "image" | "doc"; name: string };
}

const conversations = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "General Contractor",
    avatar: "https://images.unsplash.com/photo-1659353586403-7abfe52d0665?w=60&h=60&fit=crop&crop=face",
    lastMsg: "The electrical rough-in is 70% done",
    time: "2m",
    unread: 3,
    online: true,
    project: "Downtown Office Complex",
  },
  {
    id: 2,
    name: "BuildTrust Support",
    role: "Platform Support",
    avatar: "",
    lastMsg: "Your escrow has been confirmed",
    time: "1h",
    unread: 0,
    online: true,
    project: "Support",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1619799090425-0efe92bd62a7?w=60&h=60&fit=crop&crop=face",
    lastMsg: "I've sent the design mockups",
    time: "3h",
    unread: 1,
    online: false,
    project: "Home Renovation",
  },
];

const initialMessages: Message[] = [
  { id: 1, sender: "them", text: "Good morning! I wanted to update you on the project progress.", time: "9:00 AM", read: true },
  { id: 2, sender: "them", text: "The foundation work is fully completed and I've submitted Milestone 1 for your review. Please check the photos I uploaded.", time: "9:02 AM", read: true, attachment: { type: "image", name: "foundation_photos.jpg" } },
  { id: 3, sender: "me", text: "Thanks Marcus! I reviewed the photos — everything looks solid. I'll go ahead and release the payment for Milestone 1 now.", time: "9:15 AM", read: true },
  { id: 4, sender: "me", text: "Payment released ✅ — $15,000 sent to your wallet.", time: "9:16 AM", read: true },
  { id: 5, sender: "them", text: "Thank you! Received confirmation. We're starting on the framing this week. I expect to complete it by February 8th, 2 days ahead of schedule.", time: "9:20 AM", read: true },
  { id: 6, sender: "them", text: "Also, I submitted a change order for upgraded steel reinforcement. The AI analysis confirmed the price is within market rate.", time: "9:21 AM", read: true, attachment: { type: "doc", name: "change_order_003.pdf" } },
  { id: 7, sender: "me", text: "Approved! Great work staying ahead of schedule.", time: "9:30 AM", read: true },
  { id: 8, sender: "them", text: "The electrical rough-in is 70% done. We're on track for the March 5th milestone date.", time: "11:45 AM", read: false },
];

const pinnedContract = {
  title: "Downtown Office Complex — Contract #DT-2026-001",
  amount: "$77,000",
  milestones: 5,
  startDate: "Jan 5, 2026",
  endDate: "May 15, 2026",
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [activeConv, setActiveConv] = useState(0);
  const [showPinned, setShowPinned] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "me",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: false,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F9FAFB", fontFamily: "'Inter', sans-serif" }}>
      {/* Mobile sidebar overlay */}
      {showSidebar && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setShowSidebar(false)} />
      )}

      {/* Conversations sidebar */}
      <aside
        className={showSidebar ? "fixed inset-y-0 left-0 z-50 flex flex-col" : "hidden md:flex md:flex-col"}
        style={{ width: "300px", background: "white", borderRight: "1px solid rgba(0,0,0,0.06)", flexShrink: 0 }}>
        {/* Sidebar header */}
        <div className="p-4 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <div className="flex items-center justify-between mb-3">
            <Link to="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.95rem" }}>
                Build<span style={{ color: "#1D4ED8" }}>Trust</span>
              </span>
            </Link>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: "#9CA3AF" }} />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-3 py-2 rounded-xl outline-none"
              style={{ background: "#F9FAFB", fontSize: "0.8rem", color: "#111827", border: "1px solid #E5E7EB" }}
            />
          </div>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv, i) => (
            <button
              key={conv.id}
              onClick={() => setActiveConv(i)}
              className="w-full flex items-center gap-3 p-4 text-left transition-colors"
              style={{
                background: activeConv === i ? "rgba(29,78,216,0.06)" : "transparent",
                borderLeft: activeConv === i ? "3px solid #1D4ED8" : "3px solid transparent",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
                cursor: "pointer",
              }}>
              <div className="relative flex-shrink-0">
                {conv.avatar ? (
                  <img src={conv.avatar} alt={conv.name}
                    className="w-11 h-11 rounded-full object-cover" />
                ) : (
                  <div className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                )}
                {conv.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
                    style={{ background: "#10B981", border: "2px solid white" }} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span style={{ fontWeight: 600, color: "#111827", fontSize: "0.875rem" }}>{conv.name}</span>
                  <span style={{ fontSize: "0.7rem", color: "#9CA3AF" }}>{conv.time}</span>
                </div>
                <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginBottom: "2px" }}>{conv.project}</div>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "0.78rem", color: "#6B7280" }} className="truncate">{conv.lastMsg}</span>
                  {conv.unread > 0 && (
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ml-2"
                      style={{ background: "#1D4ED8", color: "white", fontSize: "0.65rem", fontWeight: 700 }}>
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main chat */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center justify-between px-5 py-4"
          style={{ background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg" onClick={() => setShowSidebar(true)}
              style={{ color: "#6B7280", border: "1px solid #E5E7EB" }}>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="relative">
              <img
                src={conversations[activeConv].avatar || ""}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
                style={{ background: conversations[activeConv].avatar ? "" : "#1D4ED8" }}
              />
              {conversations[activeConv].online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#10B981", border: "2px solid white" }} />
              )}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.9rem" }}>
                {conversations[activeConv].name}
              </div>
              <div style={{ fontSize: "0.75rem", color: conversations[activeConv].online ? "#10B981" : "#9CA3AF" }}>
                {conversations[activeConv].online ? "Online now" : "Offline"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg transition-colors"
              style={{ color: "#6B7280", border: "1px solid #E5E7EB", background: "transparent", cursor: "pointer" }}>
              <Phone className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg transition-colors"
              style={{ color: "#6B7280", border: "1px solid #E5E7EB", background: "transparent", cursor: "pointer" }}>
              <Video className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg transition-colors"
              style={{ color: "#6B7280", border: "1px solid #E5E7EB", background: "transparent", cursor: "pointer" }}>
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pinned contract */}
        {showPinned && (
          <div className="px-5 py-3 flex items-center gap-3"
            style={{ background: "rgba(29,78,216,0.04)", borderBottom: "1px solid rgba(29,78,216,0.1)" }}>
            <Pin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#1D4ED8" }} />
            <div className="flex-1 min-w-0">
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1D4ED8" }}>
                📌 {pinnedContract.title}
              </span>
              <span style={{ fontSize: "0.75rem", color: "#6B7280", marginLeft: "8px" }}>
                {pinnedContract.amount} · {pinnedContract.milestones} milestones · {pinnedContract.startDate}–{pinnedContract.endDate}
              </span>
            </div>
            <button onClick={() => setShowPinned(false)}
              style={{ color: "#9CA3AF", background: "transparent", border: "none", cursor: "pointer" }}>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4" style={{ background: "#F9FAFB" }}>
          {/* Date divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "#E5E7EB" }} />
            <span style={{ fontSize: "0.72rem", color: "#9CA3AF", fontWeight: 500 }}>Today</span>
            <div className="flex-1 h-px" style={{ background: "#E5E7EB" }} />
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} gap-2`}>
              {msg.sender === "them" && (
                <img
                  src={conversations[activeConv].avatar}
                  alt=""
                  className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-auto mb-1"
                />
              )}
              <div style={{ maxWidth: "68%" }}>
                <div className="rounded-2xl px-4 py-3"
                  style={{
                    background: msg.sender === "me" ? "#1D4ED8" : "white",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    borderBottomRightRadius: msg.sender === "me" ? "4px" : "16px",
                    borderBottomLeftRadius: msg.sender === "them" ? "4px" : "16px",
                  }}>
                  <p style={{ color: msg.sender === "me" ? "white" : "#111827", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    {msg.text}
                  </p>
                  {msg.attachment && (
                    <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{ background: msg.sender === "me" ? "rgba(255,255,255,0.15)" : "#F3F4F6" }}>
                      {msg.attachment.type === "image" ? (
                        <Image className="w-4 h-4" style={{ color: msg.sender === "me" ? "white" : "#1D4ED8" }} />
                      ) : (
                        <FileText className="w-4 h-4" style={{ color: msg.sender === "me" ? "white" : "#1D4ED8" }} />
                      )}
                      <span style={{ fontSize: "0.75rem", color: msg.sender === "me" ? "rgba(255,255,255,0.9)" : "#374151", fontWeight: 500 }}>
                        {msg.attachment.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className={`flex items-center gap-1 mt-1 ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <span style={{ fontSize: "0.68rem", color: "#9CA3AF" }}>{msg.time}</span>
                  {msg.sender === "me" && (
                    msg.read
                      ? <CheckCheck className="w-3.5 h-3.5" style={{ color: "#1D4ED8" }} />
                      : <Check className="w-3.5 h-3.5" style={{ color: "#9CA3AF" }} />
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-4 border-t" style={{ background: "white", borderColor: "rgba(0,0,0,0.06)" }}>
          <div className="flex items-end gap-3">
            <div className="flex-1 flex items-end gap-2 px-4 py-3 rounded-2xl"
              style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <button style={{ color: "#9CA3AF", background: "transparent", border: "none", cursor: "pointer", padding: "0" }}>
                <Paperclip className="w-4 h-4" />
              </button>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message... (Enter to send)"
                rows={1}
                className="flex-1 resize-none outline-none bg-transparent"
                style={{ fontSize: "0.875rem", color: "#111827", lineHeight: 1.5, maxHeight: "120px" }}
              />
              <button style={{ color: "#9CA3AF", background: "transparent", border: "none", cursor: "pointer", padding: "0" }}>
                <Smile className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
              style={{
                background: input.trim() ? "#1D4ED8" : "#E5E7EB",
                color: input.trim() ? "white" : "#9CA3AF",
                border: "none",
                cursor: input.trim() ? "pointer" : "not-allowed",
                boxShadow: input.trim() ? "0 2px 8px rgba(29,78,216,0.3)" : "none",
              }}>
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p style={{ fontSize: "0.7rem", color: "#9CA3AF", marginTop: "6px", textAlign: "center" }}>
            All messages are encrypted and stored securely on BuildTrust
          </p>
        </div>
      </div>
    </div>
  );
}