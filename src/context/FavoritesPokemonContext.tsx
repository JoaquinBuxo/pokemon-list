import { createContext, useState } from 'react';

interface FavoritesContextProps {
  favorites: string[];
  toggleFavorite: (name: string) => void;
}

export const FavoritesPokemonContext = createContext(
  {} as FavoritesContextProps
);

export const FavoritesPokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((favorites) =>
      favorites.includes(name)
        ? favorites.filter((fav) => fav !== name)
        : [...favorites, name]
    );
  };

  return (
    <FavoritesPokemonContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesPokemonContext.Provider>
  );
};
