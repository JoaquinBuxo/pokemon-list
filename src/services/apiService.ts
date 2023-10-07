import { PokemonList } from '../types/pokemon';

const fetchPokemons = async (url: string): Promise<PokemonList> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchPokemons;
