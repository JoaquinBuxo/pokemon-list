import { usePokemonFavorites } from '../hooks/usePokemonFavorites';
import { PokemonGrid } from './PokemonList.styles';
import PokemonItem from './PokemonItem';
import { BackButton } from './PokemonFavorites.styles';

const Favorites: React.FC = () => {
  const { favorites } = usePokemonFavorites();

  return (
    <>
      <h1>My Favorites</h1>
      <BackButton to='/pokemon'>Back</BackButton>
      <PokemonGrid>
        {favorites?.map((pokemonName: string) => (
          <PokemonItem key={pokemonName} pokemonName={pokemonName} />
        ))}
      </PokemonGrid>
    </>
  );
};

export default Favorites;
