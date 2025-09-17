export const GeometricElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Angular geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-silver/20 rotate-45 animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-crimson/30 rotate-12" 
           style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      
      {/* Wing-like elements */}
      <div className="absolute bottom-40 left-0 w-64 h-2 bg-gradient-to-r from-transparent via-silver/20 to-transparent 
                      transform -rotate-12 origin-left" />
      <div className="absolute bottom-32 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-silver/30 to-transparent 
                      transform -rotate-6 origin-left" />
      
      {/* Aircraft silhouette elements */}
      <div className="absolute top-1/3 right-10 opacity-10">
        <svg width="120" height="60" viewBox="0 0 120 60" className="text-silver">
          <path d="M10 30 L110 30 M60 10 L60 50 M20 20 L100 40 M20 40 L100 20" 
                stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Radar sweep effect */}
      <div className="absolute top-20 right-32 w-40 h-40 rounded-full border border-silver/10">
        <div className="absolute inset-4 rounded-full border border-silver/20">
          <div className="absolute inset-4 rounded-full border border-crimson/30">
            <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-crimson/50 origin-left 
                            animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--silver)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--silver)) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  );
};