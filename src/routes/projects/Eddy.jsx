import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

import image from "../../assets/images/projects/eddy/image-1.webp";

export default function Eddy() {
  const { t } = useTranslation();
  return (
    <section className={styles.project}>
      <div className={styles.content}>
        <img
          src={picture}
          alt={"Albert Medina Cucurull"}
          width={350}
          className={styles.picture}
        />
        <div className={styles.text}>
          <p>{t("about.text-1")}</p>
          <p>{t("about.text-2")}</p>
          <p>{t("about.text-3")}</p>
        </div>
      </div>
    </section>
  );
}
