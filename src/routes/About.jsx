import { useTranslation } from "react-i18next";

import styles from "./About.module.css";

import picture from "../assets/images/profile/profile-picture.jpeg";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
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
          <p>{t("about.text-4")}</p>
          <p>{t("about.text-5")}</p>
        </div>
      </div>
    </section>
  );
}
