import React from 'react';

export default function Vorstand() {
  const vorstand = [
    {
      name: "Max Mustermann",
      rolle: "1. Vorsitzender",
      bild: "/1.jpeg", 
      motto: "Gemeinsam stark für die Zukunft."
    },
    {
      name: "Sarah Beispiel",
      rolle: "2. Vorsitzende",
      bild: "/2.png",
      motto: "Jugendarbeit ist unser Fundament."
    },
    {
      name: "Thomas Müller",
      rolle: "Kassierer",
      bild: "/vorstand3.jpg",
      motto: "Transparenz und Fairness."
    },
    {
      name: "Julia Meyer",
      rolle: "Geschäftsführerin",
      bild: "/vorstand4.jpg",
      motto: "Wir organisieren den Erfolg."
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. HEADER */}
      <div className="bg-[#001845] py-20 text-center text-white mb-16 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-4">
          Unser Vorstand
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto px-4">
          Die Köpfe hinter Alemannia Essen. Wir arbeiten ehrenamtlich mit Herzblut für den Erfolg unseres Vereins.
        </p>
      </div>

      {/* 2. TEAM GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {vorstand.map((person, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              
              {/* Bild Bereich */}
              <div className="h-72 overflow-hidden relative bg-gray-200">
                <img
                  src={person.bild}
                  alt={person.name}
                  onError={(e) => {e.target.src = "https://ui-avatars.com/api/?name=" + person.name + "&background=001845&color=fff&size=512"}}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold text-sm tracking-widest uppercase">
                    Alemannia Essen
                  </span>
                </div>
              </div>

              {/* Text Bereich */}
              <div className="p-6 text-center">
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
                  {person.rolle}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {person.name}
                </h3>
                
                <p className="text-gray-500 text-sm italic">
                  "{person.motto}"
                </p>
              </div>
            </div>
          ))}

        </div>
        
        {/* Zusatz-Info / Engagement */}
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#001845] mb-4">Du möchtest dich engagieren?</h3>
          <p className="text-gray-600 mb-6">
            Wir suchen immer engagierte Mitglieder, die Lust haben, Verantwortung zu übernehmen oder Projekte zu unterstützen.
          </p>
          {/* Link führt nun direkt zur Kontaktseite */}
          <a 
            href="/kontakt" 
            className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-md"
          >
            Jetzt Kontakt aufnehmen →
          </a>
        </div>

      </div>
    </div>
  );
}