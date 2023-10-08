import { PokemonListResult } from '../types/pokemon';
import { LinkPokemonItem } from './PokemonItem.styles';

const PokemonItem: React.FC<{ pokemon: PokemonListResult }> = ({ pokemon }) => {
  const imageUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`;
  return (
    <LinkPokemonItem to={`/pokemon/${pokemon.name}`}>
      <img src={imageUrl} alt={pokemon.name} />
      <p className='pokemon-name'>{pokemon.name}</p>
    </LinkPokemonItem>
  );
};

export default PokemonItem;
