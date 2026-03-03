import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  // ---------------------------------------------------------
  // DEINE NEWS DATEN (Jetzt mit echten Online-Bildern zum Testen)
  // ---------------------------------------------------------
  const newsBeitraege = [
    {
  id: 1,
  titel: "Rückrundenstart geglückt: 5:2 Sieg gegen NK Croatia",
  datum: "01.03.2026", 
  kategorie: "1. Mannschaft",
  // Ein echtes Bild aus dem Internet zum Testen
  bild: "/news_4.png",
  vorschau: "Dominanter Auftakt für Alemannia! Durch Tore von Milaszewski, Simon, Fobiri und einen Doppelpack von Osman Durmus (Man of the Match) schlagen wir Croatia mit 5:2. Damit sind es nur noch 3 Punkte bis zur Spitze!",
    },
    {
  id: 2,
  titel: "Trikots für Ghana: Kobby als Brücke nach Accra",
  datum: "02.03.2026",
  kategorie: "Vereinsleben",
  // Hier am besten das echte Foto von Kobby einfügen
  bild: "/news_1.png",
  vorschau: "Unser Kobby war wieder in Ghana unterwegs und hatte eine Überraschung im Gepäck: Trikots für ein lokales Team. Eine tolle Aktion, die Altendorf und Accra verbindet!",
},
    {
  id: 3,
  titel: "Ein bisschen verspätet: Rückblick auf die Jugendfeier",
  datum: "02.03.2026",
  kategorie: "Jugend",
  // Wichtig: Slash / statt Backslash \ für Webseiten-Pfade
  bild: "/news_2.png",
  vorschau: "Besser spät als nie! Wir blicken zurück auf einen wunderbaren Abend unserer D- bis G-Junioren. Ein Fest voller Lachen, Gemeinschaft und Zusammenhalt.",
},
    {
  id: 4,
  titel: "Altendorf im Herzen: C-Jugend zu Gast im ImbiStanbul",
  datum: "02.03.2026",
  kategorie: "Jugend",
  bild: "/News_3.png",
  vorschau: "Ein Abend, der Mut macht: Unsere C-Jugend war bei Ismail abi im ImbiStanbul. Es ging um mehr als Fußball – es ging um Herkunft, Vorbilder und Zukunft.",
}
  ];

  // LOGIK: Den ersten Beitrag abtrennen
  const highlightPost = newsBeitraege[0];
  const restlichePosts = newsBeitraege.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* HEADER */}
      <div className="bg-[#001845] py-16 text-center text-white mb-10">
        <h1 className="text-5xl font-bold uppercase tracking-wider">
          Aktuelles
        </h1>
        <p className="text-blue-200 mt-2">Neuigkeiten rund um den Verein</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* 1. HIGHLIGHT SECTION (Der große Artikel oben) */}
        {highlightPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#001845] mb-6 border-l-8 border-blue-500 pl-4">
              Top-Thema
            </h2>
            
            {/* Große Karte */}
            <Link 
              to={`/news/${highlightPost.id}`} 
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden md:flex hover:shadow-2xl transition duration-300"
            >
              {/* Bild links (groß) - Nimmt auf Desktop 2/3 der Breite ein */}
              <div className="md:w-2/3 h-64 md:h-96 relative overflow-hidden bg-gray-200">
                <img 
                  src={highlightPost.bild} 
                  alt={highlightPost.titel} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded uppercase shadow">
                  {highlightPost.kategorie}
                </span>
              </div>
              
              {/* Text rechts */}
              <div className="md:w-1/3 p-8 md:p-10 flex flex-col justify-center">
                <span className="text-gray-400 text-sm mb-2">{highlightPost.datum}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#001845] mb-4 leading-tight group-hover:text-blue-600 transition">
                  {highlightPost.titel}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {highlightPost.vorschau}
                </p>
                <span className="text-blue-600 font-bold uppercase tracking-wide group-hover:underline flex items-center gap-2">
                  Weiterlesen <span className="text-xl">→</span>
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* 2. GRID SECTION (Die restlichen Artikel) */}
        {restlichePosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#001845] mb-6 border-l-8 border-gray-300 pl-4">
              Weitere Neuigkeiten
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restlichePosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/news/${post.id}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col h-full"
                >
                  {/* Bild */}
                  <div className="h-48 overflow-hidden relative bg-gray-200">
                    <img 
                      src={post.bild} 
                      alt={post.titel} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 text-[#001845] px-2 py-1 text-xs font-bold rounded uppercase shadow-sm">
                      {post.kategorie}
                    </div>
                  </div>

                  {/* Inhalt */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-gray-400 text-xs mb-2">{post.datum}</span>
                    <h3 className="text-xl font-bold text-[#001845] mb-3 group-hover:text-blue-600 transition leading-tight">
                      {post.titel}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {post.vorschau}
                    </p>
                    <span className="text-blue-600 text-sm font-bold uppercase tracking-wide mt-auto flex items-center gap-1 group-hover:underline">
                      Mehr erfahren <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}