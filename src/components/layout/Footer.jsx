import { useTranslation } from "react-i18next";

import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>
        Copyright © {new Date().getFullYear()} - {t("footer.rights")}
      </p>
    </footer>
  );
}
