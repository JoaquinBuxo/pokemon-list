import { useState } from 'react';
import { SearchInput } from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchInput
      type='text'
      placeholder='Search Pokémon'
      value={search}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
