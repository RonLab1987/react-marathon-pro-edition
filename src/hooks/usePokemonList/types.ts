import { PokemonSummary } from "../../domain";

export interface PokemonListHookRelevantData {
  total: number;
  pokemons: PokemonSummary[];
}

export interface GetPokemonList {
  (name?: string, itemsPerPage?: number, page?: number): Promise<
    PokemonListHookRelevantData
  >;
}

export interface PokemonListHookMixin {
  isLoading: boolean;
  isReady: boolean;
  isError: boolean;
  total: number;
  list: PokemonSummary[];
  getPokemonList: GetPokemonList;
}
