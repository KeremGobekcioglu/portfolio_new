import { ImageResponse } from "next/og";
import { profile } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#FAF9F6",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 64, color: "#1A1A1A", fontFamily: "Georgia, serif" }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 28, color: "#4C6B8A", marginTop: 24, maxWidth: 900 }}>
          {profile.positioning}
        </div>
      </div>
    ),
    { ...size }
  );
}
