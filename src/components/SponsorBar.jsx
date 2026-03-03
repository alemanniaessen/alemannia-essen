import React from "react";

export default function SponsorBar() {
  const allSponsors = [
    { name: "Sparkasse Essen", logo: "https://placehold.co/600x200?text=Sparkasse+Essen" },
    { name: "Autohaus Müller", logo: "https://placehold.co/400x150?text=Autohaus+Müller" },
    { name: "Stadtwerke Essen", logo: "https://placehold.co/400x150?text=Stadtwerke+Essen" },
    { name: "Bäckerei Schmidt", logo: "https://placehold.co/300x150?text=Bäckerei+Schmidt" },
    { name: "Sportgeschäft Goal", logo: "https://placehold.co/300x150?text=Sport+Goal" },
    { name: "Restaurant Zur Post", logo: "https://placehold.co/300x150?text=Restaurant" },
    { name: "Bauunternehmen Hoch", logo: "https://placehold.co/300x150?text=Bau+Hoch" },
    { name: "Getränke Blitz", logo: "https://placehold.co/300x150?text=Getränke+Blitz" },
    { name: "Physio Praxis", logo: "https://placehold.co/300x150?text=Physio+Praxis" },
  ];

  return (
    <div className="bg-white py-14 border-t border-b border-gray-100 overflow-hidden relative">
      
      <div className="text-center mb-8">
        <span className="text-gray-400 uppercase text-sm font-black tracking-[0.4em]">
          Unsere Partner & Sponsoren
        </span>
      </div>

      {/* Weiche Kanten an den Seiten */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Das Band mit minimalem Abstand (mx-4) und großen Logos (h-24/h-32) */}
      <div className="flex w-max animate-scroll">
        
        {/* Set 1 */}
        <div className="flex items-center">
          {allSponsors.map((s, index) => (
            <div key={index} className="mx-4 md:mx-6 flex-shrink-0">
              <img 
                src={s.logo} 
                alt={s.name} 
                className="h-20 md:h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Set 2 (Duplikat für den Loop) */}
        <div className="flex items-center">
          {allSponsors.map((s, index) => (
            <div key={`dup-${index}`} className="mx-4 md:mx-6 flex-shrink-0">
              <img 
                src={s.logo} 
                alt={s.name} 
                className="h-20 md:h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
              />
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
          animation: scroll 45s linear infinite; /* Höherer Wert = Langsamer (45 Sekunden) */
        }
      `}</style>
    </div>
  );
}