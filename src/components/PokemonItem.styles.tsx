import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkPokemonItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 225px;
  width: 250px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease;
  cursor: pointer;
  color: black;

  img {
    margin-bottom: 1rem;
  }

  .pokemon-name {
    position: absolute;
    bottom: 0;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: #e0e0e0;
    color: black;
  }
`;
