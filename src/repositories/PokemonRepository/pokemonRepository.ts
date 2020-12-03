import { httpAdapter } from "../../adapters/HttpAdapter";
import {
  GetPokemonDetails,
  GetPokemonList,
  GetPokemonListResponse,
  PokemonRepository,
} from "./types";
import { HttpAPI } from "../types";
import { PokemonSummary } from "../../domain";

const getPokemonList: GetPokemonList = (params) => {
  const offset = params.page ? params.page - 1 : 0;
  return new Promise<GetPokemonListResponse>((resolve, reject) => {
    httpAdapter
      .get<GetPokemonListResponse>(`${HttpAPI.v1}/pokemons`, {
        params: {
          name: params.name,
          limit: params.itemsPerPage || 30,
          page: offset > 0 ? offset : undefined,
        },
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

const getPokemonDetails: GetPokemonDetails = (id) => {
  return new Promise<PokemonSummary>((resolve, reject) => {
    httpAdapter
      .get<PokemonSummary>(`${HttpAPI.v1}/pokemon/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const pokemonRepository: PokemonRepository = {
  getPokemonList,
  getPokemonDetails,
};
