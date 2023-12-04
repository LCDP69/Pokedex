import React from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css'

const App = () => {
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

  const selectedPokemon = pokemonList[0];

  return (
    <div>
      <h1>Mon Pokémon</h1>
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
};


export default App
