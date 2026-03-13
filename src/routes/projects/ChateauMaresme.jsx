import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/chateau/logo.webp";
import image1 from "../../assets/images/projects/chateau/image-1.webp";
import image2 from "../../assets/images/projects/chateau/image-2.webp";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Logo" />
            <div className={styles.titleText}>
              <h1>{t("projects.chateau.title")}</h1>
              <h2>{t("projects.chateau.years")}</h2>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AlbertMedina/chateau-maresme"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://chateau-maresme-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website (Netlify)
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.portfolio.title")} />
          <div className={styles.text}>
            <p>{t("projects.chateau.text-1")}</p>
            <p>{t("projects.chateau.text-2")}</p>
            <p>{t("projects.chateau.text-3")}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={image2} alt={t("projects.portfolio.title")} />
        </div>
      </div>
    </section>
  );
}
