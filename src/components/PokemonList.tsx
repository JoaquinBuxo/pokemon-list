import { usePokemon } from '../hooks/usePokemon';

const PokemonList = () => {
  const { data, isLoading, error } = usePokemon();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      {data?.results.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
