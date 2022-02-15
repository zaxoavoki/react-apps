import React, { useContext } from 'react'
import { SavePokemonContext } from '../../contexts/SavePokemon'

export function Saved() {
  const { savedPokemons } = useContext(SavePokemonContext);
  return (
    <div className='container'>
      <h4>Saved pokemons:</h4>
      <ul>{savedPokemons.map(pok => <li key={pok.id}>{pok.name}</li>)}</ul>
    </div>
  )
}
