import { PokemonList } from '../types/pokemon';

const fetchPokemons = async (): Promise<PokemonList> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const data = await response.json();
  return data;
};

export default fetchPokemons;
