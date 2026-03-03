import React from "react";
import { Link } from "react-router-dom";

// Icons
const IconCheck = () => <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>;
const IconDownload = () => <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>;

export default function Membership() {
  
  // PREISE (Hier kannst du deine echten Preise eintragen)
  const preise = [
    {
      titel: "Jugend",
      preis: "10,00 €",
      periode: "pro Monat",
      zielgruppe: "Kinder & Jugendliche bis 18 Jahre",
      features: ["Teilnahme am Spielbetrieb", "2-3x Training pro Woche", "Ausgebildete Trainer", "Versicherung inklusive"],
      empfohlen: false
    },
    {
      titel: "Senioren / Aktive",
      preis: "12,00 €",
      periode: "pro Monat",
      zielgruppe: "Erwachsene ab 18 Jahren",
      features: ["Teilnahme am Spielbetrieb", "Nutzung der Sportanlage", "Teilnahme an Vereinsevents", "Stimmrecht bei Versammlungen"],
      empfohlen: true // Das macht die Karte größer/hervorgehoben
    },
    {
      titel: "Passive Mitgliedschaft",
      preis: "5,00 €",
      periode: "pro Monat",
      zielgruppe: "Fans, Eltern & Unterstützer",
      features: ["Unterstützung des Vereins", "Einladung zu Feiern", "Stimmrecht bei Versammlungen", "Keine aktive Sportausübung"],
      empfohlen: false
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* HEADER */}
      <div className="bg-[#001845] py-20 text-center text-white mb-16 relative overflow-hidden">
        {/* Dekorativer Hintergrund */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-10 transform -skew-y-3"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
            Mitglied werden
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto px-4">
            Werde Teil der Alemannia-Familie. Egal ob auf dem Platz oder daneben – wir brauchen dich!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* 1. INTRO TEXT */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#001845] mb-6">Warum Alemannia Essen?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bei uns steht nicht nur der sportliche Erfolg im Vordergrund, sondern vor allem die Gemeinschaft. 
            Wir bieten Fußball für alle Altersklassen, ein reges Vereinsleben und eine Heimat im Essener Norden.
            Komm vorbei und überzeuge dich selbst!
          </p>
        </div>

        {/* 2. PREISTABELLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-center">
          {preise.map((p, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl p-8 border-t-8 transition transform hover:-translate-y-2 relative
                ${p.empfohlen ? "border-blue-600 scale-105 z-10 shadow-2xl" : "border-gray-200"}
              `}
            >
              {p.empfohlen && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Beliebt
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#001845] mb-2">{p.titel}</h3>
              <p className="text-gray-500 text-sm mb-6">{p.zielgruppe}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-[#001845]">{p.preis}</span>
                <span className="text-gray-500 ml-1">{p.periode}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm">
                    <IconCheck /> {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="/mitgliedsantrag.pdf" 
                download
                className={`block text-center w-full py-3 rounded-lg font-bold transition
                  ${p.empfohlen 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg" 
                    : "bg-gray-100 text-[#001845] hover:bg-gray-200"}
                `}
              >
                Jetzt Antrag laden
              </a>
            </div>
          ))}
        </div>

        {/* 3. DOWNLOAD BEREICH (Groß) */}
        <div className="bg-[#001845] rounded-3xl p-10 md:p-16 text-center text-white mb-20 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">So wirst du Mitglied</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-100 mb-10 max-w-4xl mx-auto">
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <span className="text-4xl font-black block mb-2 opacity-30">1</span>
              <h3 className="text-xl font-bold text-white mb-2">Antrag herunterladen</h3>
              <p className="text-sm">Lade dir das PDF-Formular herunter und drucke es aus.</p>
            </div>
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <span className="text-4xl font-black block mb-2 opacity-30">2</span>
              <h3 className="text-xl font-bold text-white mb-2">Ausfüllen</h3>
              <p className="text-sm">Fülle deine Daten aus und unterschreibe das SEPA-Mandat.</p>
            </div>
            <div className="bg-blue-900/50 p-6 rounded-xl">
              <span className="text-4xl font-black block mb-2 opacity-30">3</span>
              <h3 className="text-xl font-bold text-white mb-2">Abgeben</h3>
              <p className="text-sm">Gib den Antrag beim Trainer ab oder wirf ihn in den Vereinsbriefkasten.</p>
            </div>
          </div>
          
          <a 
            href="/mitgliedsantrag.pdf" 
            download
            className="inline-flex items-center bg-white text-[#001845] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition transform hover:scale-105 shadow-xl text-lg"
          >
            <IconDownload />
            Mitgliedsantrag herunterladen (PDF)
          </a>
        </div>

        {/* 4. FAQ (Häufige Fragen) */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#001845] mb-8 text-center">Häufige Fragen</h2>
          <div className="space-y-4">
            
            <FAQItem 
              frage="Kann ich erstmal ein Probetraining machen?" 
              antwort="Ja, absolut! Du kannst bis zu 3x kostenlos mittrainieren, bevor du dich entscheiden musst. Melde dich einfach über das Kontaktformular."
            />
            <FAQItem 
              frage="Wie sind die Kündigungsfristen?" 
              antwort="Die Mitgliedschaft kann immer zum 30.06. oder 31.12. eines Jahres gekündigt werden. Die Kündigung muss schriftlich erfolgen."
            />
            <FAQItem 
              frage="Gibt es Familienrabatte?" 
              antwort="Ja, ab dem 2. Kind gibt es einen ermäßigten Beitrag. Sprich uns dazu bitte persönlich an."
            />
            <FAQItem 
              frage="Bildung und Teilhabe?" 
              antwort="Wir akzeptieren Gutscheine aus dem Bildungs- und Teilhabepaket der Stadt Essen. Bring den Gutschein einfach mit zum Training."
            />

          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Noch Fragen offen?</p>
            <Link to="/kontakt" className="text-blue-600 font-bold hover:underline">
              Kontaktiere uns →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

// Kleine Hilfskomponente für die FAQ (Aufklappbar wäre cool, aber statisch ist einfacher und robuster)
function FAQItem({ frage, antwort }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
      <h3 className="font-bold text-lg text-[#001845] mb-2">{frage}</h3>
      <p className="text-gray-600">{antwort}</p>
    </div>
  );
}