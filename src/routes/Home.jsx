import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

import CarouselButton from "../components/home/CarouselButton";

import { projects } from "../data/projects";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={styles.home}>
      <div className={styles.title}>
        <p className={styles.name}>Albert Medina Cucurull</p>
        <p className={styles.headline}>{t("home.headline")}</p>
      </div>
      <div className={styles.buttons}>
        <CarouselButton
          images={projects.map((p) => p.image)}
          width={400}
          height={250}
          text={t("home.button-text")}
          onClick={() => navigate("/projects")}
        />
      </div>
    </section>
  );
}
