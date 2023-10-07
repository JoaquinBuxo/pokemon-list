import { useEffect, useState } from 'react';
import fetchPokemons from '../services/apiService';
import { PokemonListResult } from '../types/pokemon';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResult[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data.results);
    };

    getPokemons();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
