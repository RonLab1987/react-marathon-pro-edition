import { PokemonSummary } from "../../domain";

export interface GetPokemonDetails {
  (id: number): Promise<PokemonSummary>;
}

export interface PokemonDetailsHookMixin {
  isLoading: boolean;
  isReady: boolean;
  isError: boolean;
  details: PokemonSummary | null;
  getPokemonDetails: GetPokemonDetails;
}
