import { Pokemon, PokemonList } from '../types/pokemon';

const fetchPokemons = async (url: string): Promise<PokemonList> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchOnePokemon = async (
  pokemonName: string
): Promise<Pokemon> => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await fetch(pokemonUrl);
  const pokemon = await response.json();
  return pokemon;
};

export default fetchPokemons;
