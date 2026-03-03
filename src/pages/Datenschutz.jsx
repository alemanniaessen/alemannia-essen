import React from 'react';

export default function Datenschutz() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* HEADER */}
      <div className="bg-[#001845] py-20 text-center text-white shadow-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider mb-4">
          Datenschutzerklärung
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-blue-200 mt-4 text-lg max-w-2xl mx-auto px-4">
          Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Hier erfährst du, wie wir deine Daten verarbeiten.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        
        {/* EINLEITUNG */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border-l-8 border-blue-600">
          <h2 className="text-2xl font-bold text-[#001845] mb-4">1. Datenschutz auf einen Blick</h2>
          <p className="text-gray-700 mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </div>

        {/* HAUPTINHALT */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          
          {/* Sektion 2 */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">2</span>
              Verantwortliche Stelle
            </h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200 font-medium text-gray-900">
              Alemannia Essen 2017 e.V.<br />
              Haedenkampstraße 81<br />
              45143 Essen<br />
              E-Mail: alemanniaessen@gmail.com
            </div>
          </section>

          {/* Sektion 3 - HOSTING (Netlify) */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">3</span>
              Hosting durch Netlify
            </h2>
            <p className="mb-4">
              Wir hosten unsere Website bei <strong>Netlify, Inc.</strong> (44 Montgomery Street, Suite 300, San Francisco, California 94104, USA).
            </p>
            <p className="mb-4">
              Wenn Sie unsere Website besuchen, erfasst Netlify verschiedene Logfiles inklusive Ihrer IP-Adressen. 
              Dies ist notwendig, um die Website darzustellen und deren Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Weitere Informationen zum Datenschutz von Netlify finden Sie hier: 
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-1">
                Netlify Datenschutzrichtlinie
              </a>.
            </p>
          </section>

          {/* Sektion 4 - DATENERFASSUNG & WEB3FORMS */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">4</span>
              Kontaktformular & E-Mail (Web3Forms)
            </h2>
            
            <h3 className="font-bold text-gray-900 mt-4">Kontaktformular via Web3Forms</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.
            </p>
            <p className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm">
              <strong>Wichtiger Hinweis:</strong> Wir nutzen für den Versand des Kontaktformulars den Dienst <strong>Web3Forms</strong>. 
              Die Daten, die Sie in das Formular eingeben, werden zur technischen Übermittlung an Web3Forms weitergeleitet und von dort per E-Mail an uns gesendet. 
              Dies erfolgt auf Grundlage unseres berechtigten Interesses an einer leichten Kontaktaufnahme (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="font-bold text-gray-900 mt-6">Anfragen per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          {/* Sektion 5 - RECHTE */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">5</span>
              Ihre Rechte
            </h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </section>

        </div>
        
        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-12 mb-4">
          Stand: März 2026
        </p>

      </div>
    </div>
  );
}