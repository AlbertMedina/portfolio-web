import { useTranslation } from "react-i18next";

import styles from "./Resume.module.css";

export default function Resume() {
  const { t } = useTranslation();
  return (
    <section className={styles.resume}>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>{t("resume.experience.title")}</p>
          <p>
            <b>{t("resume.experience.experience-1.position")}</b>
          </p>
          <p>{t("resume.experience.experience-1.years")}</p>
          <ul>
            <li>{t("resume.experience.experience-1.text-1")}</li>
            <li>{t("resume.experience.experience-1.text-2")}</li>
            <li>{t("resume.experience.experience-1.text-3")}</li>
            <li>{t("resume.experience.experience-1.text-4")}</li>
          </ul>
        </div>
        <div>
          <p className={styles.title}>{t("resume.education.title")}</p>
          <p>
            <b>{t("resume.education.education-1.title")}</b>
          </p>
          <p>{t("resume.education.education-1.years")}</p>
          <p>
            <b>{t("resume.education.education-2.title")}</b>
          </p>
          <p>{t("resume.education.education-2.years")}</p>
          <p>
            <b>{t("resume.education.education-3.title")}</b>
          </p>
          <p>{t("resume.education.education-3.years")}</p>
        </div>
        <div className={styles.skills}>
          <div>
            <p className={styles.title}>
              {t("resume.technological-stack.title")}:
            </p>
            <ul>
              <li>
                <b>{t("resume.technological-stack.programming-languages")}:</b>{" "}
                Java · SQL · JavaScript · C#
              </li>
              <li>
                <b>{t("resume.technological-stack.backend")}:</b> Java · Spring
                Boot · Spring Data · REST APIs
              </li>
              <li>
                <b>{t("resume.technological-stack.testing")}:</b> JUnit ·
                AssertJ · Mockito · Integration Testing
              </li>
              <li>
                <b>{t("resume.technological-stack.frontend")}:</b> HTML · CSS ·
                JavaScript · React
              </li>
              <li>
                <b>{t("resume.technological-stack.databases")}:</b> MySQL ·
                MongoDB
              </li>
              <li>
                <b>{t("resume.technological-stack.design-principles")}:</b>{" "}
                SOLID · clean code · design patterns
              </li>
              <li>
                <b>{t("resume.technological-stack.architecture")}:</b> Hexagonal
                Architecture · DDD
              </li>
              <li>
                <b>{t("resume.technological-stack.agile-methodologies")}:</b>{" "}
                Scrum · Kanban
              </li>
              <li>
                <b>{t("resume.technological-stack.version-control")}:</b> Git
                (GitHub)
              </li>
              <li>
                <b>{t("resume.technological-stack.devops")}:</b> Docker · Docker
                Compose · Testcontainers
              </li>
              <li>
                <b>{t("resume.technological-stack.game-development")}:</b> Unity
                (C#) · Unreal Engine (C++)
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.title}>{t("resume.soft-skills.title")}:</p>
            <ul>
              <li>{t("resume.soft-skills.collaboration")}</li>
              <li>{t("resume.soft-skills.communication")}</li>
              <li>{t("resume.soft-skills.problem-solving")}</li>
              <li>{t("resume.soft-skills.analytical-thinking")}</li>
              <li>{t("resume.soft-skills.detail")}</li>
              <li>{t("resume.soft-skills.adaptability")}</li>
              <li>{t("resume.soft-skills.responsibility")}</li>
              <li>{t("resume.soft-skills.learning")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
