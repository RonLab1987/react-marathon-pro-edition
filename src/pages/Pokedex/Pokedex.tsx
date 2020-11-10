import React from "react";
import s from "./Pokedex.module.scss";
import Heading from "../../components/Heading";

const Pokedex: React.FC = () => {
  return (
    <div className={s.root}>
      <Heading level={1}>Pokédex page be here soon</Heading>
    </div>
  );
};
export default Pokedex;
