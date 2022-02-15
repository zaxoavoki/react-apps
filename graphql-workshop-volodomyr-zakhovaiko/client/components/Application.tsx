import React, { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { SavePokemonContext } from "../contexts/SavePokemon";
import { PokemonList } from './pokemons/list/PokemonList';
import { Saved } from './pokemons/SavedPokemons';

export function Application() {
  const { savedPokemons } = useContext(SavePokemonContext);
  return (
    <>
      <div className='text-center my-3'>
        <Link to="/" className='mx-3'>Home</Link>
        <Link to="/saved">Saved ({savedPokemons.length})</Link>
      </div>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </>
  );
}
