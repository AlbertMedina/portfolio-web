import { useTranslation } from "react-i18next";

import "./Home.css";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="home">
      <p className="name">Albert Medina Cucurull</p>
      <p className="headline">{t("about.header")}</p>
    </section>
  );
}
