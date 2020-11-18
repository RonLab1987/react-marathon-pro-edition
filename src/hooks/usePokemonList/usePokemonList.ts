import { PokemonListHookRelevantData, PokemonListHookResponse } from "./types";
import { useAsyncData } from "../useAsyncData";
import { pokemonRepository } from "../../repositories/PokemonRepository";

export function usePokemonList(): PokemonListHookResponse {
  const asyncData = useAsyncData<PokemonListHookRelevantData>({
    total: 0,
    pokemons: [],
  });

  const getPokemonList = (
    name?: string,
    itemsPerPage?: number,
    page?: number
  ): void => {
    asyncData.markAsLoading();
    pokemonRepository
      .getPokemonList({ name, itemsPerPage, page })
      .then(({ total, pokemons, ...data }) => {
        asyncData.setData({ total, pokemons });
        asyncData.markAsReady();
      })
      .catch((error) => {
        asyncData.markAsError();
        throw error;
      });
  };

  return {
    isLoading: asyncData.isLoading,
    isReady: asyncData.isReady,
    isError: asyncData.isError,
    total: asyncData.data.total,
    list: asyncData.data.pokemons,
    getPokemonList,
  };
}
