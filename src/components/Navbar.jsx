import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Für das Mannschaften-Dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Schließt das Dropdown, wenn man außerhalb klickt
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- NEU: Diese Funktion wird bei JEDEM Klick aufgerufen ---
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrollt sofort nach oben
    setOpen(false);        // Schließt Desktop Dropdown
    setMobileMenuOpen(false); // Schließt Mobile Menü
  };

  // Standard-Klasse für Navigations-Links
  const linkClass = "px-3 py-2 rounded-md text-sm font-bold hover:bg-blue-900 transition cursor-pointer";

  return (
    <nav className="bg-[#001845] text-white sticky top-0 z-[100] shadow-xl font-sans border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition group" onClick={handleLinkClick}>
              <img 
                src="/Logo.jpeg" 
                alt="Logo" 
                className="h-12 w-12 rounded-full border-2 border-white/20 group-hover:border-blue-400 transition" 
              />
              <span className="font-black text-xl tracking-tighter uppercase">
                Alemannia <span className="text-blue-400">Essen</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={linkClass} onClick={handleLinkClick}>Startseite</Link>
            
            <Link to="/about" className={linkClass} onClick={handleLinkClick}>Über uns</Link>
            
            <Link to="/vorstand" className={linkClass} onClick={handleLinkClick}>Vorstand</Link>

            {/* MANNSCHAFTEN (Dropdown) */}
            <div 
              className="relative flex items-center" 
              ref={dropdownRef}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link to="/teams" className={`${linkClass} rounded-r-none`} onClick={handleLinkClick}>
                Mannschaften
              </Link>
              <button className="pr-2 py-2 rounded-r-md hover:bg-blue-900 transition text-blue-300">
                <svg className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Dropdown Menü */}
              {open && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl py-2 text-gray-900 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  <Link to="/teams" className="block px-4 py-3 bg-blue-50 text-blue-800 font-bold border-b border-gray-100" onClick={handleLinkClick}>
                    Alle Teams anzeigen
                  </Link>
                  <Link to="/teams/erste" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 font-medium transition" onClick={handleLinkClick}>
                    1. Mannschaft
                  </Link>
                  <Link to="/teams/zweite" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 font-medium transition" onClick={handleLinkClick}>
                    2. Mannschaft
                  </Link>
                  <Link to="/teams/c-jugend" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 font-medium transition" onClick={handleLinkClick}>
                    C-Jugend
                  </Link>
                </div>
              )}
            </div>

            <Link to="/news" className={linkClass} onClick={handleLinkClick}>News</Link>
            <Link to="/sponsors" className={`${linkClass} text-yellow-400 hover:text-yellow-300`} onClick={handleLinkClick}>Sponsoren</Link>
            <Link to="/kontakt" className={linkClass} onClick={handleLinkClick}>Kontakt</Link>
            
            {/* MITGLIED WERDEN (Button) */}
            <Link to="/mitglied" onClick={handleLinkClick} className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition shadow-lg hover:shadow-blue-900/50 transform hover:-translate-y-0.5 whitespace-nowrap">
              Mitglied werden
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-white hover:bg-blue-900 rounded-md transition"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001845] border-t border-blue-800 pb-10 h-screen overflow-y-auto absolute w-full left-0 top-20">
          <div className="px-6 pt-6 space-y-4">
            <Link to="/" className="block text-lg py-2 border-b border-blue-900/50 font-bold" onClick={handleLinkClick}>Startseite</Link>
            <Link to="/about" className="block text-lg py-2 border-b border-blue-900/50 font-bold" onClick={handleLinkClick}>Über uns</Link>
            <Link to="/vorstand" className="block text-lg py-2 border-b border-blue-900/50 font-bold" onClick={handleLinkClick}>Vorstand</Link>
            
            {/* Mobile Mannschaften Sub-Menü */}
            <div className="py-2 border-b border-blue-900/50">
              <div className="flex justify-between items-center mb-3">
                <Link to="/teams" className="font-bold text-lg" onClick={handleLinkClick}>Mannschaften</Link>
              </div>
              <div className="pl-4 space-y-3 text-blue-200 text-base">
                <Link to="/teams/erste" className="block hover:text-white" onClick={handleLinkClick}>→ 1. Mannschaft</Link>
                <Link to="/teams/zweite" className="block hover:text-white" onClick={handleLinkClick}>→ 2. Mannschaft</Link>
                <Link to="/teams/c-jugend" className="block hover:text-white" onClick={handleLinkClick}>→ C-Jugend</Link>
              </div>
            </div>

            <Link to="/news" className="block text-lg py-2 border-b border-blue-900/50 font-bold" onClick={handleLinkClick}>News</Link>
            <Link to="/sponsors" className="block text-lg py-2 border-b border-blue-900/50 font-bold text-yellow-400" onClick={handleLinkClick}>Sponsoren</Link>
            <Link to="/kontakt" className="block text-lg py-2 border-b border-blue-900/50 font-bold" onClick={handleLinkClick}>Kontakt</Link>
            
            <div className="pt-6">
              <Link to="/mitglied" className="block text-center bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-xl shadow-lg transition" onClick={handleLinkClick}>
                Jetzt Mitglied werden
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}