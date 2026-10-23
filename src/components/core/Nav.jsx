import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./Nav.module.css";

export default function Nav() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.about}>
        <p className={styles.name}>Albert Medina Cucurull</p>
        <p className={styles.role}>{t("nav.headline")}</p>
      </div>

      <button
        className={styles.navMenuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.home")}</span>
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleLinkClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.about")}</span>
        </NavLink>
        <NavLink
          to="/projects"
          onClick={handleLinkClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.projects")}</span>
        </NavLink>
        <NavLink
          to="/resume"
          onClick={handleLinkClick}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <span>{t("nav.resume")}</span>
        </NavLink>
      </nav>
    </div>
  );
}
