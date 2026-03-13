import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/fighters/logo.webp";
import image1 from "../../assets/images/projects/fighters/image-1.webp";
import image2 from "../../assets/images/projects/fighters/image-2.webp";

export default function PitFighters() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Pit Fighters Logo" />
            <div className={styles.titleText}>
              <h1>{t("projects.fighters.title")}</h1>
              <h2>{t("projects.fighters.years")}</h2>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://tecnoboys.itch.io/pit-fighters"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.fighters.itchio-button")}
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.fighters.title")} />
          <div className={styles.text}>
            <p>{t("projects.fighters.text-1")}</p>
            <p>{t("projects.fighters.text-2")}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={image2} alt="Pit Fighters" />
        </div>
      </div>
    </section>
  );
}
