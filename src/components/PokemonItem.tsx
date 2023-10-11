import {
  FavoriteButton,
  LinkPokemonItem,
  PokemonCard,
} from './PokemonItem.styles';
import { usePokemonFavorites } from '../hooks/usePokemonFavorites';

interface PokemonItemProps {
  pokemonName: string;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemonName }) => {
  const { favorites, toggleFavorite } = usePokemonFavorites();
  const imageUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`;

  return (
    <PokemonCard>
      <FavoriteButton onClick={() => toggleFavorite(pokemonName)}>
        {favorites?.includes(pokemonName) ? '❤️' : '🤍'}
      </FavoriteButton>
      <LinkPokemonItem to={`/pokemon/${pokemonName}`}>
        <img src={imageUrl} alt={pokemonName} />
        <p className='pokemon-name'>{pokemonName}</p>
      </LinkPokemonItem>
    </PokemonCard>
  );
};

export default PokemonItem;
