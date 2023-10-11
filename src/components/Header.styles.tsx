import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  .header-title {
    margin-bottom: 0;
  }

  .header-subtitle {
    margin-top: 0;
  }
`;

export const FavoritesLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;
  background-color: #fccb07;
  border-radius: 5px;
  border: 2px solid #3a5da8;
  color: #3a5da8;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #3a5da8;
    color: #fccb07;
  }

  @media (min-width: 900px) {
    float: right;
    margin-bottom: 20px;
  }
`;
