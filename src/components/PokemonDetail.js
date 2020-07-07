import React from 'react';

const PokemonDetail = ({pokemon}) => {

    if (!pokemon) return null;

    return (
        <div>
            <h1 className="pokemon-names">{pokemon.name}</h1>

        </div>
    )
}

export default PokemonDetail;