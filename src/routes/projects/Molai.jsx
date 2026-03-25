import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import logo from "../../assets/images/projects/molai/logo.webp";
import image1 from "../../assets/images/projects/molai/image-1.webp";

export default function Molai() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <img src={logo} alt={t("projects.molai.title")} />
            <div>
              <h1 className={styles.title}>{t("projects.molai.title")}</h1>
              <p className={styles.timeline}>{t("projects.molai.years")}</p>
            </div>
          </div>
          <div className={styles.buttons}></div>
        </div>
        <div className={styles.info}>
          <img src={image1} alt={t("projects.molai.title")} />
          <div className={styles.text}>
            <p>{t("projects.molai.text-1")}</p>
            <p>{t("projects.molai.text-2")}</p>
          </div>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/f5__JJ2mHHk?si=uAxCACyYJCAjteer"
            title="Molai"
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
