import { rtkqApi } from "./queries";

type Pokemon = {
  species: { name: string };
  sprites: { front_shiny: string };
};

export const pokemonApi = rtkqApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
