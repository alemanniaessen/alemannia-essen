import React from "react";
import { useParams, Link } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams(); // Holt sich die Nummer aus der URL

  // Wir brauchen hier dieselben Daten wie in News.jsx (normalerweise kommen die aus einer Datenbank)
  const newsBeitraege = [
    {
  id: 1,
  titel: "Alemannia Essen - NK Croatia 5:2 (3:0)",
  datum: "01.03.2026",
  kategorie: "1. Mannschaft",
  bild: "/news_4.png",
  text: `Von Beginn an zeigte Alemannia Essen, wer Herr im Hause ist. Die Mannschaft trat dominant auf, erspielte sich zahlreiche Torchancen und ließ defensiv kaum etwas zu. Der Führungstreffer war folgerichtig: Dominik Milaszewski brachte sein Team mit dem 1:0 verdient in Front. Nur wenig später erhöhte Shawn Simon auf 2:0 und unterstrich damit die spielerische Überlegenheit der Gastgeber.

  Kurz vor dem Pausenpfiff sorgte Osman Durmus mit dem 3:0 für eine komfortable Halbzeitführung, die Partie schien bereits früh entschieden.

  Direkt nach Wiederanpfiff machte Osman Durmus dort weiter, wo er aufgehört hatte. Mit einem sehenswerten Freistoßtreffer zum 4:0 schnürte er seinen Doppelpack und krönte seine starke Leistung zum Man of the Match. Doch die Gäste von Croatia Essen gaben sich nicht geschlagen. Vor allem die Nummer 10 der Gäste zeigte eine auffällige Leistung und brachte sein Team mit zwei Treffern zurück ins Spiel.

  Mit dem 1:4 und wenig später dem 2:4 keimte plötzlich Hoffnung auf und für einen Moment wurde es tatsächlich noch einmal spannend, als Croatia auf den Anschlusstreffer drängte.

  Alemannia Essen behielt jedoch die Kontrolle und ließ sich nicht aus der Ruhe bringen. Kurz vor Schluss war es schließlich der eingewechselte Kwabena Fobiri, der nach einer Standardsituation nach Vorarbeit von Bekir zum 5:2 einschob und damit endgültig alles klarmachte.

  Mit diesem verdienten Sieg feiert Alemannia Essen nicht nur einen starken Rückrundenstart, sondern rückt auch in der Tabelle näher heran. Nur noch drei Punkte beträgt der Rückstand auf Tabellenführer SV Eiberg. Alemannia ist damit wieder voll im Rennen.`,
    },
    {
  id: 2,
  titel: "Trikots für Ghana – Kobby: Die Brücke zwischen Altendorf und Accra",
  datum: "02.03.2026",
  kategorie: "Vereinsleben",
  bild: "/news_1.png",
  text: `Unser Kobby war auch dieses Jahr wieder in Ghana, um Familie und Menschen vor Ort zu unterstützen. Mit im Gepäck: Trikots für eine Mannschaft, die sich riesig darüber gefreut hat!

Ab sofort geht ein weiteres Team in den Regionen Accra und Sunyani (Chiraa) mit unserem Bären auf der Brust auf Punktejagd. 

Genau dafür steht Alemannia: verbinden, helfen, gemeinsam stark sein.

Danke, Kobby – schön, dass du wieder zuhause bist!`,
},
    {
  id: 3,
  titel: "Ein bisschen verspätet – aber dafür mit ganz viel Herz",
  datum: "02.03.2026",
  kategorie: "Jugend",
  bild: "/news_2.png",
  text: `Man sagt ja: Gute Momente darf man ruhig noch einmal feiern. Deshalb nehmen wir euch mit zurück zu einem ganz besonderen Abend unserer D-, E-, F- und G-Junioren.

Bei unserer Jahresabschlussfeier stand vor allem eines im Mittelpunkt: Spaß, Gemeinschaft und Zusammenhalt. Kinderlachen überall, stolze Eltern, engagierte Trainer – und mittendrin ganz viele Freunde und Familien, die diesen Abend zu etwas Besonderem gemacht haben.

Ob auf dem Boden sitzend, lachend, spielend oder einfach zusammen – man hat gespürt, wie wohl sich alle gefühlt haben. Genau so, wie Vereinsleben sein soll: offen, herzlich und voller Leben.

Ein großes Dankeschön geht an unsere Trainer, Betreuer und Eltern, die nicht nur an diesem Abend, sondern das ganze Jahr über für unsere Kinder da sind. Ohne euch wäre all das nicht möglich.

Auch wenn dieser Rückblick erst im neuen Jahr kommt – die Erinnerungen bleiben. Und sie zeigen: Unsere Jugend ist mehr als Fußball. Sie ist Freundschaft, Freude und ganz viel Familie.

Auf ein neues Jahr voller Lachen, Bewegung und gemeinsamer Momente.

#AlemanniaFamilie #JuniorenPower #MiniBären #GemeinsamStark #NeuesJahrAlteErinnerungen`,
},
    {
  id: 4,
  titel: "Altendorf im Herzen, Zukunft im Blick – Danke Ismail abi!",
  datum: "02.03.2026",
  kategorie: "Jugend",
  bild: "/News_3.png",
  text: `Manchmal reicht ein Abend, um Mut zu schenken; Altendorf im Herzen. Zukunft im Blick.

Manche Begegnungen bleiben. Nicht, weil sie laut sind – sondern weil sie ehrlich sind. Der Jahresabschluss unserer C-Jugend im ImbiStanbul war genau so ein Moment.

Ismail abi, Betreiber des ImbiStanbul, ist kein Fremder für diesen Stadtteil. Er ist ein Altendorfer Junge, aufgewachsen zwischen engen Straßen, schwierigen Verhältnissen und großen Herausforderungen. Ein Stadtteil, der viel fordert – aber auch viel prägt.

Heute ist Ismail ein erfolgreicher Gastronom. Doch egal, wohin ihn sein Weg geführt hat: Altendorf hat er nie vergessen. Seine Botschaft an unsere Jungs war klar und tief:
"Vergesst nicht, wo ihr herkommt. Glaubt an euch – auch wenn es schwer ist. Gebt dem Stadtteil eines Tages etwas zurück."

Gerade für Kinder und Jugendliche aus einem sozialen Brennpunkt sind solche Vorbilder unbezahlbar. Menschen, die zeigen, dass Herkunft kein Hindernis ist – sondern Antrieb sein kann.

Ein ganz besonderer Moment war der Dank unseres Mannschaftskapitäns: Mit sichtbarem Stolz überreichte er Ismail abi einen Alemannia Hoodie – ein Zeichen von Wertschätzung, Respekt und echter Verbundenheit.

Dieser Abend hat gezeigt, wofür wir als Verein stehen: Haltung. Herz. Verantwortung. Fußball ist bei uns nicht nur ein Spiel – er ist eine Chance.

Danke, Ismail abi, für deine Zeit, deine Worte und dein großes Herz für unsere Jugend. Altendorf lebt – durch Menschen wie dich.`,
}
  ];

  // Den richtigen Beitrag finden
  const beitrag = newsBeitraege.find(post => post.id === parseInt(id));

  if (!beitrag) return <div className="text-center mt-20">Beitrag nicht gefunden!</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Großes Bild */}
        <div className="h-64 md:h-96 bg-gray-300">
           <img src={beitrag.bild} alt={beitrag.titel} className="w-full h-full object-cover" />
        </div>

        <div className="p-8 md:p-12">
          <Link to="/news" className="text-gray-500 font-bold hover:text-blue-600 mb-6 block">
            ← Zurück zur Übersicht
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold">
                {beitrag.kategorie}
            </span>
            <span>{beitrag.datum}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#001845] mb-6">
            {beitrag.titel}
          </h1>

          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>{beitrag.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}