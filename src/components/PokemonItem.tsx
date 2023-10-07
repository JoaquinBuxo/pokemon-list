import { PokemonListResult } from '../types/pokemon';

const PokemonItem: React.FC<{ pokemon: PokemonListResult }> = ({ pokemon }) => {
  const imageUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`;
  return (
    <div>
      <img src={imageUrl} alt={pokemon.name} />
      {pokemon.name}
    </div>
  );
};

export default PokemonItem;
