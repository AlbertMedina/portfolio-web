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
  { image: paradiso, route: "/projects/video-paradiso" },
  { image: racerloop, route: "/projects/racerloop" },
  {
    image: eddy,
    route: "/projects/the-frightening-nightmare-of-little-eddy",
  },
  { image: minimax, route: "/projects/adaptive-difficulty-in-board-games" },
  { image: fighters, route: "/projects/pit-fighters" },
  { image: temple, route: "/projects/the-temple" },
  { image: molai, route: "/projects/molai" },
];

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        {projects.map((p) => (
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
