import { ImageResponse } from "next/og";

export const alt =
  "Abdulwahab Teslim: AI Evaluation, Software QA and Frontend Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f1f1a",
          color: "#ecfdf5",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#6ee7b7" }}>
          AI EVALUATION · SOFTWARE QA · FRONTEND
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          Abdulwahab Teslim
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 24, color: "#a7f3d0" }}>
          AI Evaluation Specialist | Software QA | Test Automation | Frontend Development
        </div>
      </div>
    ),
    { ...size }
  );
}
