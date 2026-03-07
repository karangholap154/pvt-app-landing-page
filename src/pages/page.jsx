import { useEffect, useState } from "react";

/* ── Launch Popup Modal ─────────────────────────────────────── */
function LaunchPopup({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  // Countdown to April 1, 2026
  const target = new Date("2026-04-01T00:00:00");
  const now = new Date();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
        transition: "opacity 0.32s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg,#16161f 0%,#1e1e2e 100%)",
          border: "1px solid rgba(255,214,0,0.18)",
          borderRadius: 28,
          padding: "0",
          maxWidth: 420,
          width: "100%",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px rgba(255,214,0,0.10)",
          transform: visible
            ? "scale(1) translateY(0)"
            : "scale(0.88) translateY(24px)",
          transition:
            "transform 0.36s cubic-bezier(0.34,1.56,0.64,1), opacity 0.32s ease",
          opacity: visible ? 1 : 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Top yellow accent bar */}
        <div
          style={{
            height: 4,
            background: "linear-gradient(90deg,#FFD600,#FFAA00,#FFD600)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s linear infinite",
          }}
        />

        {/* Confetti dots decoration */}
        <div className="absolute top-6 right-6 pointer-events-none">
          {["#FFD600", "#FF6B6B", "#4ECDC4", "#FFD600"].map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: c,
                top: [0, 14, -6, 20][i],
                left: [0, -12, 8, -4][i],
                opacity: 0.7,
                animation: `confettiBob ${1.5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div style={{ padding: "32px 32px 28px" }}>
          {/* Icon */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,214,0,0.12)",
              border: "1px solid rgba(255,214,0,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            🚀
          </div>

          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,214,0,0.12)",
              border: "1px solid rgba(255,214,0,0.25)",
              borderRadius: 999,
              padding: "4px 12px",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#FFD600",
                display: "inline-block",
                animation: "pulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              style={{
                color: "#FFD600",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              COMING SOON
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              color: "#fff",
              fontSize: 26,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "'Sora',sans-serif",
              marginBottom: 10,
            }}
          >
            App Launching on
            <br />
            <span style={{ color: "#FFD600" }}>April 1, 2026 🎉</span>
          </h2>

          {/* Subtext */}
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 14,
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            We're putting the finishing touches on Private Academy. Get notified
            the moment we go live — exclusive early access for sign-ups!
          </p>

          {/* Countdown */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 24,
            }}
          >
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: mins, label: "Mins" },
            ].map(({ val, label }) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: "12px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#FFD600",
                    fontSize: 24,
                    fontWeight: 900,
                    fontFamily: "'Sora',sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {String(val).padStart(2, "0")}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: 10,
                    fontWeight: 700,
                    marginTop: 4,
                    letterSpacing: "0.08em",
                  }}
                >
                  {label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mock App Screen inside iPhone ─────────────────────────── */
function AppScreen() {
  const [activeSem, setActiveSem] = useState(4);
  const sems = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  return (
    <div
      className="w-full h-full flex flex-col overflow-x-hidden text-white"
      style={{
        background: "linear-gradient(160deg,#111118 0%,#1a1a28 100%)",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      {/* status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-0 text-[10px] text-white/40 font-semibold">
        <span>9:41</span>
        <div className="flex gap-1">
          <span>●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Dynamic island */}
      <div className="flex justify-center mb-1">
        <div
          className="w-24 h-[18px] rounded-b-full"
          style={{ background: "#111118" }}
        />
      </div>

      {/* App header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between">
        <div>
          <p className="text-[9px] text-white/30 font-semibold uppercase tracking-widest">
            Private Academy
          </p>
          <p className="text-[15px] font-extrabold tracking-tight leading-tight">
            Study Hub 📚
          </p>
        </div>
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-[#111118]"
          style={{ background: "#FFD600" }}
        >
          P
        </div>
      </div>

      {/* Yellow hero card */}
      <div
        className="mx-3 mb-3 rounded-2xl p-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#FFD600 0%,#FFAA00 100%)",
        }}
      >
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/15" />
        <div className="absolute right-8 -bottom-8 w-16 h-16 rounded-full bg-white/10" />
        <p className="text-[10px] font-bold text-black/50 mb-1">
          Mumbai University
        </p>
        <p className="text-[15px] font-extrabold text-black leading-tight mb-2">
          Study
          <br />
          Materials
        </p>
      </div>

      {/* Semester scroller */}
      <div className="px-3 mb-2">
        <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-1.5">
          Semester
        </p>
        <div
          className="flex gap-1.5 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {sems.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSem(i)}
              className="shrink-0 text-[9px] px-2.5 py-1.5 rounded-lg font-bold transition-all border"
              style={
                activeSem === i
                  ? {
                      background: "#FFD600",
                      color: "#111118",
                      borderColor: "#FFD600",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.4)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }
              }
            >
              Sem {s}
            </button>
          ))}
        </div>
      </div>

      {/* Resource list */}
      <div className="px-3 flex-1 space-y-2 overflow-hidden">
        <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold">
          Resources
        </p>
        {[
          {
            icon: "📄",
            title: "Engineering Maths",
            sub: "Notes · 48 pages",
            tag: "Popular",
          },
          {
            icon: "❓",
            title: "DBMS Exam Questions",
            sub: "20 important Qs",
            tag: "Exam Ready",
          },
          {
            icon: "🎥",
            title: "OS Concepts Video",
            sub: "12 video lessons",
            tag: "New",
          },
          {
            icon: "📄",
            title: "CNDC Notes",
            sub: "Notes · 32 pages",
            tag: "Updated",
          },
        ].map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-xl p-2.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {r.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-white truncate">
                {r.title}
              </p>
              <p className="text-[8px] text-white/30">{r.sub}</p>
            </div>
            <span
              className="text-[7px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
              style={{ background: "rgba(255,214,0,0.15)", color: "#FFD600" }}
            >
              {r.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div
        className="flex mt-2 border-t pt-1 pb-4"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        {[
          ["🏠", "Home"],
          ["📖", "Notes"],
          ["❓", "Qs"],
          ["🎥", "Videos"],
        ].map(([ic, lb], i) => (
          <button key={i} className="flex-1 flex flex-col items-center gap-0.5">
            <span className="text-base">{ic}</span>
            <span
              className="text-[7px] font-bold"
              style={{ color: i === 0 ? "#FFD600" : "rgba(255,255,255,0.25)" }}
            >
              {lb}
            </span>
            {i === 0 && (
              <div
                className="w-3 h-0.5 rounded-full mt-0.5"
                style={{ background: "#FFD600" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── iPhone 16 SVG Frame ────────────────────────────────────── */
function IPhoneFrame({ children, scale = 1 }) {
  const w = 280 * scale;
  const h = 580 * scale;
  const borderRadius = 52 * scale;
  const bezelInset = 10 * scale;
  const innerRadius = 44 * scale;

  return (
    <div className="relative" style={{ width: w, height: h }}>
      <div
        className="absolute inset-0"
        style={{
          borderRadius,
          background:
            "linear-gradient(145deg,#2a2a2e 0%,#1c1c1e 40%,#2a2a2e 100%)",
          boxShadow: `0 ${50 * scale}px ${120 * scale}px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 ${60 * scale}px rgba(255,214,0,0.08)`,
        }}
      />
      {/* Side buttons */}
      <div
        className="absolute"
        style={{
          left: -3,
          top: 112 * scale,
          width: 3,
          height: 32 * scale,
          borderRadius: "4px 0 0 4px",
          background: "#3a3a3c",
        }}
      />
      <div
        className="absolute"
        style={{
          left: -3,
          top: 160 * scale,
          width: 3,
          height: 48 * scale,
          borderRadius: "4px 0 0 4px",
          background: "#3a3a3c",
        }}
      />
      <div
        className="absolute"
        style={{
          left: -3,
          top: 224 * scale,
          width: 3,
          height: 48 * scale,
          borderRadius: "4px 0 0 4px",
          background: "#3a3a3c",
        }}
      />
      <div
        className="absolute"
        style={{
          right: -3,
          top: 144 * scale,
          width: 3,
          height: 56 * scale,
          borderRadius: "0 4px 4px 0",
          background: "#3a3a3c",
        }}
      />

      {/* Screen */}
      <div
        className="absolute overflow-hidden"
        style={{
          inset: bezelInset,
          borderRadius: innerRadius,
          background: "#111118",
        }}
      >
        {children}
      </div>

      {/* Gloss */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          background:
            "linear-gradient(135deg,rgba(255,255,255,0.10) 0%,transparent 50%)",
        }}
      />
    </div>
  );
}

/* ── Main Landing Page ──────────────────────────────────────── */
export default function PrivateAcademyHero() {
  const [loaded, setLoaded] = useState(false);
  const [phoneScale, setPhoneScale] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    setTimeout(() => setLoaded(true), 100);

    // Compute phone scale based on viewport
    const updateScale = () => {
      const vw = window.innerWidth;
      if (vw < 400) setPhoneScale(0.62);
      else if (vw < 640) setPhoneScale(0.72);
      else if (vw < 768) setPhoneScale(0.82);
      else if (vw < 1024) setPhoneScale(0.88);
      else setPhoneScale(1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col overflow-x-hidden"
      style={{ background: "#0e0e14", fontFamily: "'DM Sans',sans-serif" }}
    >
      {/* Launch Popup */}
      {showPopup && <LaunchPopup onClose={() => setShowPopup(false)} />}

      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,214,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,214,0,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          zIndex: 0,
        }}
      />

      {/* Yellow glow blobs */}
      <div
        className="fixed top-[-160px] left-[-120px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(255,214,0,0.12) 0%,transparent 70%)",
          zIndex: 0,
        }}
      />
      <div
        className="fixed bottom-[-100px] right-[-80px] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(255,170,0,0.08) 0%,transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* ── Navbar ── */}
      <nav
        className="relative z-20 flex items-center justify-between px-5 sm:px-8 lg:px-20 py-4 sm:py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-sm sm:text-base text-[#0e0e14]"
            style={{ background: "#FFD600" }}
          >
            P
          </div>
          <span
            className="font-extrabold text-white text-base sm:text-lg tracking-tight"
            style={{ fontFamily: "'Sora',sans-serif" }}
          >
            Private Academy
          </span>
        </div>
        <a
          href="https://privateacademy.in"
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all"
          style={{ background: "#FFD600", color: "#0e0e14" }}
        >
          Visit Site →
        </a>
      </nav>

      {/* ── Hero ── */}
      <main className="relative z-10 flex-1">
        <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-20">
          {/* ── LEFT CONTENT ── */}
          <div
            className="w-full lg:w-1/2 shrink-0 text-center lg:text-left"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-xs font-bold"
              style={{
                background: "rgba(255,214,0,0.12)",
                color: "#FFD600",
                border: "1px solid rgba(255,214,0,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse inline-block" />
              EdTech · Mumbai University
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[62px] font-black text-white leading-[1.05] tracking-tight mb-5 sm:mb-6"
              style={{ fontFamily: "'Sora',sans-serif" }}
            >
              Study Smarter. <br />
              Clear{" "}
              <span
                className="relative inline-block"
                style={{ color: "#FFD600" }}
              >
                MU Exams.
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q50 0 100 5 Q150 10 200 5"
                    stroke="#FFD600"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              A{" "}
              <span className="text-white font-semibold">centralized hub</span>{" "}
              of semester-wise notes, important exam questions & video tutorials
              — built exclusively for{" "}
              <span className="text-white font-semibold">
                Mumbai University engineering students
              </span>
              .
            </p>

            {/* Key pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10 justify-center lg:justify-start">
              {[
                { icon: "📚", text: "Semester-wise Notes" },
                { icon: "❓", text: "Exam Questions" },
                { icon: "🎥", text: "Video Tutorials" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span>{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center lg:justify-start">
              {/* Play Store */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                onClick={handleDownloadClick}
                className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                style={{
                  background: "#FFD600",
                  boxShadow: "0 8px 32px rgba(255,214,0,0.35)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.18 1.27C2.8 1.5 2.55 1.9 2.55 2.42v19.16c0 .52.25.92.63 1.15l.1.06 10.73-10.73v-.25L3.28 1.21l-.1.06z"
                    fill="#0e0e14"
                  />
                  <path
                    d="M17.41 15.1l-3.57-3.58v-.25l3.57-3.57.08.04 4.23 2.4c1.21.69 1.21 1.81 0 2.5l-4.23 2.4-.08.06z"
                    fill="#0e0e14"
                    opacity="0.8"
                  />
                  <path
                    d="M17.49 15.04L13.91 11.5 3.18 22.23c.4.42 1.05.47 1.78.05l12.53-7.24"
                    fill="#0e0e14"
                    opacity="0.6"
                  />
                  <path
                    d="M17.49 8.96L4.96 1.72C4.23 1.3 3.58 1.35 3.18 1.77l10.73 10.73 3.58-3.54z"
                    fill="#0e0e14"
                    opacity="0.6"
                  />
                </svg>
                <div>
                  <p
                    className="text-[9px] font-semibold leading-none mb-0.5"
                    style={{ color: "rgba(14,14,20,0.6)" }}
                  >
                    GET IT ON
                  </p>
                  <p
                    className="text-xs sm:text-sm font-extrabold leading-none"
                    style={{ color: "#0e0e14" }}
                  >
                    Google Play
                  </p>
                </div>
              </a>

              {/* Download APK */}
              <a
                href="https://privateacademy.in"
                target="_blank"
                rel="noreferrer"
                onClick={handleDownloadClick}
                className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl transition-all hover:-translate-y-0.5 group"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                <div
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: "rgba(255,214,0,0.12)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD600"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[9px] font-semibold leading-none mb-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    DIRECT
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold leading-none">
                    Download APK
                  </p>
                </div>
              </a>
            </div>

            {/* Branches */}
            <div className="mb-8 sm:mb-0">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Available Branches
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["💻 CS", "🌐 IT", "🤖 AI/ML", "⚙️ Mech", "🧪 Chem"].map(
                  (b) => (
                    <span
                      key={b}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                      style={{
                        background: "rgba(255,214,0,0.08)",
                        color: "rgba(255,214,0,0.9)",
                        border: "1px solid rgba(255,214,0,0.15)",
                      }}
                    >
                      {b}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Founder credit */}
            <div className="flex items-center gap-2.5 mt-8 sm:mt-10 justify-center lg:justify-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-[#0e0e14]"
                style={{ background: "#FFD600" }}
              >
                K
              </div>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Founded by{" "}
                <a
                  href="https://www.karangholap.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  className="font-semibold underline underline-offset-2"
                >
                  Karan Gholap
                </a>{" "}
                ·{" "}
                <a
                  href="https://privateacademy.in"
                  className="underline underline-offset-2"
                  style={{ color: "rgba(255,214,0,0.7)" }}
                >
                  privateacademy.in
                </a>
              </p>
            </div>
          </div>

          {/* ── RIGHT — iPhone Mockup ── */}
          <div
            className="w-full lg:w-1/2 shrink-0 flex justify-center items-center relative"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
              minHeight: 580 * phoneScale + 40,
            }}
          >
            {/* Glow behind phone */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 340 * phoneScale,
                height: 340 * phoneScale,
                background:
                  "radial-gradient(circle,rgba(255,214,0,0.18) 0%,transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* Floating badge — top left */}
            <div
              className="absolute z-20 flex items-center gap-2 rounded-2xl shadow-2xl"
              style={{
                left: phoneScale < 0.8 ? 0 : -10,
                top: "8%",
                background: "rgba(20,20,28,0.95)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                animation: "floatA 3s ease-in-out infinite",
                padding: phoneScale < 0.8 ? "8px 10px" : "10px 14px",
              }}
            >
              <div
                className="w-7 h-7 rounded-xl flex items-center justify-center text-sm shrink-0"
                style={{ background: "rgba(255,214,0,0.15)" }}
              >
                📄
              </div>
              <div>
                <p className="text-[10px] font-bold text-white">All Notes</p>
                <p
                  className="text-[9px] font-semibold"
                  style={{ color: "#FFD600" }}
                >
                  Semester-wise
                </p>
              </div>
            </div>

            {/* Floating badge — right */}
            <div
              className="absolute z-20 flex items-center gap-2 rounded-2xl shadow-2xl"
              style={{
                right: phoneScale < 0.8 ? 0 : -14,
                top: "38%",
                background: "rgba(20,20,28,0.95)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                animation: "floatB 4s ease-in-out infinite",
                padding: "8px 12px",
              }}
            >
              <span className="text-lg">🔓</span>
              <div>
                <p
                  className="text-[10px] font-semibold"
                  style={{ color: "#FFD600" }}
                >
                  Instant Access
                </p>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="absolute z-20 flex items-center gap-2 rounded-2xl shadow-2xl"
              style={{
                left: phoneScale < 0.8 ? 0 : 0,
                bottom: "10%",
                background: "rgba(20,20,28,0.95)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                animation: "floatC 3.5s ease-in-out infinite",
                padding: "8px 12px",
              }}
            >
              <span className="text-lg">🏫</span>
              <div>
                <p className="text-[10px] font-bold text-white">MU Focused</p>
                <p
                  className="text-[9px] font-semibold"
                  style={{ color: "#FFD600" }}
                >
                  5 Branches
                </p>
              </div>
            </div>

            {/* iPhone */}
            <div
              style={{
                transform: "rotate(-4deg)",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(0deg) scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotate(-4deg)")
              }
            >
              <IPhoneFrame scale={phoneScale}>
                <AppScreen />
              </IPhoneFrame>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer strip ── */}
      <div
        className="relative z-10 border-t px-5 sm:px-8 lg:px-20 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Private Academy · Built by{" "}
          <a
            href="https://www.karangholap.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgba(255,214,0,0.6)" }}
          >
            Karan Gholap
          </a>
        </p>
        <p
          className="text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          privateacademy.in
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes floatA {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
        }
        @keyframes floatB {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-14px)}
        }
        @keyframes floatC {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-8px)}
        }
        @keyframes shimmer {
          0%{background-position:200% 0}
          100%{background-position:-200% 0}
        }
        @keyframes confettiBob {
          0%,100%{transform:translateY(0) rotate(0deg)}
          50%{transform:translateY(-6px) rotate(20deg)}
        }
        @keyframes pulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:0.5;transform:scale(0.85)}
        }
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{display:none;}
      `}</style>
    </div>
  );
}
