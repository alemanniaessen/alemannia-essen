import React from "react";
import { Link } from "react-router-dom";

export default function Sponsors() {
  // 1. HAUPTSPONSOR
  const mainSponsor = {
    name: "Sparkasse Essen",
    logo: "https://placehold.co/800x300/001845/ffffff?text=Sparkasse+Essen",
    website: "https://www.sparkasse-essen.de",
    slogan: "Starker Partner für unsere Region."
  };

  // 2. PREMIUM PARTNER
  const premiumPartners = [
    { name: "Autohaus Müller", logo: "https://placehold.co/500x250?text=Autohaus+Müller", website: "#" },
    { name: "Stadtwerke Essen", logo: "https://placehold.co/500x250?text=Stadtwerke+Essen", website: "#" },
  ];

  // 3. BUSINESS PARTNER
  const businessPartners = [
    { name: "Bäckerei Schmidt", logo: "https://placehold.co/400x200?text=Bäckerei", website: "#" },
    { name: "Sport Goal", logo: "https://placehold.co/400x200?text=Sport+Goal", website: "#" },
    { name: "Restaurant Post", logo: "https://placehold.co/400x200?text=Restaurant", website: "#" },
    { name: "Bau Hoch", logo: "https://placehold.co/400x200?text=Bau+Hoch", website: "#" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- HERO HEADER --- */}
      <div className="relative bg-[#001845] py-24 overflow-hidden">
        {/* Dekoratives Licht im Hintergrund */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 -mr-64 -mt-64"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-sm">Netzwerk</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 uppercase tracking-tight">
            Unsere <span className="text-blue-500">Partner</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Gemeinsam für Alemannia Essen. Diese Unternehmen unterstützen unseren Verein und machen unsere Arbeit erst möglich.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-24">
        
        {/* --- HAUPTSPONSOR CARD --- */}
        <section className="mb-20">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex items-center justify-center bg-gray-50">
                <img 
                  src={mainSponsor.logo} 
                  alt={mainSponsor.name} 
                  className="max-h-32 md:max-h-48 object-contain transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-12 flex flex-col justify-center bg-white border-l border-gray-50 text-center md:text-left">
                <span className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-2">Hauptsponsor</span>
                <h2 className="text-3xl font-black text-[#001845] mb-4">{mainSponsor.name}</h2>
                <p className="text-gray-500 mb-8 text-lg italic">"{mainSponsor.slogan}"</p>
                <a 
                  href={mainSponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#001845] text-white text-center py-4 px-8 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg self-center md:self-start"
                >
                  Website besuchen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- PREMIUM PARTNER GRID --- */}
        <section className="mb-20">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-black text-[#001845] uppercase tracking-wider whitespace-nowrap">Premium Partner</h2>
            <div className="h-[2px] bg-gradient-to-r from-blue-600 to-transparent w-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumPartners.map((p, i) => (
              <a 
                key={i} href={p.website}
                className="group bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100 flex items-center justify-center h-56"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-h-24 object-contain filter grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        {/* --- BUSINESS PARTNER GRID --- */}
        <section className="mb-20">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl font-black text-gray-400 uppercase tracking-wider whitespace-nowrap">Business Partner</h2>
            <div className="h-[1px] bg-gray-200 w-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessPartners.map((p, i) => (
              <div 
                key={i}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center h-32 group"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-h-12 object-contain filter opacity-60 group-hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA: SPONSOR WERDEN --- */}
        <div className="bg-gradient-to-br from-[#001845] to-blue-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Ihr Logo auf unserer Brust?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Werden Sie Teil der Alemannia-Familie und unterstützen Sie den Sport in Essen. Wir finden das passende Paket für Ihr Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/kontakt" 
                className="bg-white text-[#001845] font-black py-5 px-12 rounded-2xl hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105 shadow-2xl"
              >
                Jetzt Partner werden
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}