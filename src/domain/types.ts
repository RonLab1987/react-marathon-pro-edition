export interface PokemonBaseStats {
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
}

export interface PokemonSummary {
  id: number;
  name: string;
  // eslint-disable-next-line camelcase
  name_clean: string;
  stats: PokemonBaseStats;
  abilities: string[];
  types: string[];
  img: string;
  // eslint-disable-next-line camelcase
  base_experience: number;
  // eslint-disable-next-line camelcase
  is_default: boolean;
  order: number;
  height: number;
  weight: number;
}
