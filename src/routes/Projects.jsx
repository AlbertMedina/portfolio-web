import { useNavigate } from "react-router-dom";

import styles from "./Projects.module.css";

import racerloop from "../assets/images/projects/racerloop/thumbnail.webp";
import eddy from "../assets/images/projects/eddy/thumbnail.webp";
import minimax from "../assets/images/projects/minimax/thumbnail.webp";
import fighters from "../assets/images/projects/fighters/thumbnail.webp";
import temple from "../assets/images/projects/temple/thumbnail.webp";
import molai from "../assets/images/projects/molai/thumbnail.webp";

import ProjectButton from "../components/shared/ProjectButton";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <ProjectButton
          image={racerloop}
          onClick={() => navigate("/projects/racerloop")}
        />
        <ProjectButton
          image={eddy}
          onClick={() =>
            navigate("/projects/the-frightening-nightmare-of-little-eddy")
          }
        />
        <ProjectButton
          image={minimax}
          onClick={() =>
            navigate("/projects/adaptive-difficulty-in-board-games")
          }
        />
        <ProjectButton
          image={fighters}
          onClick={() => navigate("/projects/pit-fighters")}
        />
        <ProjectButton
          image={temple}
          onClick={() => navigate("/projects/the-temple")}
        />
        <ProjectButton
          image={molai}
          onClick={() => navigate("/projects/molai")}
        />
      </div>
    </section>
  );
}
