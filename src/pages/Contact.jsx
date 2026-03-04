import React, { useState } from "react";

// --- ICONS ---
const IconMap = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
const IconMail = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const IconPhone = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
const IconInsta = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const IconFacebook = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
const IconWhatsApp = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>;

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sende...");

    const formData = new FormData(event.target);
    // Dein neuer Access Key:
    formData.append("access_key", "f54ad900-985b-455c-a5db-b17c8cd70675");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset(); // Formular nach Erfolg leeren
      } else {
        console.log("Error", data);
        setStatus("error");
        alert("Fehler: " + data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      alert("Ein Fehler ist aufgetreten.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* HEADER */}
      <div className="bg-[#001845] py-16 text-center text-white mb-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          Kontakt
        </h1>
        <p className="text-blue-200 mt-2 text-lg">
          Wir freuen uns, von dir zu hören!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ---------------- LINKES SPALTE ---------------- */}
        <div className="space-y-8">
          
          {/* Social Media Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-[#001845] mb-6">Direkt vernetzen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <a href="https://wa.me" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition shadow-sm border border-green-100">
                <IconWhatsApp /> 
                <span className="font-bold mt-2">WhatsApp</span>
              </a>

              <a href="https://www.instagram.com/alemanniaessen/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl bg-pink-50 text-pink-600 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white transition shadow-sm border border-pink-100">
                <IconInsta />
                <span className="font-bold mt-2">Instagram</span>
              </a>

              <a href="https://www.facebook.com/AlemanniaEssen2017" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white transition shadow-sm border border-blue-100">
                <IconFacebook />
                <span className="font-bold mt-2">Facebook</span>
              </a>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#001845] mb-6">Nachricht senden</h2>
            
            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Dein Name</label>
                <input 
                  type="text" name="name" required 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Deine E-Mail</label>
                <input 
                  type="email" name="email" required 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="max@beispiel.de"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Betreff</label>
                <select 
                  name="subject" required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Probetraining">Anfrage Probetraining</option>
                  <option value="Mitgliedschaft">Frage zur Mitgliedschaft</option>
                  <option value="Sponsoring">Sponsoring / Partner</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1 text-sm">Nachricht</label>
                <textarea 
                  name="message" required rows="4" 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="Hallo, ich würde gerne..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#001845] hover:bg-blue-800 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {status === "Sende..." ? "Wird gesendet..." : "Nachricht absenden"}
              </button>
            </form>
          </div>
        </div>

        {/* ---------------- RECHTE SPALTE ---------------- */}
<div className="flex flex-col h-full space-y-8">
  <div className="bg-white rounded-2xl shadow-lg p-8 flex-shrink-0">
    <h3 className="text-xl font-bold text-[#001845] mb-6 border-b pb-2">Hier findest du uns</h3>
    <div className="space-y-6">
      
      {/* ADRESSE KORRIGIERT */}
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><IconMap /></div>
        <div>
          <p className="font-bold text-gray-800 text-lg">Sportanlage Alemannia Essen</p>
          <p className="text-gray-600">Haedenkampstraße 81</p>
          <p className="text-gray-600">45143 Essen</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><IconMail /></div>
        <div>
          <p className="font-bold text-gray-800 text-lg">E-Mail</p>
          <a 
            href="mailto:alemanniaessen@gmail.com" 
            className="text-blue-600 hover:underline font-medium"
          >
            alemanniaessen@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><IconPhone /></div>
        <div>
          <p className="font-bold text-gray-800 text-lg">Telefon</p>
          <p className="text-gray-600">Hier Nummer eintragen</p>
        </div>
      </div>
    </div>
  </div>

  {/* GOOGLE MAPS - Achte darauf, die URL in src durch einen echten Google Maps Embed Link zu ersetzen */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white flex-grow min-h-[400px]">
    <iframe 
      title="Vereinsgelände Karte"
      width="100%" 
      height="100%" 
      style={{ border: 0, minHeight: "400px" }} 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.467471633539!2d6.985652576974136!3d51.46571581395561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2c06180356b%3A0x6b876483561a3f62!2sHaedenkampstra%C3%9Fe%2081%2C%2045143%20Essen!5e0!3m2!1sde!2sde!4v1700000000000"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>
      </div>
    </div>
  );
}