import { useTranslation } from "react-i18next";

import picture from "../assets/profile-picture.jpeg";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="about">
      <img
        src={picture}
        alt={"Albert Medina Cucurull"}
        width={350}
        className="profile-picture"
      />
      <div className="text-container">
        <p>{t("about.text-1")}</p>
        <p>{t("about.text-2")}</p>
        <p>{t("about.text-3")}</p>
      </div>
    </section>
  );
}
