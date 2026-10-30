import { ImageResponse } from "next/og";

export const alt = "Ana Liz — A mulher por trás da Coisas de Maria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

/** Prévia para WhatsApp/redes. Substituir por arte com a foto aprovada quando disponível. */
export default function OgImage() {
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
          background: "#000",
          color: "#F7F1F3",
        }}
      >
        <div style={{ fontSize: 160, fontFamily: "serif", letterSpacing: -3 }}>Ana Liz</div>
        <div style={{ fontSize: 48, fontFamily: "serif", fontStyle: "italic", marginTop: 10 }}>A mulher por trás da marca.</div>
        <div style={{ fontSize: 30, color: "#BFAEB5", marginTop: 30 }}>Muito além da marca, existe uma história.</div>
      </div>
    ),
    size,
  );
}
