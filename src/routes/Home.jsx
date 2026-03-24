import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

import CarouselButton from "../components/home/CarouselButton";
import ImageButton from "../components/home/ImageButton";

import { projects } from "../data/projects";

import about from "../assets/images/home/about.webp";
import resume from "../assets/images/home/resume.webp";

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
        <div className={styles.button}>
          <ImageButton
            image={about}
            text={t("home.about-button")}
            onClick={() => navigate("/about")}
          />
        </div>
        <div className={styles.carousel}>
          <CarouselButton
            images={projects.map((p) => p.image)}
            text={t("home.projects-button")}
            onClick={() => navigate("/projects")}
          />
        </div>
        <div className={styles.button}>
          <ImageButton
            image={resume}
            text={t("home.resume-button")}
            onClick={() => navigate("/resume")}
          />
        </div>
      </div>
    </section>
  );
}
