import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/racerloop/logo.webp";
import image from "../../assets/images/projects/racerloop/image-1.webp";

export default function Racerloop() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <img src={logo} alt={t("projects.racerloop.title")} />
            <div>
              <h1 className={styles.title}>{t("projects.racerloop.title")}</h1>
              <p className={styles.timeline}>{t("projects.racerloop.years")}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://blinkgalaxy.com/es/carreras/racerloop"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.racerloop.website-button")}
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image} alt={t("projects.racerloop.title")} />
          <div className={styles.text}>
            <p>{t("projects.racerloop.text-1")}</p>
            <p>{t("projects.racerloop.text-2")}</p>
          </div>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/FBCI5R5czNU?si=PgDYMc1p6TkcsdBj"
            title="Racerloop Official Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  );
}
