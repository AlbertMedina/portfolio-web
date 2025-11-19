import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <footer className="footer">
          <p>
            Copyright © {new Date().getFullYear()} - {t("footer.rights")}
          </p>
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
        </footer>
      );
}