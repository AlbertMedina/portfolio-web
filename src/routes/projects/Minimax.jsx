import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/minimax/logo.webp";
import image1 from "../../assets/images/projects/minimax/image-1.webp";

export default function Minimax() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <img src={logo} alt="Adaptive Difficulty In Board Games Logo" />
            <div className={styles.titleText}>
              <h1>{t("projects.minimax.title")}</h1>
              <h2>{t("projects.minimax.years")}</h2>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AlbertMedina/TFG_AdaptiveMinimax_Checkers"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://repositori.tecnocampus.cat/handle/20.500.12367/1808"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESSAY
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.minimax.title")} />
          <div className={styles.text}>
            <p>{t("projects.minimax.text-1")}</p>
            <p>{t("projects.minimax.text-2")}</p>
          </div>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/e4jVKkc9CVo?si=KOHxUIYOaTAC-pMe"
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
