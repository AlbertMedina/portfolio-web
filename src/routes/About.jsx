import { useTranslation } from "react-i18next";

import styles from "./About.module.css";

import picture from "../assets/images/profile/profile-picture.jpeg";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
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
        <p>
          <b>{t("about.technological-stack")}:</b>
        </p>
        <ul>
          <li>
            <b>{t("about.programming-languages")}:</b> Java · SQL · JavaScript ·
            C#
          </li>
          <li>
            <b>{t("about.backend")}:</b> Java · Spring Boot · Spring Data · REST
            APIs
          </li>
          <li>
            <b>{t("about.testing")}:</b> JUnit · AssertJ · Mockito · Integration
            Testing
          </li>
          <li>
            <b>{t("about.frontend")}:</b> HTML · CSS · JavaScript · React
          </li>
          <li>
            <b>{t("about.databases")}:</b> MySQL · MongoDB
          </li>
          <li>
            <b>{t("about.design-principles")}:</b> SOLID · clean code · design
            patterns
          </li>
          <li>
            <b>{t("about.architecture")}:</b> Hexagonal Architecture · DDD
          </li>
          <li>
            <b>{t("about.agile-methodologies")}:</b> Scrum · Kanban
          </li>
          <li>
            <b>{t("about.version-control")}:</b> Git (GitHub)
          </li>
          <li>
            <b>{t("about.devops")}:</b> Docker · Docker Compose · Testcontainers
          </li>
          <li>
            <b>{t("about.game-development")}:</b> Unity (C#) · Unreal Engine
            (C++)
          </li>
        </ul>
      </div>
    </section>
  );
}
