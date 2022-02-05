import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    pokemonDetails: {},
  }),
  actions: {
    async getPokemonDetails(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      this.pokemonDetails = result;
    },
  },
});
