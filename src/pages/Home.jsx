import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SponsorBar from "../components/SponsorBar";

export default function Home() {
  
  // HIER SIND DEINE NEWS (Direkt im Code)
  const aktuelleNews = [
    {
      id: 4,
      titel: "Altendorf im Herzen: C-Jugend zu Gast im ImbiStanbul",
      kategorie: "Jugend",
      datum: "02.03.2026",
      bild: "/News_3.png",
      vorschau: "Ein Abend, der Mut macht: Unsere C-Jugend war bei Ismail abi im ImbiStanbul. Es ging um mehr als Fußball – es ging um Herkunft, Vorbilder und Zukunft."
    },
    {
      id: 3,
      titel: "Ein bisschen verspätet: Rückblick auf die Jugendfeier",
      kategorie: "Jugend",
      datum: "02.02.2026",
      bild: "/news_2.png",
      vorschau: "Besser spät als nie! Wir blicken zurück auf einen wunderbaren Abend unserer D- bis G-Junioren. Ein Fest voller Lachen, Gemeinschaft und Zusammenhalt."
    },
    {
      id: 2,
      titel: "Trikots für Ghana: Kobby als Brücke nach Accra",
      kategorie: "Vereinsleben",
      datum: "02.01.2026",
      bild: "/news_1.png",
      vorschau: "Unser Kobby war wieder in Ghana unterwegs und hatte eine Überraschung im Gepäck: Trikots für ein lokales Team. Eine tolle Aktion!"
    }
  ];

  return (
    <div className="w-full bg-white">
      <Hero />

      {/* ÜBER DEN VEREIN */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Willkommen</span>
        <h2 className="text-4xl font-black text-[#001845] mt-2 mb-6 uppercase">Über den Verein</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Alemannia Essen 2017 e.V. steht für Zusammenhalt, Leidenschaft und sportliche Entwicklung.
          Unser Verein bietet Kindern, Jugendlichen und Erwachsenen eine sportliche Heimat – geprägt
          von Teamgeist, Respekt und Engagement.
        </p>
      </section>

      {/* NEWS SEKTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#001845] uppercase">Aktuelle News</h2>
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </div>
            <Link to="/news" className="text-blue-600 font-bold hover:underline">
              Alle News anzeigen →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* HIER WERDEN DIE NEWS AUTOMATISCH ANGEZEIGT */}
            {aktuelleNews.map((news) => (
              <Link 
                key={news.id} 
                to={`/news/${news.id}`} 
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={news.bild} 
                    alt={news.titel} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  {/* Datum oben rechts im Bild */}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {news.datum}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-blue-600 text-xs font-bold uppercase mb-1">
                    {news.kategorie}
                  </span>
                  <h3 className="font-bold text-xl mt-2 mb-2 text-[#001845] line-clamp-2">
                    {news.titel}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3">
                    {news.vorschau}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <SponsorBar />
    </div>
  );
}