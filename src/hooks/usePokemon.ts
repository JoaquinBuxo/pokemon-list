import { useInfiniteQuery } from '@tanstack/react-query';
import fetchPokemons from '../services/apiService';
import { PokemonList } from '../types/pokemon';

const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const INITIAL_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

const MAX_POKEMON_COUNT = 151;
const POKEMON_PER_PAGE = 20;

const getNextPageUrl = (nextPageUrl: string, nextOffsetNumber: number) => {
  if (nextOffsetNumber + POKEMON_PER_PAGE < MAX_POKEMON_COUNT) {
    return nextPageUrl;
  } else if (
    nextOffsetNumber + POKEMON_PER_PAGE >= MAX_POKEMON_COUNT &&
    nextOffsetNumber < MAX_POKEMON_COUNT
  ) {
    const remainingPokemonCount = MAX_POKEMON_COUNT - nextOffsetNumber;
    return `${POKEMON_API_BASE_URL}?limit=${remainingPokemonCount}&offset=${nextOffsetNumber}`;
  } else {
    return null;
  }
};

export const usePokemon = () => {
  return useInfiniteQuery<PokemonList, Error>({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam = INITIAL_URL }) => fetchPokemons(pageParam),
    getNextPageParam: (lastPage) => {
      const nextOffset =
        new URL(lastPage.next).searchParams.get('offset') || '0';
      const nextOffsetNumber = parseInt(nextOffset);
      return getNextPageUrl(lastPage.next, nextOffsetNumber);
    },
  });
};
