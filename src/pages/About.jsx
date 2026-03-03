import React from 'react';
import { Link } from 'react-router-dom'; 

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. HERO / HEADER BEREICH */}
      <div className="bg-[#001845] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-6">
          Über uns
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        <p className="text-blue-200 mt-6 text-xl max-w-2xl mx-auto px-4">
          Mehr als nur ein Fussballverein. Eine Familie im Herzen von Essen.
        </p>
      </div>

      {/* 2. GESCHICHTE & BILD (Grid Layout) */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Bild Platzhalter - Hier später dein echtes Bild einfügen */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 group">
            <img 
              src="/uberuns1.png" 
              alt="Mannschaftsfoto Alemannia Essen" 
              className="object-cover w-full h-full transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition"></div>
          </div>

          {/* Text Inhalt */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#001845]">
              Tradition & Leidenschaft seit 2017
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Alemannia Essen 2017 e.V. steht für Zusammenhalt, Leidenschaft und sportliche Entwicklung.
              Unser Verein bietet Kindern, Jugendlichen und Erwachsenen eine sportliche Heimat – geprägt
              von Teamgeist, Respekt und Engagement.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Seit unserer Gründung setzen wir auf nachhaltige Jugendarbeit, moderne Trainingsmethoden
              und ein starkes Gemeinschaftsgefühl. Wir sind stolz auf unsere Mitglieder, Trainer und
              Ehrenamtlichen, die den Verein jeden Tag voranbringen.
            </p>
            
            <div className="pt-4 flex gap-4 text-[#001845] font-bold">
              <span className="flex items-center gap-2">✓ Teamgeist</span>
              <span className="flex items-center gap-2">✓ Respekt</span>
              <span className="flex items-center gap-2">✓ Engagement</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. UNSERE WERTE (Karten) */}
      <div className="bg-white py-20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001845]">Wofür wir stehen</h2>
            <p className="text-gray-600 mt-4">Die Säulen unseres Vereinslebens</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Karte 1 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-[#001845] group-hover:text-white transition-colors">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#001845]">Gemeinschaft</h3>
              <p className="text-gray-600">
                Fairplay und Respekt stehen bei uns an erster Stelle. Wir gewinnen zusammen und wir verlieren zusammen.
              </p>
            </div>

            {/* Karte 2 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-[#001845] group-hover:text-white transition-colors">
                ⚽
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#001845]">Leidenschaft</h3>
              <p className="text-gray-600">
                Fussball ist unser Antrieb. Wir fördern Talente und bieten modernen Fussball für jede Altersklasse.
              </p>
            </div>

            {/* Karte 3 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-[#001845] group-hover:text-white transition-colors">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#001845]">Zukunft</h3>
              <p className="text-gray-600">
                Mit Fokus auf Jugendarbeit bauen wir das Fundament für die kommenden Jahre.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CALL TO ACTION (Link zur Kontaktseite) */}
      <div className="bg-[#001845] text-white py-20 px-6 text-center relative overflow-hidden">
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Werde Teil des Teams!
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Egal ob als Spieler, Trainer, Sponsor oder Fan – bei Alemannia Essen ist immer Platz für motivierte Menschen.
            Du hast Fragen oder möchtest ein Probetraining vereinbaren?
          </p>
          
          <div className="pt-6">
            {/* WICHTIG: Hier steht jetzt "/kontakt", passend zu deiner App.js */}
            <Link 
              to="/kontakt" 
              className="inline-block bg-white text-[#001845] text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-50 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              Jetzt Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}