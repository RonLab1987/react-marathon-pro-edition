import React, { useEffect } from "react";
import PageContainer, {
  PageContainerType,
} from "../../components/PageContainer";
import PokemonCard from "../../components/PokemonCard";

import s from "./Pokedex.module.scss";
import { PokemonSummary } from "../../domain";
import { usePokemonList } from "../../hooks/usePokemonList";
import Heading from "../../components/Heading";

const Pokedex: React.FC = () => {
  const { isLoading, isError, total, list, getPokemonList } = usePokemonList();

  useEffect(() => {
    getPokemonList();
  }, []);

  if (isLoading) {
    return (
      <PageContainer center>
        <Heading level={2}>...Loading</Heading>
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer type={PageContainerType.Danger} center>
        <Heading level={2}>...Oops, something went wrong</Heading>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Heading level={2}>
        {total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div className={s.root}>
        {list.map((summary: PokemonSummary) => (
          <div className={s.col} key={summary.id}>
            <PokemonCard summary={summary} />
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
export default React.memo(Pokedex);
