import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: white;
  border-radius: 5px;
  border: 2px solid black;
  color: black;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
  width: 20%;

  &:hover {
    background-color: black;
    color: white;
  }
`;
