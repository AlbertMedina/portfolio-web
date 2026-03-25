import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/chateau/logo.webp";
import image1 from "../../assets/images/projects/chateau/image-1.webp";
import image2 from "../../assets/images/projects/chateau/image-2.webp";

export default function ChateauMaresme() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <img src={logo} alt={t("projects.chateau.title")} />
            <div>
              <h1 className={styles.title}>{t("projects.chateau.title")}</h1>
              <p className={styles.timeline}>{t("projects.chateau.years")}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AlbertMedina/chateau-maresme"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.chateau.github-button")}
            </a>
            <a
              href="https://chateau-maresme-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.chateau.website-button")}
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.chateau.title")} />
          <div className={styles.text}>
            <p>{t("projects.chateau.text-1")}</p>
            <p>{t("projects.chateau.text-2")}</p>
            <p>{t("projects.chateau.text-3")}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={image2} alt={t("projects.chateau.title")} />
        </div>
      </div>
    </section>
  );
}
