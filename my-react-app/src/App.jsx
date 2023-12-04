import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Mon Pokémon</h1>
        <div>
          <PokemonCard />
        </div>
      </div>
    </>
  )
}

export default App
