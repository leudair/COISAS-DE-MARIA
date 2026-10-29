import { ImageResponse } from "next/og";

export const alt = "Ana Liz — A mulher por trás da Coisas de Maria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "radial-gradient(circle at 75% 30%, rgba(245,0,135,0.35), #000 60%)",
          color: "#F5F5F7",
        }}
      >
        <div style={{ fontSize: 150, fontWeight: 900, letterSpacing: -4 }}>ANA LIZ</div>
        <div style={{ fontSize: 48, color: "#F50087", fontWeight: 800, marginTop: 10 }}>A mulher por trás da marca.</div>
        <div style={{ fontSize: 30, opacity: 0.7, marginTop: 30 }}>Muito além da marca, existe uma história.</div>
      </div>
    ),
    size,
  );
}
