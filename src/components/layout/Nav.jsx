import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

import "./Nav.css";

export default function Nav() {
  const { t, i18n } = useTranslation();
  return (
    <div className="header">
      <nav className="nav">
        <NavLink to="/">{t("nav.home")}</NavLink>
        <NavLink to="/about">{t("nav.about")}</NavLink>
        <NavLink to="/projects">{t("nav.projects")}</NavLink>
      </nav>
      <form>
        <select
          className="language-selector"
          id="language-selector"
          name="language-selector"
          value={i18n.language}
          onChange={(event) => {
            i18n.changeLanguage(event.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="ca">Català</option>
          <option value="es">Español</option>
        </select>
      </form>
    </div>
  );
}
