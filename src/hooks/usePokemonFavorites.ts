import { useContext } from 'react';
import { FavoritesPokemonContext } from '../context/FavoritesPokemonContext';

export const usePokemonFavorites = () => {
  const context = useContext(FavoritesPokemonContext);
  if (!context) {
    throw new Error(
      'usePokemonFavorites must be used within a FavoritesPokemonProvider'
    );
  }
  return context;
};
