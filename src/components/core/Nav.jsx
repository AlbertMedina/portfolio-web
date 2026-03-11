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
