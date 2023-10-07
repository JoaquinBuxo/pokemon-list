import { usePokemon } from '../hooks/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonList, PokemonListResult } from '../types/pokemon';

const PokemonList = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = usePokemon();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  const pokemons: PokemonListResult[] | undefined = data?.pages.reduce(
    (acc: PokemonListResult[], page: PokemonList) => {
      return [...acc, ...page.results];
    },
    []
  );

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
    >
      {pokemons?.map((pokemon: PokemonListResult) => (
        <div key={pokemon.name}>
          <img
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
            alt={pokemon.name}
          />
          {pokemon.name}
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PokemonList;
