import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import PageContainer, {
  PageContainerType,
} from "../../components/PageContainer";
import PokemonCard from "../../components/PokemonCard";

import s from "./Pokedex.module.scss";
import { PokemonSummary } from "../../domain";
import { usePokemonList } from "../../hooks/usePokemonList";
import Heading from "../../components/Heading";
import Search from "../../components/Search";

const Pokedex: React.FC = () => {
  const {
    isLoading,
    isReady,
    isError,
    total,
    list,
    getPokemonList,
  } = usePokemonList();
  const [search, setSearch] = useState<string | undefined>(undefined);

  useEffect(() => getPokemonList(search), [search]);

  const debouncedChangeHandler = debounce<(search: string | undefined) => void>(
    (search) => setSearch(search),
    400
  );

  if (isLoading && !isReady) {
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

      <Search
        placeholder="Find your favorite..."
        onChange={debouncedChangeHandler}
      />

      {list.length ? (
        <div className={s.row}>
          {list.map((summary: PokemonSummary) => (
            <div className={s.col} key={summary.id}>
              <PokemonCard summary={summary} />
            </div>
          ))}
        </div>
      ) : (
        <Heading level={2}>There is no such pokemon</Heading>
      )}
    </PageContainer>
  );
};
export default React.memo(Pokedex);
