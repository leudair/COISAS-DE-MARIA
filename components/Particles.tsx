/** Partículas pink discretas, geradas de forma determinística (sem hidratação divergente). */
export function Particles({ count = 18 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, i) => {
    const r = (n: number) => ((Math.sin((i + 1) * n) + 1) / 2);
    return {
      left: `${(r(12.9898) * 100).toFixed(2)}%`,
      size: 2 + Math.round(r(78.233) * 3),
      duration: 14 + Math.round(r(37.719) * 16),
      delay: -Math.round(r(4.581) * 20),
      drift: Math.round((r(9.12) - 0.5) * 120),
      opacity: (0.25 + r(3.3) * 0.45).toFixed(2),
    };
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--p-drift": `${p.drift}px`,
              "--p-opacity": p.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
