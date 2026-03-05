import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Nav.module.css";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.about}>
        <p className={styles.name}>Albert Medina Cucurull</p>
        <p>{t("about.header")}</p>
      </div>
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {t("nav.home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {t("nav.about")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {t("nav.projects")}
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {t("nav.resume")}
        </NavLink>
      </nav>
    </div>
  );
}
