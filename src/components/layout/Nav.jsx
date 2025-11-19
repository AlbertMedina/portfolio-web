import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function Nav() {
    const { t } = useTranslation();
    return (
      <nav className="nav">
        <NavLink to="/">{t("nav.aboutMe")}</NavLink>
        <NavLink to="/experience">{t("nav.experience")}</NavLink>
      </nav>
    );
  }
  