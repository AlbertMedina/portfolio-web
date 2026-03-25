import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";

import styles from "./Nav.module.css";

export default function Nav() {
  const { t } = useTranslation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.about}>
        <p className={styles.name}>
          {isSmallScreen ? "Albert" : "Albert Medina Cucurull"}
        </p>
        <p className={styles.role}>
          {isSmallScreen ? t("nav.headline-short") : t("nav.headline")}
        </p>
      </div>
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.home")}</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.about")}</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.projects")}</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.resume")}</span>
        </NavLink>
      </nav>
    </div>
  );
}
