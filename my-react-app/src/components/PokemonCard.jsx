import React from 'react';


const PokemonCard = () => {
    return (
        <figure>
            {pokemonList.map((pokemon) => (
                <>
                    {pokemon.imgSrc ? (<> <img src={pokemon.imgSrc} alt={pokemon.name} />
                        <figcaption>{pokemon.name}</figcaption></>) : <figcaption><p>???</p></figcaption>}
                </>
            ))}

        </figure>
    );

};


const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard;
