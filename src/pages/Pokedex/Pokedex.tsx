import React from "react";
import PageContainer from "../../components/PageContainer";
import PokemonCard from "../../components/PokemonCard";
import pokemons from "./data";

import s from "./Pokedex.module.scss";

const Pokedex: React.FC = () => {
  return (
    <PageContainer>
      <div className={s.root}>
        {pokemons.map((summary) => (
          <div className={s.col}>
            <PokemonCard summary={summary} key={summary.id} />
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
export default Pokedex;
