import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TeamDetail() {
  const { team } = useParams();
  const [activeTab, setActiveTab] = useState("kader");
  const [playerPerformance, setPlayerPerformance] = useState({});

  // --- DATEN ---
  const daten = {
    "erste": {
      name: "1. Mannschaft",
      liga: "Kreisliga A",
      teamBild: "/erste18.JPG", 
      trainingsort: "Sportanlage Alemannia Essen ",
      trainingszeiten: [
        { tag: "Mittwoch", zeit: "19:30 - 21:30 Uhr" },
        { tag: "Freitag", zeit: "19:30 - 21:30 Uhr" },
      ],
      spieler: [
        { name: "Samer Kouki", vorname: "Samer", nachname: "Kouki", position: "Torwart", nummer: 31, bild: "/samer.png" },
        { name: "Erbay Aslan", vorname: "Erbay", nachname: "Aslan", position: "Torwart", nummer: 16, bild: "/erste9.JPG" },
        { name: "Dogukaan Yapar", vorname: "Dogukaan", nachname: "Yapar", position: "Torwart", nummer: 1, bild: "/erste8.JPG" },
        { name: "Enes Rusan Carkci", vorname: "Enes", nachname: "Carkci", position: "Abwehr", nummer: 3, bild: "/erste12.JPG" },
        { name: "Maximilian Danquah", vorname: "Maximilian", nachname: "Danquah", position: "Abwehr", nummer: 18, bild: "/erste20.JPG" },
        { name: "Bekir Durmus", vorname: "Bekir", nachname: "Durmus", position: "Abwehr", nummer: 29, bild: "/erste21.JPG" },
        { name: "Genart Ferizi", vorname: "Genart", nachname: "Ferizi", position: "Abwehr", nummer: 79, bild: "/erste22.JPG" },
        { name: "Can Hotoglu", vorname: "Can", nachname: "Hotoglu", position: "Abwehr", nummer: 17, bild: "/erste4.JPG" },
        { name: "Emir Jasikovic", vorname: "Emir", nachname: "Jasikovic", position: "Abwehr", nummer: 94, bild: "/erste6.JPG" },
        { name: "Mehmet Öztürk", vorname: "Mehmet", nachname: "Öztürk", position: "Abwehr", nummer: 21, bild: "/erste10.JPG" },
        { name: "Oumar Touray Toure", vorname: "Oumar", nachname: "Touray Toure", position: "Abwehr", nummer: 2, bild: "/erste13.JPG" },
        { name: "Melih Turan", vorname: "Melih", nachname: "Turan", position: "Abwehr", nummer: 4, bild: "/erste19.JPG" },
        { name: "Ali Assist", vorname: "Ali", nachname: "Assist", position: "Mittelfeld", nummer: 80, bild: "/erste26.JPG" },
        { name: "Abou Touray", vorname: "Abou", nachname: "Touray", position: "Mittelfeld", nummer: 70, bild: "/erste1.JPG" },
        { name: "Kagola Traore", vorname: "Kagola", nachname: "Traore", position: "Mittelfeld", nummer: 7, bild: "/erste10.JPG" },
        { name: "Sam Sturm", vorname: "Sam", nachname: "Sturm", position: "Mittelfeld", nummer: 19, bild: "/erste14.JPG" },
        { name: "Jan Joker", vorname: "Jan", nachname: "Joker", position: "Mittelfeld", nummer: 23, bild: "/erste15.JPG" },
        { name: "Nick Netz", vorname: "Nick", nachname: "Netz", position: "Mittelfeld", nummer: 10, bild: "/erste17.JPG" },
        { name: "Tom Treffer", vorname: "Tom", nachname: "Treffer", position: "Mittelfeld", nummer: 61, bild: "/erste23.JPG" },
        { name: "Paul Power", vorname: "Paul", nachname: "Power", position: "Mittelfeld", nummer: 99, bild: "/erste29.JPG" },
        { name: "Abou Touray", vorname: "Abou", nachname: "Touray", position: "Mittelfeld", nummer: 11, bild: "/erste1.JPG" },
        { name: "Kagola Traore", vorname: "Kagola", nachname: "Traore", position: "Angriff", nummer: 24, bild: "/erste10.JPG" },
        { name: "Sam Sturm", vorname: "Sam", nachname: "Sturm", position: "Angriff", nummer: 77, bild: "/erste14.JPG" },
        { name: "Jan Joker", vorname: "Jan", nachname: "Joker", position: "Angriff", nummer: 27, bild: "/erste15.JPG" },
        { name: "Nick Netz", vorname: "Nick", nachname: "Netz", position: "Angriff", nummer: 8, bild: "/erste17.JPG" },
        { name: "Tom Treffer", vorname: "Tom", nachname: "Treffer", position: "Angriff", nummer: 66, bild: "/erste23.JPG" },
        { name: "Paul Power", vorname: "Paul", nachname: "Power", position: "Angriff", nummer: 9, bild: "/erste29.JPG" },
      ],
      trainer: [
        { name: "Serhat Hakan", rolle: "trainer", bild: "/erste5.JPG" },
        { name: "Recep Aker", rolle: "Co-Trainer", bild: "/erste28.JPG" },
        { name: "Bekir Kabacan", rolle: "Torwart-Trainer", bild: "/erste9.JPG" },
        { name: "Nikola Lazic", rolle: "Physiotherapeut", bild: "/erste25.JPG" },
        { name: "Fatih Kabuk", rolle: "Sportlicher Leiter", bild: "/erste9.JPG" },
      ]
    },
    "zweite": {
      name: "2. Mannschaft",
      liga: "Kreisliga B",
      teamBild: "/erste19.JPG", 
      trainingsort: "Sportanlage Alemannia Essen ",
      trainingszeiten: [
        { tag: "Mittwoch", zeit: "19:30 - 21:30 Uhr" },
        { tag: "Freitag", zeit: "19:30 - 21:30 Uhr" },
      ],
      spieler: [], // Hier Spieler einfügen wenn nötig
      trainer: []
    }
  };

  const info = daten[team] || daten["erste"];

  // --- API SIMULATION ---
  useEffect(() => {
    if (team === "erste" || !team) {
      const mockApiStats = {
        "Kevin Keeper": { spiele: 15, tore: 0 },
        // ... (restliche Stats)
      };
      setPlayerPerformance(mockApiStats);
    } else {
        setPlayerPerformance({});
    }
  }, [team]);

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24 font-sans">
      
      {/* 1. HERO AREA */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-[#001845]">
        <img src={info.teamBild} className="w-full h-full object-cover opacity-60" alt="Team Hintergrund" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic text-center">{info.name}</h1>
          <p className="text-blue-400 font-bold tracking-[0.3em] uppercase">{info.liga}</p>
        </div>
      </div>

      {/* 2. TABS */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b flex justify-center gap-10">
        {["kader", "tabelle", "spielplan"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`py-5 text-xs font-black uppercase tracking-widest ${activeTab === tab ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-400"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* 3. CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        
        {/* === KADER ANSICHT === */}
        {activeTab === "kader" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* TRAININGS INFO BOX */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-blue-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-3 h-full bg-blue-600"></div>
               <div className="flex flex-col md:flex-row gap-12 pl-4">
                  <div className="flex-1">
                      <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">Trainingsort</h3>
                      <div className="flex items-start gap-3">
                          <span className="text-2xl mt-1">📍</span>
                          <div>
                             <p className="text-2xl font-black text-[#001845] leading-tight">{info.trainingsort}</p>
                             <a href="https://maps.google.com/maps?q=Haedenkampstra%C3%9Fe%2081%2C%2045143%20Essen&t=m&z=15&output=embed&iwloc=near" target="_blank" rel="noreferrer" className="text-blue-500 text-sm font-bold hover:underline mt-1 inline-block">Route planen →</a>
                          </div>
                      </div>
                  </div>
                  <div className="hidden md:block w-[1px] bg-gray-100"></div>
                  <div className="flex-1">
                      <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">Trainingszeiten</h3>
                      <ul className="space-y-3">
                          {info.trainingszeiten.map((z, idx) => (
                             <li key={idx} className="flex items-center gap-3">
                                <span className="text-blue-600 font-bold text-lg">🕒</span>
                                <span className="font-bold text-slate-700 text-lg">
                                     {z.tag}: <span className="text-[#001845]">{z.zeit}</span>
                                </span>
                             </li>
                          ))}
                      </ul>
                  </div>
               </div>
            </div>

            {/* TRAINER TEAM */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-black text-[#001845] uppercase tracking-tighter italic">Trainer & Staff</h2>
                <div className="h-1 bg-blue-600 flex-grow rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {info.trainer.map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center group hover:shadow-lg transition">
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-[#001845] font-bold border-2 border-blue-50 overflow-hidden relative">
                      {t.bild ? (
                        <img src={t.bild} className="w-full h-full object-cover" alt={t.name} />
                      ) : (
                        <span>?</span>
                      )}
                    </div>
                    <h4 className="font-black text-[#001845] uppercase text-sm leading-tight">{t.name}</h4>
                    <p className="text-blue-500 text-[10px] font-bold uppercase mt-1">{t.rolle}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SPIELER NACH POSITIONEN */}
            {["Torwart", "Abwehr", "Mittelfeld", "Angriff"].map(pos => (
              <section key={pos}>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-black text-[#001845] uppercase tracking-tighter italic">{pos}</h2>
                  <div className="h-[1px] bg-gray-200 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {info.spieler.filter(p => p.position === pos).map((p, i) => {
                    const performance = playerPerformance[p.name] || { spiele: "?", tore: "?" };
                    const combinedPlayer = { ...p, ...performance };
                    return <PlayerCard key={i} player={combinedPlayer} />;
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* === TABELLEN ANSICHT === */}
        {activeTab === "tabelle" && (
           <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-300 min-h-[500px]">
             <InternalTabelle />
           </div>
        )}

        {/* === SPIELPLAN ANSICHT === */}
        {activeTab === "spielplan" && (
           <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-300 min-h-[500px]">
             <InternalSpielplan />
           </div>
        )}

      </div>
    </div>
  );
}

// --- PLAYER CARD COMPONENT ---
function PlayerCard({ player }) {
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 relative">
      <div className="h-80 bg-slate-100 overflow-hidden relative">
        <div className="absolute top-4 left-6 text-6xl font-black text-white/30 z-10 group-hover:text-blue-600/20 transition-colors">
          #{player.nummer}
        </div>
        {player.bild ? (
          <img src={player.bild} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={player.name} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300 font-black text-4xl bg-gradient-to-br from-slate-100 to-slate-200 uppercase">
             {player.nachname[0]}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black text-[#001845] uppercase leading-none italic">
          <span className="text-blue-600 block text-xs not-italic tracking-widest mb-1">{player.position}</span>
          {player.vorname} <br/> {player.nachname}
        </h3>
        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-50">
          <div className="text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Spiele</p>
            <p className="font-black text-[#001845]">{player.spiele}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase text-blue-500">Tore</p>
            <p className="font-black text-blue-600">{player.tore}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- TABELLEN WIDGET ---
function InternalTabelle() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.fussball.de/widgets.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white shadow-lg border rounded-xl p-4 min-h-[600px]">
      <h3 className="text-2xl font-black text-[#001845] mb-6 uppercase text-center">
        Aktuelle Tabelle
      </h3>
      <div 
        className="fussballde_widget" 
        data-id="a30c6b98-ae94-4f2a-a6eb-423c265cb638" 
        data-type="table"
        style={{ width: "100%" }}
      ></div>
    </div>
  );
}

// --- SPIELPLAN WIDGET ---
function InternalSpielplan() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.fussball.de/widgets.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white shadow-lg border rounded-xl p-4 min-h-[600px]">
      <h3 className="text-2xl font-black text-[#001845] mb-6 uppercase text-center">
        Spielplan
      </h3>
      <div 
        className="fussballde_widget" 
        data-id="3879b81b-3fb3-4086-bc2b-749171bc4fdb" 
        data-type="team-matches" 
        style={{ width: "100%" }}
      ></div>
    </div>
  );
}