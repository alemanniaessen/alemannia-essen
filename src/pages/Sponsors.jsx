import React from "react";
import { Link } from "react-router-dom";

export default function Sponsors() {
  // 1. WICHTIGE PARTNER
  const premiumPartners = [
    { name: "Premium Partner 1", logo: "/sponsor7.jpg", website: "#" },
    { name: "Premium Partner 2", logo: "/sponsor13.jpeg", website: "#" },
    { name: "Premium Partner 3", logo: "/sponsor3.jpg", website: "#" },
    { name: "Premium Partner 4", logo: "/sponsor4.jpg", website: "#" },
    { name: "Premium Partner 5", logo: "/sponsor5.jpg", website: "#" },     
    { name: "Premium Partner 6", logo: "/sponsor16.jpeg", website: "#" },
  ];

  // 2. BUSINESS PARTNER
  const businessPartners = [
    { name: "Partner 1", logo: "/sponsor6.jpg", website: "#" },
    { name: "Partner 2", logo: "/sponsor1.jpg", website: "#" },
    { name: "Partner 3", logo: "/sponsor8.jpg", website: "#" }, // Dies ist die ESPE GMBH
    { name: "Partner 4", logo: "/sponsor9.jpg", website: "#" },
    { name: "Partner 5", logo: "/sponsor10.jpg", website: "#" },
    { name: "Partner 6", logo: "/sponsor11.jpg", website: "#" },
    { name: "Partner 7", logo: "/sponsor12.jpg", website: "#" },
    { name: "Partner 8", logo: "/sponsor2.jpg", website: "#" },
    { name: "Partner 9", logo: "/sponsor14.jpeg", website: "#" },
    { name: "Partner 10", logo: "/sponsor17.jpeg", website: "#" },
  ];

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-[#001845]">
      
      {/* --- HEADER --- */}
      <div className="bg-[#001845] pt-20 pb-24 text-center text-white relative">
        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
          Unsere <span className="text-blue-500">Partner</span>
        </h1>
        <div className="w-20 h-2 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        
        {/* --- KATEGORIE 1: WICHTIGE PARTNER --- */}
        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-black uppercase italic">Wichtige Partner</h2>
              <div className="h-[2px] bg-blue-600 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumPartners.map((p, i) => (
                <a 
                  key={i} 
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center h-48 hover:bg-blue-50 transition-all duration-300 group border border-transparent hover:border-blue-200 overflow-hidden"
                >
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    className="max-h-[115%] max-w-[115%] object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --- KATEGORIE 2: BUSINESS PARTNER --- */}
        <section className="mb-24 px-4">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black text-gray-400 uppercase italic">Business Partner</h2>
            <div className="h-[1px] bg-gray-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {businessPartners.map((p, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 rounded-xl p-3 h-32 flex items-center justify-center hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  style={p.name === "Partner 3" ? { objectPosition: "10% 20%" } : {}}
                  className={`
                    object-contain transition-transform duration-500 group-hover:scale-105
                    ${p.name === "Partner 3" ? "max-h-[100%] max-w-[100%] scale-[5.0]" : "max-h-[110%] max-w-[110%]"}
                  `} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- KONTAKT CTA --- */}
        <div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-16 text-center border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-black uppercase italic mb-4">Partner werden</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 font-medium">
            Unterstützen Sie Alemannia Essen und platzieren Sie Ihre Marke in unserem starken Netzwerk.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-block bg-[#001845] text-white font-black py-4 px-10 rounded-xl hover:bg-blue-600 transition-colors uppercase tracking-widest"
          >
            Jetzt anfragen
          </Link>
        </div>

      </div>
    </div>
  );
}