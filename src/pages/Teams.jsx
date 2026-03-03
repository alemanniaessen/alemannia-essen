import React from "react";
import { Link } from "react-router-dom";

export default function Teams() {
  const teamCategories = [
    {
      title: "Senioren",
      description: "Unsere Herren-Teams im Spielbetrieb der Kreisliga.",
      teams: [
        { name: "1. Mannschaft", path: "/teams/erste", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800" },
        { name: "2. Mannschaft", path: "/teams/zweite", image: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=800" },
        { name: "Alte Herren", path: "/teams/alte-herren", image: "https://images.unsplash.com/photo-1431324155629-1a6eda1eedbc?w=800" },
      ]
    },
    {
      title: "Jugendabteilung",
      description: "Die Zukunft von Alemannia Essen. Von den Bambinis bis zur A-Jugend.",
      teams: [
        { name: "C-Jugend (U15)", path: "/teams/c-jugend", image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800" },
        { name: "E-Jugend", path: "/teams/e-jugend", image: "https://images.unsplash.com/photo-1526232761682-d26e43ac148e?w=800" },
        { name: "Bambinis", path: "/teams/bambinis", image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800" },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER */}
      <div className="bg-[#001845] py-20 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
            Unsere <span className="text-blue-500">Teams</span>
          </h1>
          <p className="text-blue-200 mt-4 text-lg max-w-xl mx-auto font-light">
            Von den Kleinsten bis zu den Profis – Leidenschaft in jedem Alter.
          </p>
        </div>
        {/* Dekorativer Kreis */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {teamCategories.map((category, idx) => (
          <div key={idx} className="mb-24 last:mb-0">
            {/* Titel der Kategorie */}
            <div className="flex items-end justify-between mb-10 border-b-2 border-gray-100 pb-4">
              <div>
                <h2 className="text-3xl font-black text-[#001845] uppercase">{category.title}</h2>
                <p className="text-gray-500 mt-1">{category.description}</p>
              </div>
            </div>

            {/* Grid der Mannschaften */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.teams.map((team, tIdx) => (
                <Link 
                  key={tIdx} 
                  to={team.path} 
                  className="group relative h-80 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Hintergrundbild */}
                  <img 
                    src={team.image} 
                    alt={team.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Overlay (Verlauf von Schwarz zu Transparent) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001845] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Text auf der Karte */}
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-black text-white uppercase mb-2 group-hover:text-blue-400 transition">
                      {team.name}
                    </h3>
                    <span className="text-white/70 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                      Zum Kader 
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5-5 5M6 17l5-5-5-5"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}