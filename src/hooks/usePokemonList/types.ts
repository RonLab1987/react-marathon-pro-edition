import { PokemonSummary } from "../../domain";

export interface PokemonListAPIResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: PokemonSummary[];
}

export interface PokemonListHookRelevantData {
  total: number;
  pokemons: PokemonSummary[];
}

export interface PokemonListHookResponse {
  isLoading: boolean;
  isError: boolean;
  total: number;
  list: PokemonSummary[];
  getPokemonList: (itemsPerPage?: number, page?: number) => void;
}
