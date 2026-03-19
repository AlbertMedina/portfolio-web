import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";

import { projects } from "../data/projects";

import ProjectButton from "../components/projects/ProjectButton";

export default function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category.includes(filter)
  );

  return (
    <section className={styles.projects}>
      <div className={styles.filters}>
        <button
          className={filter === "all" ? styles.active : ""}
          onClick={() => setFilter("all")}
        >
          {t("projects.filters.all")}
        </button>
        <button
          className={filter === "backend" ? styles.active : ""}
          onClick={() => setFilter("backend")}
        >
          {t("projects.filters.backend")}
        </button>
        <button
          className={filter === "frontend" ? styles.active : ""}
          onClick={() => setFilter("frontend")}
        >
          {t("projects.filters.frontend")}
        </button>
        <button
          className={filter === "gamedev" ? styles.active : ""}
          onClick={() => setFilter("gamedev")}
        >
          {t("projects.filters.gamedev")}
        </button>
      </div>
      <div className={styles.content}>
        {filteredProjects.map((p) => (
          <ProjectButton
            key={p.route}
            title={t(p.titleKey)}
            year={t(p.yearKey)}
            image={p.image}
            onClick={() => navigate(p.route)}
          />
        ))}
      </div>
    </section>
  );
}
