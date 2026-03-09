import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/racerloop/logo.webp";
import image from "../../assets/images/projects/racerloop/image-1.webp";

export default function Racerloop() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Racerloop Logo" />
            <h1>{t("projects.racerloop.title")}</h1>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://blinkgalaxy.com/es/carreras/racerloop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Web Page
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image} alt={t("projects.racerloop.title")} width={350} />
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
