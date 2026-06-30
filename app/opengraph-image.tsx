import { ImageResponse } from "next/og";
import { identity } from "@/content/portfolio";

export const dynamic = "force-static";
export const alt = `${identity.name} — Técnico de Sistemas y Soporte IT`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c14",
          backgroundImage:
            "radial-gradient(60% 60% at 25% 20%, rgba(59,130,246,0.20), transparent 70%), radial-gradient(50% 50% at 90% 90%, rgba(139,92,246,0.18), transparent 70%)",
          padding: 72,
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9aa3b2" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3b82f6" }} />
          gerylabs.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 40, color: "#9aa3b2" }}>Hola, soy</div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -2,
              background: "linear-gradient(110deg, #60a5fa, #a78bfa, #67e8f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {identity.name}
          </div>
          <div style={{ fontSize: 36, color: "#d4d8e0", maxWidth: 900 }}>
            {identity.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 24, color: "#9aa3b2" }}>
          {["Sistemas", "Virtualización", "Redes", "Automatización e IA"].map((t) => (
            <div
              key={t}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                padding: "8px 18px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
