import React, { createContext, useEffect, useState } from 'react';
import { Pokemon } from '../../generated/graphql';
import { SavePokemonValue } from '../types';

const LOCALSTORAGE_ITEM_NAME = 'pokemons';

export const initialSavePokemonState = [];
export const SavePokemonContext = createContext<SavePokemonValue>({
  savePokemon: () => {},
  savedPokemons: initialSavePokemonState,
});

export default function SavePokemonProvider({ children }) {
  const [savedPokemons, setSavedPokemons] = useState<Pokemon[]>(() => {
    // Read localStorage on page refresh
    const pokemons = localStorage.getItem(LOCALSTORAGE_ITEM_NAME);
    return pokemons ? JSON.parse(pokemons) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_ITEM_NAME, JSON.stringify(savedPokemons));
  }, [savedPokemons]);

  function savePokemon(pokemon: Pick<Pokemon, 'id' | 'name'>) {
    setSavedPokemons((prev) => {
      if (prev.find(pok => pok.id === pokemon.id)) {
        return prev.filter(pok => pok.id !== pokemon.id);
      }
      return [...prev, pokemon];
    });
  }
  
  return (
    <SavePokemonContext.Provider value={{ savedPokemons, savePokemon }}>
      {children}
    </SavePokemonContext.Provider>
  )
}
