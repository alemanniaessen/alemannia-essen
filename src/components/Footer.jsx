import { Link } from "react-router-dom";

// --- ICONS ---
const IconFacebook = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;

const IconInsta = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconTiktok = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-2.91 6.31-1.48 1.18-3.3 1.76-5.22 1.56-3.23-.33-5.75-2.92-5.93-6.16-.16-2.98 1.83-5.63 4.7-6.38 1.34-.35 2.79-.16 4.02.44v4.03c-.45-.25-.97-.37-1.48-.37-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9 1.42 0 2.62-1.01 2.86-2.42.06-.33.06-.66.06-.99V.02z"/></svg>;
const IconMapPin = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
const IconMail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;

export default function Footer() {
  
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#000d26] text-gray-300 py-10 mt-20 border-t-4 border-blue-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 1. LOGO & INFO */}
        <div className="space-y-4">
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 group">
            <img src="/Logo.jpeg" alt="Logo" className="h-12 w-12 rounded-full border-2 border-transparent group-hover:border-blue-500 transition" />
            <span className="font-extrabold text-2xl uppercase tracking-tighter text-white">
              Alemannia <span className="text-blue-500">Essen</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Tradition, Leidenschaft und Gemeinschaft im Herzen von Essen. 
            Seit 2017 die sportliche Heimat für Groß und Klein.
          </p>
          
          <div className="space-y-2 pt-1">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Haedenkampstraße+81,+45143+Essen" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-start gap-3 text-sm group hover:text-white transition"
            >
              <div className="mt-0.5 text-blue-500 group-hover:text-white transition"><IconMapPin /></div>
              <span>Haedenkampstraße 81<br />45143 Essen</span>
            </a>

            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alemanniaessen@gmail.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 text-sm group hover:text-white transition"
            >
              <div className="text-blue-500 group-hover:text-white transition"><IconMail /></div>
              <span>alemanniaessen@gmail.com</span>
            </a>
          </div>
        </div>

        {/* 2. NAVIGATION */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest border-b border-blue-900 pb-2 inline-block">
            Verein
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            <li><Link to="/about" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Über uns</Link></li>
            <li><Link to="/news" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Neuigkeiten</Link></li>
            <li><Link to="/vorstand" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Vorstand</Link></li>
            <li><Link to="/teams" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Mannschaften</Link></li>
            <li><Link to="/mitglied" onClick={handleLinkClick} className="text-blue-400 hover:text-white hover:translate-x-2 transition-all duration-300 block">Mitglied werden →</Link></li>
          </ul>
        </div>

        {/* 3. RECHTLICHES */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest border-b border-blue-900 pb-2 inline-block">
            Info & Recht
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            <li><Link to="/kontakt" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Kontakt</Link></li>
            <li><Link to="/impressum" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Impressum</Link></li>
            <li><Link to="/datenschutz" onClick={handleLinkClick} className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Datenschutz</Link></li>
            <li><a href="https://www.fupa.net/club/alemannia-essen/teams" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">FuPa Profil</a></li>
            <li><a href="https://www.fussball.de/verein/alemannia-essen-niederrhein/-/id/00ES8GN914000007VV0AG08LVUPGND5I#!/" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">Fussball.de</a></li>
          </ul>
        </div>

        {/* 4. SOCIAL MEDIA */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest border-b border-blue-900 pb-2 inline-block">
            Folge uns
          </h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/AlemanniaEssen2017" target="_blank" rel="noreferrer" 
               className="bg-gray-800 p-3 rounded-lg hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/alemanniaessen/" target="_blank" rel="noreferrer" 
               className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <IconInsta />
            </a>
            {/* HIER WIRD ICONTIKTOK JETZT GENUTZT */}
            <a href="https://www.tiktok.com/@alemanniaessen" target="_blank" rel="noreferrer" 
               className="bg-gray-800 p-3 rounded-lg hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <IconTiktok />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
        <div>
          © {new Date().getFullYear()} Alemannia Essen 2017 e.V.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-gray-400 transition">Design by Samer Kouki</span>
          <span className="text-blue-900">|</span>
          <span className="font-bold text-blue-800">Nur der SCA!</span>
        </div>
      </div>
    </footer>
  );
}