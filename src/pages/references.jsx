import { useState } from "react";

const regions = [
  { name: "Mondveil", element: "Anemo", color: "#4ecdc4", bg: "#0d2b2a", icon: "🌿" },
  { name: "Auralith", element: "Geo",   color: "#f7c948", bg: "#2b2100", icon: "⛰️" },
  { name: "Pyranth",  element: "Pyro",  color: "#ff6b35", bg: "#2b1000", icon: "🔥" },
  { name: "Glacivyr", element: "Cryo",  color: "#a8d8ea", bg: "#0d1f2b", icon: "❄️" },
];

const archons = [
  { name: "Zephyros",  title: "God of Freedom",    element: "Anemo", region: "Mondveil",  color: "#4ecdc4", initial: "Z" },
  { name: "Auranthis", title: "God of Contracts",   element: "Geo",   region: "Auralith", color: "#f7c948", initial: "A" },
  { name: "Pyramis",   title: "God of War",         element: "Pyro",  region: "Pyranth",  color: "#ff6b35", initial: "P" },
];

const features = [
  { icon: "✦", title: "Open World Exploration",  desc: "Traverse vast, handcrafted regions filled with secrets and lore." },
  { icon: "◈", title: "Gacha Wish System",        desc: "Summon legendary characters and weapons from across the realm." },
  { icon: "⬡", title: "Elemental Combat",         desc: "Master 7 elements and unleash devastating reaction combos." },
];

const GOLD = "#c8a96e";
const GOLD2 = "#e8d5a3";
const DARK = "#0c0a14";
const DARK2 = "#13101f";
const DARK3 = "#1a1628";
const BORDER = "rgba(200,169,110,0.18)";

