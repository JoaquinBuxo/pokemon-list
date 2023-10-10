import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonList, PokemonListResult } from '../types/pokemon';
import { PokemonGrid } from './PokemonList.styles';
import PokemonItem from './PokemonItem';
import SearchBar from './SearchBar';

const PokemonList = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = usePokemon();
  const [search, setSearch] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  const pokemons: PokemonListResult[] | undefined = data?.pages.reduce(
    (acc: PokemonListResult[], page: PokemonList) => {
      return [...acc, ...page.results];
    },
    []
  );

  const filteredPokemons = pokemons?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        <PokemonGrid>
          {filteredPokemons?.map((pokemon: PokemonListResult) => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
          ))}
        </PokemonGrid>
      </InfiniteScroll>
    </>
  );
};

export default PokemonList;
