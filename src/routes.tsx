import React from "react";
import { HookRouter } from "hookrouter";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";

export const routePaths = {
  Home: "/",
  Pokedex: "/pokedex",
  PokemonDetails: (id?: number): string =>
    `/pokedex/${id !== undefined ? id : ":id"}`,
};

interface PokemonDetailsRouteParams extends HookRouter.QueryParams {
  id: string;
}

export const routes = {
  [routePaths.Home]: () => <Home />,
  [routePaths.Pokedex]: () => <Pokedex />,
  [routePaths.PokemonDetails()]: (params: PokemonDetailsRouteParams) => (
    <PokemonDetails id={parseInt(params.id, 10)} />
  ),
} as HookRouter.RouteObject;

export default routes;
