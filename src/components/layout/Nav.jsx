import { NavLink } from "react-router";
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
      <nav className={styles.nav}>
        <NavLink to="/">{t("nav.home")}</NavLink>
        <NavLink to="/about">{t("nav.about")}</NavLink>
        <NavLink to="/projects">{t("nav.projects")}</NavLink>
      </nav>
    </div>
  );
}
