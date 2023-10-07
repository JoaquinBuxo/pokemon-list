import { useQuery } from '@tanstack/react-query';
import fetchPokemons from '../services/apiService';
import { PokemonList } from '../types/pokemon';

export const usePokemon = () => {
  return useQuery<PokemonList, Error>(['pokemons'], fetchPokemons);
};
