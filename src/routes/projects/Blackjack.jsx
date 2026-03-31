import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/blackjack/logo.webp";
import image1 from "../../assets/images/projects/blackjack/thumbnail.webp";
import image2 from "../../assets/images/projects/blackjack/image-2.webp";

export default function Blackjack() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <img src={logo} alt={t("projects.blackjack.title")} />
            <div>
              <h1 className={styles.title}>{t("projects.blackjack.title")}</h1>
              <p className={styles.timeline}>{t("projects.blackjack.years")}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AlbertMedina/blackjack-api.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.blackjack.github-button")}
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.blackjack.title")} />
          <div className={styles.text}>
            <p>{t("projects.blackjack.text-1")}</p>
            <p>{t("projects.blackjack.text-2")}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={image2} alt={t("projects.chateau.title")} />
        </div>
      </div>
    </section>
  );
}
