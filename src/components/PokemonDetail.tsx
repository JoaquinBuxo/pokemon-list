import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Pokemon } from '../types/pokemon';
import { fetchOnePokemon } from '../services/apiService';
import { PokemonCard, CloseButton } from './PokemonDetail.styles';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (pokemonName) {
      setIsLoading(true);
      fetchOnePokemon(pokemonName)
        .then((data) => {
          setPokemon(data);
          setError(null);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [pokemonName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        An error occurred: {error.message}
        <br />
        It's likely that the Pokémon {pokemonName} does not exist or we do not
        have data about it.
      </div>
    );
  }

  if (!pokemon) {
    return <div>No Pokémon found</div>;
  }

  const handleClose = () => {
    navigate(-1);
  };

  const imageUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`;

  return (
    <PokemonCard>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <img src={imageUrl} alt={pokemonName} />
      <p className='pokemon-name'>{pokemon.name}</p>
      <p className='pokemon-detail'>
        <span className='pokemon-detail-title'>Types: </span>
        {pokemon.types.map((type) => type.type.name).join(', ')}
      </p>
      <p className='pokemon-detail'>
        <span className='pokemon-detail-title'>ID: </span> {pokemon.id}
      </p>
      <p className='pokemon-detail'>
        <span className='pokemon-detail-title'>Height: </span> {pokemon.height}
      </p>
      <div className='pokemon-detail'>
        <span className='pokemon-detail-title'>Abilities:</span>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </PokemonCard>
  );
};

export default PokemonDetail;
