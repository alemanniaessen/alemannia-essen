import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Springt bei jedem Pfad-Wechsel an die Position 0, 0 (ganz oben links)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}