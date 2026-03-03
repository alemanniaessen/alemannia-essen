import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // <--- WICHTIG: Hier importieren

import Home from "./pages/Home";
import About from "./pages/About";
import Vorstand from "./pages/Vorstand";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function App() {
  return (
    <Router>
      {/* ScrollToTop muss innerhalb des Routers, aber außerhalb von Routes stehen */}
      <ScrollToTop /> 
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vorstand" element={<Vorstand />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:team" element={<TeamDetail />} />
        
        {/* --- NEWS ROUTEN --- */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/mitglied" element={<Membership />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;