export default function HomePage() {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <div style={{ background: DARK, color: "#e8e0d0", fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 64,
        background: "rgba(12,10,20,0.85)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, color: GOLD, letterSpacing: "0.12em" }}>
          ✦ AETHERGUILD
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["World", "Characters", "Archons", "Gacha"].map(l => (
            <a key={l} href="#" style={{ color: "#a89880", fontSize: 13, textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = GOLD2}
              onMouseLeave={e => e.target.style.color = "#a89880"}>
              {l}
            </a>
          ))}
        </div>
        <button style={{
          background: "transparent", border: `1px solid ${GOLD}`, color: GOLD,
          padding: "8px 22px", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer",
          fontFamily: "inherit",
        }}>
          ENTER REALM
        </button>
      </nav>

      {/* ① HERO */}
      <section style={{
        height: "100vh", position: "relative", display: "flex",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 60% 40%, #1a0e2e 0%, ${DARK} 70%)`,
        }} />
        {/* decorative orbs */}
        {[
          { top: "20%", left: "15%", size: 180, color: "rgba(78,205,196,0.06)" },
          { top: "55%", right: "10%", size: 240, color: "rgba(200,169,110,0.07)" },
          { top: "10%", right: "25%", size: 120, color: "rgba(255,107,53,0.05)" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute", top: o.top, left: o.left, right: o.right,
            width: o.size, height: o.size, borderRadius: "50%",
            background: o.color, filter: "blur(40px)",
          }} />
        ))}
        {/* star field */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              width: Math.random() > 0.8 ? 2 : 1, height: Math.random() > 0.8 ? 2 : 1,
              borderRadius: "50%", background: `rgba(255,255,255,${0.2 + Math.random() * 0.5})`,
            }} />
          ))}
        </div>

        <div style={{ position: "relative", textAlign: "center", zIndex: 2 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.4em", color: GOLD, marginBottom: 20, opacity: 0.8 }}>
            ✦ &nbsp; A N O T H E R &nbsp; W O R L D &nbsp; A W A I T S &nbsp; ✦
          </div>
          <h1 style={{
            fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 700, margin: 0,
            color: "#f0e8d8", lineHeight: 1, letterSpacing: "0.05em",
            textShadow: `0 0 80px rgba(200,169,110,0.3)`,
          }}>
            AETHERGUILD
          </h1>
          <div style={{ width: 120, height: 1, background: GOLD, margin: "24px auto", opacity: 0.5 }} />
          <p style={{ fontSize: 16, color: "#a89880", letterSpacing: "0.15em", marginBottom: 48 }}>
            WHERE LEGENDS ARE SUMMONED
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button style={{
              background: GOLD, color: DARK, border: "none",
              padding: "14px 40px", fontSize: 13, letterSpacing: "0.12em",
              cursor: "pointer", fontFamily: "inherit", fontWeight: 700,
            }}>
              PLAY NOW
            </button>
            <button style={{
              background: "transparent", color: GOLD2, border: `1px solid ${BORDER}`,
              padding: "14px 40px", fontSize: 13, letterSpacing: "0.12em",
              cursor: "pointer", fontFamily: "inherit",
            }}>
              WATCH TRAILER
            </button>
          </div>
        </div>

        {/* scroll hint */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5,
        }}>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", color: GOLD }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: GOLD }} />
        </div>
      </section>

      {/* ② MEDIA SHOWCASE */}
      <section style={{ padding: "100px 48px", background: DARK2 }}>
        <SectionLabel>MEDIA SHOWCASE</SectionLabel>
        <h2 style={sectionTitle}>Experience the World</h2>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginTop: 48 }}>
          {/* main video */}
          <div style={{
            position: "relative", background: DARK3, border: `1px solid ${BORDER}`,
            aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", cursor: "pointer",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #1a0e2e 0%, #0c1a2e 100%)",
            }} />
            <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                border: `2px solid ${GOLD}`, display: "flex", alignItems: "center",
                justifyContent: "center", margin: "0 auto 16px",
                background: "rgba(200,169,110,0.1)",
              }}>
                <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${GOLD}`, marginLeft: 4 }} />
              </div>
              <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.1em" }}>OFFICIAL TRAILER</p>
              <p style={{ color: "#a89880", fontSize: 11, marginTop: 6 }}>Version 2.0 — The Shattered Sky</p>
            </div>
          </div>
          {/* side thumbnails */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Gameplay Overview", sub: "Combat System" },
              { label: "World Exploration", sub: "Regions Tour" },
            ].map((v, i) => (
              <div key={i} style={{
                flex: 1, background: DARK3, border: `1px solid ${BORDER}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: i === 0
                    ? "linear-gradient(135deg, #1a1a0e 0%, #0c1a0e 100%)"
                    : "linear-gradient(135deg, #1a0e0e 0%, #1a1428 100%)",
                }} />
                <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", border: `1px solid ${GOLD}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 8px", background: "rgba(200,169,110,0.08)",
                  }}>
                    <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `10px solid ${GOLD}`, marginLeft: 2 }} />
                  </div>
                  <p style={{ color: GOLD2, fontSize: 12, letterSpacing: "0.06em" }}>{v.label}</p>
                  <p style={{ color: "#a89880", fontSize: 10, marginTop: 4 }}>{v.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ BANNER SPOTLIGHT */}
      <section style={{ padding: "100px 48px", background: DARK, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", right: -80, transform: "translateY(-50%)", width: 500, height: 500, borderRadius: "50%", background: "rgba(83,74,183,0.06)", filter: "blur(60px)" }} />
        <SectionLabel>LIMITED BANNER</SectionLabel>
        <h2 style={sectionTitle}>Current Wish Event</h2>

        <div style={{
          marginTop: 48, border: `1px solid rgba(83,74,183,0.4)`,
          background: "linear-gradient(135deg, #13101f 0%, #1a1430 100%)",
          display: "grid", gridTemplateColumns: "1fr 2fr", gap: 0, overflow: "hidden",
        }}>
          {/* character art placeholder */}
          <div style={{
            background: "linear-gradient(160deg, #1e1040 0%, #0d0820 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 320, position: "relative", overflow: "hidden",
            borderRight: `1px solid rgba(83,74,183,0.3)`,
          }}>
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 160, height: 160, borderRadius: "50%", background: "rgba(127,119,221,0.15)", filter: "blur(30px)" }} />
            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <div style={{
                width: 100, height: 100, borderRadius: "50%", border: `2px solid #7f77dd`,
                margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(127,119,221,0.1)", fontSize: 36,
              }}>✦</div>
              <div style={{ fontSize: 11, color: "#7f77dd", letterSpacing: "0.15em" }}>CHARACTER ART</div>
            </div>
          </div>

          {/* banner info */}
          <div style={{ padding: "48px 48px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "#7f77dd", marginBottom: 12 }}>✦ 5-STAR &nbsp;·&nbsp; ANEMO &nbsp;·&nbsp; SWORD</div>
            <h3 style={{ fontSize: 40, color: "#e8e0d0", margin: "0 0 8px", letterSpacing: "0.05em" }}>Zephyros</h3>
            <p style={{ color: "#a89880", fontSize: 14, lineHeight: 1.7, marginBottom: 32, maxWidth: 380 }}>
              The wandering god of freedom, whose whispers ride every wind across Mondveil. Once sworn to protect, now searching for a lost truth.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
              {[["ATK", "2,847"], ["CRIT Rate", "31.1%"], ["Wind DMG", "+46.6%"]].map(([label, val]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#7f77dd", letterSpacing: "0.1em", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 20, color: GOLD, fontWeight: 700 }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button style={{
                background: "#534ab7", color: "#e8e0d0", border: "none",
                padding: "12px 32px", fontSize: 13, letterSpacing: "0.1em",
                cursor: "pointer", fontFamily: "inherit",
              }}>WISH NOW</button>
              <button style={{
                background: "transparent", color: "#7f77dd", border: "1px solid rgba(127,119,221,0.4)",
                padding: "12px 24px", fontSize: 13, letterSpacing: "0.1em",
                cursor: "pointer", fontFamily: "inherit",
              }}>View Details</button>
              <span style={{ color: "#a89880", fontSize: 12, marginLeft: 8 }}>Ends in: 12d 4h 22m</span>
            </div>
          </div>
        </div>

        {/* pity indicators */}
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          {["Zephyros", "Auranthis", "Pyramis"].map((name, i) => (
            <div key={i} style={{
              flex: 1, padding: "12px 20px", border: `1px solid ${i === 0 ? "rgba(127,119,221,0.4)" : BORDER}`,
              background: i === 0 ? "rgba(127,119,221,0.08)" : DARK3,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: i === 0 ? "rgba(127,119,221,0.2)" : "rgba(200,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>✦</div>
              <div>
                <div style={{ fontSize: 12, color: i === 0 ? "#afa9ec" : GOLD, letterSpacing: "0.06em" }}>{name}</div>
                <div style={{ fontSize: 10, color: "#a89880", marginTop: 2 }}>{i === 0 ? "Rate-up featured" : "Standard pool"}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ④ REGIONS */}
      <section style={{ padding: "100px 48px", background: DARK2 }}>
        <SectionLabel>WORLD MAP</SectionLabel>
        <h2 style={sectionTitle}>Regions of Aetherguild</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 48 }}>
          {regions.map((r, i) => (
            <div
              key={i}
              onClick={() => setActiveRegion(i)}
              style={{
                background: activeRegion === i ? r.bg : DARK3,
                border: `1px solid ${activeRegion === i ? r.color + "60" : BORDER}`,
                padding: "32px 24px", cursor: "pointer", transition: "all 0.3s",
                textAlign: "center", position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => { if (activeRegion !== i) e.currentTarget.style.borderColor = r.color + "40"; }}
              onMouseLeave={e => { if (activeRegion !== i) e.currentTarget.style.borderColor = BORDER; }}
            >
              {activeRegion === i && (
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 80%, ${r.color}15 0%, transparent 70%)` }} />
              )}
              <div style={{ fontSize: 32, marginBottom: 16, position: "relative" }}>{r.icon}</div>
              <div style={{ fontSize: 16, color: activeRegion === i ? r.color : GOLD2, letterSpacing: "0.08em", marginBottom: 6, position: "relative" }}>{r.name}</div>
              <div style={{ fontSize: 11, color: "#a89880", letterSpacing: "0.12em", position: "relative" }}>{r.element}</div>
              {activeRegion === i && (
                <div style={{ marginTop: 16, fontSize: 10, color: r.color, letterSpacing: "0.1em", position: "relative" }}>EXPLORE →</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ⑤ ARCHONS */}
      <section style={{ padding: "100px 48px", background: DARK }}>
        <SectionLabel>DIVINE RULERS</SectionLabel>
        <h2 style={sectionTitle}>The Archons</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
          {archons.map((a, i) => (
            <div key={i} style={{
              background: DARK3, border: `1px solid ${BORDER}`,
              padding: "40px 32px", textAlign: "center", position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 120, height: 120, borderRadius: "50%", background: `${a.color}12`, filter: "blur(20px)" }} />
              <div style={{
                width: 72, height: 72, borderRadius: "50%", border: `2px solid ${a.color}`,
                margin: "0 auto 20px", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 28, color: a.color,
                background: `${a.color}15`, position: "relative",
              }}>
                {a.initial}
              </div>
              <div style={{ fontSize: 10, color: a.color, letterSpacing: "0.2em", marginBottom: 8 }}>{a.element} &nbsp;·&nbsp; {a.region}</div>
              <h3 style={{ fontSize: 24, color: "#e8e0d0", margin: "0 0 8px", letterSpacing: "0.06em" }}>{a.name}</h3>
              <p style={{ fontSize: 13, color: "#a89880", letterSpacing: "0.04em" }}>{a.title}</p>
              <div style={{ marginTop: 24, width: 40, height: 1, background: a.color, margin: "24px auto 0", opacity: 0.4 }} />
            </div>
          ))}
        </div>
      </section>

      {/* ⑥ FEATURES */}
      <section style={{ padding: "100px 48px", background: DARK2 }}>
        <SectionLabel>WHY PLAY</SectionLabel>
        <h2 style={sectionTitle}>Forge Your Legend</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: DARK3, border: `1px solid ${BORDER}`,
              padding: "40px 32px", position: "relative", overflow: "hidden",
            }}>
              <div style={{ fontSize: 28, color: GOLD, marginBottom: 20, display: "block" }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, color: "#e8e0d0", margin: "0 0 12px", letterSpacing: "0.04em" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#a89880", lineHeight: 1.7 }}>{f.desc}</p>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${GOLD}60, transparent)` }} />
            </div>
          ))}
        </div>
      </section>

      {/* ⑦ FOOTER */}
      <footer style={{ padding: "60px 48px 40px", background: "#080610", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 22, color: GOLD, letterSpacing: "0.12em", marginBottom: 12 }}>✦ AETHERGUILD</div>
            <p style={{ color: "#a89880", fontSize: 13, maxWidth: 280, lineHeight: 1.7 }}>
              A world of elemental gods, legendary heroes, and endless adventure awaits.
            </p>
          </div>
          <div style={{ display: "flex", gap: 64 }}>
            {[
              { label: "Game", links: ["Characters", "Regions", "Archons", "Gacha"] },
              { label: "Community", links: ["Discord", "Twitter", "Reddit", "YouTube"] },
            ].map(col => (
              <div key={col.label}>
                <div style={{ fontSize: 11, color: GOLD, letterSpacing: "0.2em", marginBottom: 16 }}>{col.label}</div>
                {col.links.map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: "#a89880", fontSize: 13, textDecoration: "none" }}
                      onMouseEnter={e => e.target.style.color = GOLD2}
                      onMouseLeave={e => e.target.style.color = "#a89880"}>
                      {l}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#5a5060" }}>© 2025 Aetherguild. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "#5a5060" }}>Made with React · Inspired by Genshin Impact</span>
        </div>
      </footer>

    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 10, letterSpacing: "0.4em", color: GOLD, marginBottom: 12, opacity: 0.7 }}>
      ✦ &nbsp; {children}
    </div>
  );
}

const sectionTitle = {
  fontSize: "clamp(28px, 4vw, 42px)", color: "#f0e8d8",
  margin: 0, letterSpacing: "0.04em", fontWeight: 700,
};