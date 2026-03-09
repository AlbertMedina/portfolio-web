import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/eddy/logo.webp";
import image1 from "../../assets/images/projects/eddy/image-1.webp";
import image2 from "../../assets/images/projects/eddy/image-2.webp";

export default function Eddy() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Racerloop Logo" />
            <h1>{t("projects.eddy.title")}</h1>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://tecnoboys.itch.io/the-frightening-nightmare-of-little-eddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Itch.io
            </a>
            <a
              href="https://github.com/AlbertMedina/Eddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.eddy.title")} width={350} />
          <div className={styles.text}>
            <p>{t("projects.eddy.text-1")}</p>
            <p>{t("projects.eddy.text-2")}</p>
          </div>
          <div className={styles.text}>
            <p>{t("projects.eddy.text-3")}</p>
          </div>
          <img src={image2} alt={t("projects.eddy.title")} width={350} />
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/GNUQRkMLtws?si=3e0MfIqjFYIJTKza"
            title="The Frightening Nightmare Of Little Eddy - Official Trailer"
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
