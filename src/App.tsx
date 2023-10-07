import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonList from './components/PokemonList';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
}

export default App;
