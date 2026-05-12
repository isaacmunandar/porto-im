import { ImageResponse } from "next/og";

export const alt = "Isaac Munandar — AI Expert & Entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            background: "#ffffff",
            marginBottom: 56,
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 28,
            letterSpacing: "-2px",
          }}
        >
          Isaac Munandar
        </div>
        <div
          style={{
            color: "#888888",
            fontSize: 36,
            fontWeight: 400,
            marginBottom: "auto",
          }}
        >
          AI Expert & Entrepreneur
        </div>
        <div
          style={{
            color: "#444444",
            fontSize: 26,
          }}
        >
          isaacmunandar.com
        </div>
      </div>
    ),
    size
  );
}
