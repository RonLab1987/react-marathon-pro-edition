import {
  GetPokemonList,
  PokemonListHookRelevantData,
  PokemonListHookMixin,
} from "./types";
import { useAsyncData } from "../useAsyncData";
import { pokemonRepository } from "../../repositories/PokemonRepository";

export function usePokemonList(): PokemonListHookMixin {
  const getPokemonListHandler: GetPokemonList = (
    name?: string,
    itemsPerPage?: number,
    page?: number
  ) => pokemonRepository.getPokemonList({ name, itemsPerPage, page });

  const asyncData = useAsyncData<
    PokemonListHookRelevantData | null,
    GetPokemonList
  >(null, getPokemonListHandler);

  return {
    isLoading: asyncData.isLoading,
    isReady: asyncData.isReady,
    isError: asyncData.isError,
    total: asyncData.data?.total || 0,
    list: asyncData.data?.pokemons || [],
    getPokemonList: asyncData.getData,
  };
}
