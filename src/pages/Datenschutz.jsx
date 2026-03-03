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
              Seumannstraße 123<br />
              45326 Essen<br />
              E-Mail: info@alemannia-essen.de
            </div>
          </section>

          {/* Sektion 3 */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">3</span>
              Datenerfassung auf unserer Website
            </h2>
            
            <h3 className="font-bold text-gray-900 mt-4">Server-Log-Dateien</h3>
            <p className="mb-2">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-600">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-bold text-gray-900 mt-6">Kontaktformular / E-Mail</h3>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          {/* Sektion 4 */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">4</span>
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten Daten zu erhalten.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Die Berichtigung oder Löschung dieser Daten zu verlangen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Die Einschränkung der Datenverarbeitung zu fordern.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</span>
              </li>
            </ul>
          </section>

          {/* Sektion 5 */}
          <section>
            <h2 className="text-xl font-bold text-[#001845] mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm">5</span>
              Hosting
            </h2>
            <p>
              Diese Seite wird bei einem externen Dienstleister gehostet (z.B. Vercel, Netlify oder Strato). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
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