import {
  PokemonListAPIResponse,
  PokemonListHookRelevantData,
  PokemonListHookResponse,
} from "./types";
import { useAsyncData } from "../useAsyncData";

export function usePokemonList(): PokemonListHookResponse {
  const asyncData = useAsyncData<PokemonListHookRelevantData>({
    total: 0,
    pokemons: [],
  });

  const getPokemonList = (
    itemsPerPage: number = 30,
    page: number = 1
  ): void => {
    const offset = page - 1;
    asyncData.markAsLoading();
    fetch(
      `http://zar.hosthot.ru/api/v1/pokemons?limit=${itemsPerPage}${
        offset > 0 ? `&offset=${offset}` : ""
      }`
    )
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject(new Error(response.statusText))
      )
      .then(({ total, pokemons, ...data }: PokemonListAPIResponse) => {
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
    isError: asyncData.isError,
    total: asyncData.data.total,
    list: asyncData.data.pokemons,
    getPokemonList,
  };
}
