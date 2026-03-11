import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Projects.module.css";

import paradiso from "../assets/images/projects/paradiso/thumbnail.webp";

import racerloop from "../assets/images/projects/racerloop/thumbnail.webp";
import eddy from "../assets/images/projects/eddy/thumbnail.webp";
import minimax from "../assets/images/projects/minimax/thumbnail.webp";
import fighters from "../assets/images/projects/fighters/thumbnail.webp";
import temple from "../assets/images/projects/temple/thumbnail.webp";
import molai from "../assets/images/projects/molai/thumbnail.webp";

import ProjectButton from "../components/shared/ProjectButton";

const projects = [
  {
    image: paradiso,
    route: "/projects/video-paradiso",
    category: ["backend", "frontend"],
  },
  { image: racerloop, route: "/projects/racerloop", category: ["gamedev"] },
  {
    image: eddy,
    route: "/projects/the-frightening-nightmare-of-little-eddy",
    category: ["gamedev"],
  },
  {
    image: minimax,
    route: "/projects/adaptive-difficulty-in-board-games",
    category: ["gamedev"],
  },
  { image: fighters, route: "/projects/pit-fighters", category: ["gamedev"] },
  { image: temple, route: "/projects/the-temple", category: ["gamedev"] },
  { image: molai, route: "/projects/molai", category: ["gamedev"] },
];

export default function Projects() {
  const navigate = useNavigate();
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
          All
        </button>
        <button
          className={filter === "backend" ? styles.active : ""}
          onClick={() => setFilter("backend")}
        >
          Backend
        </button>
        <button
          className={filter === "frontend" ? styles.active : ""}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={filter === "gamedev" ? styles.active : ""}
          onClick={() => setFilter("gamedev")}
        >
          Game Dev
        </button>
      </div>
      <div className={styles.content}>
        {filteredProjects.map((p) => (
          <ProjectButton
            key={p.route}
            image={p.image}
            onClick={() => navigate(p.route)}
          />
        ))}
      </div>
    </section>
  );
}
