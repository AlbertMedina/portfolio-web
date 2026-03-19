import paradiso from "../assets/images/projects/paradiso/thumbnail.webp";
import portfolio from "../assets/images/projects/portfolio/thumbnail.webp";
import chateau from "../assets/images/projects/chateau/thumbnail.webp";

import racerloop from "../assets/images/projects/racerloop/thumbnail.webp";
import eddy from "../assets/images/projects/eddy/thumbnail.webp";
import minimax from "../assets/images/projects/minimax/thumbnail.webp";
import fighters from "../assets/images/projects/fighters/thumbnail.webp";
import temple from "../assets/images/projects/temple/thumbnail.webp";
import molai from "../assets/images/projects/molai/thumbnail.webp";

export const projects = [
    {
        titleKey: "projects.paradiso.title",
        yearKey: "projects.paradiso.years",
        image: paradiso,
        route: "/projects/video-paradiso",
        category: ["backend", "frontend"],
    },
    {
        titleKey: "projects.portfolio.title",
        yearKey: "projects.portfolio.years",
        image: portfolio,
        route: "/projects/portfolio",
        category: ["frontend"],
    },
    {
        titleKey: "projects.racerloop.title",
        yearKey: "projects.racerloop.years",
        image: racerloop,
        route: "/projects/racerloop",
        category: ["gamedev"],
    },
    {
        titleKey: "projects.eddy.title",
        yearKey: "projects.eddy.years",
        image: eddy,
        route: "/projects/the-frightening-nightmare-of-little-eddy",
        category: ["gamedev"],
    },
    {
        titleKey: "projects.minimax.title",
        yearKey: "projects.minimax.years",
        image: minimax,
        route: "/projects/adaptive-difficulty-in-board-games",
        category: ["gamedev"],
    },
    {
        titleKey: "projects.chateau.title",
        yearKey: "projects.chateau.years",
        image: chateau,
        route: "/projects/chateau-maresme",
        category: ["frontend"],
    },
    {
        titleKey: "projects.fighters.title",
        yearKey: "projects.fighters.years",
        image: fighters,
        route: "/projects/pit-fighters",
        category: ["gamedev"],
    },
    {
        titleKey: "projects.temple.title",
        yearKey: "projects.temple.years",
        image: temple,
        route: "/projects/the-temple",
        category: ["gamedev"],
    },
    {
        titleKey: "projects.molai.title",
        yearKey: "projects.molai.years",
        image: molai,
        route: "/projects/molai",
        category: ["gamedev"],
    },
];