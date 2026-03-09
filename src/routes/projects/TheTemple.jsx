import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/temple/logo.webp";
import image1 from "../../assets/images/projects/temple/image-1.webp";

export default function TheTemple() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Adaptive Difficulty In Board Games Logo" />
            <h1>{t("projects.temple.title")}</h1>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://subiscript.itch.io/the-temple"
              target="_blank"
              rel="noopener noreferrer"
            >
              ITCH.IO
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.temple.title")} />
          <div className={styles.text}>
            <p>{t("projects.temple.text-1")}</p>
            <p>{t("projects.temple.text-2")}</p>
            <p>{t("projects.temple.text-3")}</p>
          </div>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/GY_OpafnNc8?si=rEdug5W_blUr7VTx"
            title="Adaptive Difficulty In Board Games"
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
