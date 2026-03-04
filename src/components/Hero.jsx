import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#001845]">
      
      

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl pt-8">
        
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/Logo.jpeg" 
            alt="Alemannia Essen Logo" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl border-2 border-white/20 rounded-full"
          />
        </div>

        {/* Titel & Text */}
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-2">
          Alemannia <span className="text-blue-500">Essen</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 font-medium opacity-90">
          Tradition. Leidenschaft. Zukunft.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* GEÄNDERT: Link führt jetzt zur Übersicht aller Teams */}
          <Link 
            to="/teams" 
            className="w-full sm:w-auto bg-white text-[#001845] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-center"
          >
            Mannschaften
          </Link>
          <Link 
            to="/mitglied" 
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition shadow-lg text-center"
          >
            Mitglied werden
          </Link>
        </div>

        {/* --- DIE STATISTIKEN --- */}
        <div className="flex justify-center gap-8 md:gap-16 text-white/70 text-7px] md:text-xs font-bold uppercase tracking-[0.2em] border-t border-white/10 ">
          <div className="flex flex-col">
            <span className="text-white text-2xl md:text-3xl font-black mb-1">2017</span>
            Gegründet
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl md:text-3xl font-black mb-1">7+</span>
            Teams
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl md:text-3xl font-black mb-1">400+</span>
            Mitglieder
          </div>
        </div>

      </div>
    </section>
  );
}