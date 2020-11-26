import { PokemonSummary } from "../../domain";

export interface GetPokemonListResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: PokemonSummary[];
}

export type GetPokemonListRequestParams = {
  name?: string;
  itemsPerPage?: number;
  page?: number;
};

export type GetPokemonList = (
  params: GetPokemonListRequestParams
) => Promise<GetPokemonListResponse>;

export type GetPokemonDetails = (id: number) => Promise<PokemonSummary>;

export interface PokemonRepository {
  getPokemonList: GetPokemonList;
  getPokemonDetails: GetPokemonDetails;
}
