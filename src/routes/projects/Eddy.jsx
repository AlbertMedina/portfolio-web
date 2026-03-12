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
            <img
              src={logo}
              alt="The Frightening Nightmare Of Little Eddy Logo"
            />
            <div className={styles.titleText}>
              <h1>{t("projects.eddy.title")}</h1>
              <h2>{t("projects.eddy.years")}</h2>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://tecnoboys.itch.io/the-frightening-nightmare-of-little-eddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              ITCH.IO
            </a>
            <a
              href="https://github.com/AlbertMedina/The-Frightening-Nightmare-Of-Little-Eddy.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <button
              onClick={() => {
                const trailer = document.getElementById("trailer");
                trailer.scrollIntoView({ behavior: "smooth" });
              }}
            >
              TRAILER
            </button>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.eddy.title")} />
          <div className={styles.text}>
            <p>{t("projects.eddy.text-1")}</p>
            <p>{t("projects.eddy.text-2")}</p>
          </div>
          <div className={styles.text}>
            <p>{t("projects.eddy.text-3")}</p>
            <p>{t("projects.eddy.text-4")}</p>
          </div>
          <img src={image2} alt={t("projects.eddy.title")} />
        </div>
        <div className={styles.video} id="trailer">
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
