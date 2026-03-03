import React from 'react';

export default function Impressum() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* HEADER */}
      <div className="bg-[#001845] py-20 text-center text-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-4">
          Impressum
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-blue-200 mt-4 text-lg">
          Angaben gemäß § 5 TMG
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        
        {/* 1. KONTAKT KARTE */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border-t-4 border-blue-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Linke Spalte: Adresse */}
            <div>
              <h2 className="text-2xl font-bold text-[#001845] mb-4 flex items-center gap-2">
                <span className="text-3xl">🏢</span> Anschrift
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Alemannia Essen 2017 e.V.<br />
                Seumannstraße 123<br />
                45326 Essen<br />
                Deutschland
              </p>
            </div>

            {/* Rechte Spalte: Kontakt */}
            <div>
              <h2 className="text-2xl font-bold text-[#001845] mb-4 flex items-center gap-2">
                <span className="text-3xl">📞</span> Kontakt
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Telefon:</span> 0201 / 123 456 78<br />
                <span className="font-bold">E-Mail:</span> info@alemannia-essen.de<br />
                <span className="font-bold">Web:</span> www.alemannia-essen.de
              </p>
            </div>
          </div>
        </div>

        {/* 2. VERTRETUNG & REGISTER */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-[#001845] mb-6 border-b pb-2">Vereinsinformationen</h2>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold text-lg text-gray-900">Vertreten durch den Vorstand:</h3>
              <p>Max Mustermann (1. Vorsitzender)</p>
              <p>Sarah Beispiel (2. Vorsitzende)</p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900">Registereintrag:</h3>
              <p>Eintragung im Vereinsregister.</p>
              <p>Registergericht: Amtsgericht Essen</p>
              <p>Registernummer: VR 12345 {/* HIER DEINE NUMMER EINTRAGEN */}</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-gray-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
              <p>Max Mustermann</p>
              <p>Seumannstraße 123</p>
              <p>45326 Essen</p>
            </div>
          </div>
        </div>

        {/* 3. RECHTLICHE HINWEISE (Disclaimer) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#001845] mb-6 border-b pb-2">Haftungsausschluss (Disclaimer)</h2>
          
          <div className="space-y-6 text-gray-600 text-sm text-justify">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}