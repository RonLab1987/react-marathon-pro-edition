import { httpAdapter } from "../../adapters/HttpAdapter";
import {
  GetPokemonList,
  GetPokemonListResponse,
  PokemonRepository,
} from "./types";
import { HttpAPI } from "../types";

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

export const pokemonRepository: PokemonRepository = {
  getPokemonList,
};
