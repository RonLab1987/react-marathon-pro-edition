import React from "react";
import PageContainer from "../../components/PageContainer";
import PokemonCard from "../../components/PokemonCard";
import pokemons from "./data";

import s from "./Pokedex.module.scss";
import { PokemonSummary } from "../../domain";

const Pokedex: React.FC = () => {
  return (
    <PageContainer>
      <div className={s.root}>
        {pokemons.map((summary: PokemonSummary) => (
          <div className={s.col} key={summary.id}>
            <PokemonCard summary={summary} />
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
export default Pokedex;
