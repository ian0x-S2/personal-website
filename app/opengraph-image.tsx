import { ImageResponse } from "next/og";

export const alt = "Ian - Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(to bottom, #0a0a0a, #1a1a1a)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            I
          </div>
        </div>
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 12 }}>
          Ian
        </div>
        <div style={{ fontSize: 28, opacity: 0.8 }}>
          Full Stack Developer
        </div>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 16,
            fontSize: 18,
            opacity: 0.7,
          }}
        >
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    { ...size }
  );
}