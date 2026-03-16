import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
      pageContent.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
