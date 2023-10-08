import { PokemonListResult } from '../types/pokemon';
import { StyledPokemonItem } from './PokemonItem.styles';

const PokemonItem: React.FC<{ pokemon: PokemonListResult }> = ({ pokemon }) => {
  const imageUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`;
  return (
    <StyledPokemonItem>
      <img src={imageUrl} alt={pokemon.name} />
      <p className='pokemon-name'>{pokemon.name}</p>
    </StyledPokemonItem>
  );
};

export default PokemonItem;
