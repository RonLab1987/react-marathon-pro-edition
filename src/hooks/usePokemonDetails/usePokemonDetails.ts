import { GetPokemonDetails, PokemonDetailsHookMixin } from "./types";
import { useAsyncData } from "../useAsyncData";
import { pokemonRepository } from "../../repositories/PokemonRepository";
import { PokemonSummary } from "../../domain";

export function usePokemonDetails(): PokemonDetailsHookMixin {
  const asyncData = useAsyncData<PokemonSummary | null, GetPokemonDetails>(
    null,
    pokemonRepository.getPokemonDetails
  );

  return {
    isLoading: asyncData.isLoading,
    isReady: asyncData.isReady,
    isError: asyncData.isError,
    details: asyncData.data,
    getPokemonDetails: asyncData.getData,
  };
}
