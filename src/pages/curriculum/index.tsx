import React from "react";
import { Markup } from "react-render-markup";
import styles from "./curriculum.module.css";
import CardCurriculum from "../../components/CardCurriculum";
import CardHeaderCurriculum from "../../components/CardHeaderCurriculum";

export async function getServerSideProps() {
  const dataFetch = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/api/curriculum`
  );
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function Artigo({ data }) {
  let curriculum = data[0];
  return (
    <div className={styles.Curriculum}>
      <title>Hernande Monteiro - aqui você sabe um pouco mais sobre mim!</title>
      <CardHeaderCurriculum name="Hernande Monteiro">
        <Markup markup={curriculum.resume} />
      </CardHeaderCurriculum>
      <CardCurriculum title="Minha formação e meus cursos:">
        <Markup markup={curriculum.academy} />
      </CardCurriculum>
      <CardCurriculum title="Soft-skills:">
        <Markup markup={curriculum.softskills} />
      </CardCurriculum>
      <CardCurriculum title="Hard-skills:">
        <Markup markup={curriculum.hardskills} />
      </CardCurriculum>
      <CardCurriculum title="Experiências:">
        <Markup markup={curriculum.experience} />
      </CardCurriculum>
    </div>
  );
}