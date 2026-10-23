import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./Nav.module.css";

const navLinks = [
  { path: "/", label: "nav.home" },
  { path: "/about", label: "nav.about" },
  { path: "/projects", label: "nav.projects" },
  { path: "/resume", label: "nav.resume" },
];

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
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <span>{t(label)}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
