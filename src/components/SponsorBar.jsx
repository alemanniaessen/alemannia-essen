import React from "react";

export default function SponsorBar() {
  // Deine Liste mit .jpg und .jpeg genau wie du sie hattest
  const allSponsors = [
    { logo: "/sponsor1.jpg" },
    { logo: "/sponsor2.jpg" },
    { logo: "/sponsor3.jpg" },
    { logo: "/sponsor4.jpg" },
    { logo: "/sponsor5.jpg" },
    { logo: "/sponsor6.jpg" },
    { logo: "/sponsor7.jpg" },
    { logo: "/sponsor8.jpg" },
    { logo: "/sponsor9.jpg" },
    { logo: "/sponsor10.jpg" },
    { logo: "/sponsor11.jpg" },
    { logo: "/sponsor12.jpg" },
    { logo: "/sponsor13.jpeg" },
    { logo: "/sponsor14.jpeg" },
    { logo: "/sponsor15.jpeg" },
    { logo: "/sponsor16.jpeg" },
    { logo: "/sponsor17.jpeg" },
  ];

  return (
    <div className="bg-gray-50 py-16 border-t border-b border-gray-200 overflow-hidden relative">
      
      <div className="text-center mb-10">
        <span className="text-blue-900 uppercase text-sm font-black tracking-[0.3em]">
          Unsere Partner & Sponsoren
        </span>
      </div>

      {/* Weiche Kanten an den Seiten */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

      {/* Das Band */}
      <div className="flex w-max animate-scroll hover:pause">
        
        {/* Set 1: Originale Liste */}
        <div className="flex items-center">
          {allSponsors.map((s, index) => (
            // Hier ist die "Box"
            <div key={index} className="mx-4 flex-shrink-0">
              <div className="w-48 h-32 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-4 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img 
                  src={s.logo} 
                  alt={`Sponsor ${index + 1}`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Set 2: Duplikat für den nahtlosen Loop */}
        <div className="flex items-center">
          {allSponsors.map((s, index) => (
            <div key={`dup-${index}`} className="mx-4 flex-shrink-0">
              <div className="w-60 h-32 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-4 hover:shadow-lg hover:scale-105 transition-all duration-250">
                <img 
                  src={s.logo} 
                  alt={`Sponsor ${index + 1}`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          /* HIER: Geschwindigkeit auf 40s (langsamer) */
          animation: scroll 40s linear infinite; 
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}