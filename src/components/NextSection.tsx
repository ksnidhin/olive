export default function NextSection() {
  return (
    <section className="w-full bg-brand-dark min-h-[40vh] relative z-20 flex items-center px-6 md:px-24 py-16 text-brand-bg/80 border-t border-brand-dark">
      {/* Background noise for dark section */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-48 h-32 md:w-64 md:h-40 bg-[#1a1a1a] relative overflow-hidden">
          {/* Simulating the dark fabric image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#2a2a2a] opacity-80 mix-blend-overlay"></div>
          {/* We'd put the real image here */}
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase leading-relaxed">
            A NEW<br/>
            IN EVERYDAY WEAR.
          </p>
        </div>
      </div>
    </section>
  );
}
