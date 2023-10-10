import styled from 'styled-components';

export const PokemonCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  text-align: left;
  width: 350px;

  .pokemon-name {
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
  }

  .pokemon-detail {
    width: 100%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
  }

  .pokemon-detail-title {
    font-size: 1.2em;
    font-weight: bold;
  }

  img {
    align-self: center;
    margin-bottom: 20px;
    margin-top: 1.5em;
    width: 5em;
  }

  ul {
    padding-left: 40px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 1.2em;
  padding: 1em;
`;
