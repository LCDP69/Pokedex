import React from 'react';

const PokemonCard = (props) => {
    console.log(props.pokemon);

    const { name, imgSrc } = props.pokemon;

    return (
        <figure>
            {imgSrc ? (
                <img src={imgSrc} alt={name} />) : (
                <p>???</p>
            )}
            <figcaption>{name}</figcaption>
        </figure>
    );

};

export default PokemonCard;
