import React from 'react';

const PokemonDetail = ({pokemonDetails}) => {

    if (!pokemonDetails) return null;
    const types = pokemonDetails.types.map(typeWhole => {
        return typeWhole.type.name;
    });


    return (
        <div>
            <h1 className="pokemon-names">{pokemonDetails.name}</h1>
            <p><strong>Base Experience: </strong> {pokemonDetails.base_experience} points</p>
            <p><strong>Height: </strong> {pokemonDetails.height} inches</p>
            <p><strong>Weight: </strong> {pokemonDetails.weight} kg</p>
            <p><strong>Type 1:</strong> {types[0]}</p> 
            <p><strong>Type 2:</strong> {types[1]}</p> 
        </div>
    )
}

export default PokemonDetail;