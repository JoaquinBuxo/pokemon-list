import { HeaderContainer } from './Header.styles';

interface HeaderProps {
  numPokemon: number;
}

const Header: React.FC<HeaderProps> = ({ numPokemon }) => {
  return (
    <HeaderContainer>
      <img src='logo-pokemon.svg' alt='Pokémon logo' />
      <h4 className='header-title'>Generation 1</h4>
      <p className='header-subtitle'>{numPokemon} pokemon</p>
    </HeaderContainer>
  );
};

export default Header;
