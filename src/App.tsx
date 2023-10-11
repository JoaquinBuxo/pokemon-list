import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { FavoritesPokemonProvider } from './context/FavoritesPokemonContext';

import RootLayout from './layouts/RootLayout';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import PokemonFavorites from './components/PokemonFavorites';
import './App.css';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/pokemon' element={<RootLayout />}>
        <Route index element={<PokemonList />} />
        <Route path=':pokemonName' element={<PokemonDetail />} />
        <Route path='favorites' element={<PokemonFavorites />} />
      </Route>

      <Route path='*' element={<Navigate to='/pokemon' replace />} />
    </>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesPokemonProvider>
        <RouterProvider router={router} />
      </FavoritesPokemonProvider>
    </QueryClientProvider>
  );
}

export default App;
