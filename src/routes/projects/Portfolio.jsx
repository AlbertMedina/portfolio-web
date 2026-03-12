import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/portfolio/logo.webp";
import image1 from "../../assets/images/projects/portfolio/image-1.webp";
import image2 from "../../assets/images/projects/portfolio/image-2.webp";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Portfolio Logo" />
            <div className={styles.titleText}>
              <h1>{t("projects.portfolio.title")}</h1>
              <h2>{t("projects.portfolio.years")}</h2>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AlbertMedina/portfolio-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.portfolio.title")} />
          <div className={styles.text}>
            <p>{t("projects.portfolio.text-1")}</p>
            <p>{t("projects.portfolio.text-2")}</p>
            <p>{t("projects.portfolio.text-3")}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={image2} alt={t("projects.portfolio.title")} />
        </div>
      </div>
    </section>
  );
}
