import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/portfolio-marketing/logo.webp";
import image1 from "../../assets/images/projects/portfolio-marketing/image-1.webp";
import image2 from "../../assets/images/projects/portfolio-marketing/image-2.webp";

export default function PortfolioMarketing() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <img src={logo} alt={t("projects.portfolio-marketing.title")} />
            <div>
              <h1 className={styles.title}>
                {t("projects.portfolio-marketing.title")}
              </h1>
              <p className={styles.timeline}>
                {t("projects.portfolio-marketing.years")}
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://www.laiapiqueras.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.portfolio-marketing.website-button")}
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.portfolio-marketing.title")} />
          <div className={styles.text}>
            <p>{t("projects.portfolio-marketing.text-1")}</p>
            <p>{t("projects.portfolio-marketing.text-2")}</p>
            <p>{t("projects.portfolio-marketing.text-3")}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={image2} alt={t("projects.portfolio-marketing.title")} />
        </div>
      </div>
    </section>
  );
}
