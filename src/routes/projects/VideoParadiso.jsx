import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/paradiso/logo.webp";
import image1 from "../../assets/images/projects/paradiso/image-1.webp";
import image2 from "../../assets/images/projects/paradiso/image-2.webp";
import image3 from "../../assets/images/projects/paradiso/image-3.webp";

export default function VideoParadiso() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <img src={logo} alt={t("projects.paradiso.title")} />
            <div>
              <h1 className={styles.title}>{t("projects.paradiso.title")}</h1>
              <p className={styles.timeline}>{t("projects.paradiso.years")}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              href="https://github.com/AlbertMedina/video-paradiso-api.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.paradiso.github-backend-button")}
            </a>
            <a
              href="https://github.com/AlbertMedina/video-paradiso-frontend.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.paradiso.github-frontend-button")}
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.paradiso.title")} />
          <div className={styles.text}>
            <p>{t("projects.paradiso.text-1")}</p>
          </div>
          <div className={styles.text}>
            <p>{t("projects.paradiso.text-2")}</p>
            <p>{t("projects.paradiso.text-3")}</p>
          </div>
          <img src={image2} alt={t("projects.paradiso.title")} />
        </div>
        <div className={styles.picture}>
          <img src={image3} alt="Pit Fighters" />
        </div>
      </div>
    </section>
  );
}
