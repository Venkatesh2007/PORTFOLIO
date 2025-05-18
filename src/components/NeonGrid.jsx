const NeonGrid = () => (
    <div className="pointer-events-none absolute inset-0 grid grid-cols-20 grid-rows-20">
        {[...Array(400)].map((_, i) => (
            <div
                key={i}
                className="border border-cyan-800 opacity-20"
                style={{
                    animation: `pulseGrid 5s ease-in-out infinite`,
                    animationDelay: `${(i % 20) * 0.12}s`,
                }}
            />
        ))}

        <style jsx>{`
      @keyframes pulseGrid {
        0%, 100% {
          opacity: 0.1;
        }
        50% {
          opacity: 0.3;
        }
      }
    `}</style>
    </div>
);
export default NeonGrid;