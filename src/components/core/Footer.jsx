import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

import githubLogo from "../../assets/images/logos/github-logo.webp";
import linkedinLogo from "../../assets/images/logos/linkedin-logo.webp";

export default function Footer() {
  const { i18n } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <a href="mailto:albertmecu@gmail.com" className={styles.mail}>
          albertmecu@gmail.com
        </a>

        <div className={styles.logos}>
          <a
            href="https://github.com/AlbertMedina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="Albert Medina Cucurull GitHub"
              width={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/albert-medina-cucurull/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="Albert Medina Cucurull LinkedIn"
              width={30}
            />
          </a>
        </div>
      </div>
      <form>
        <select
          className={styles.language}
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
