import { Pokemon } from "../generated/graphql";

export type SavePokemonValue = {
  savedPokemons: Pokemon[];
  savePokemon: (pokemon: Pick<Pokemon, 'id' | 'name'>) => void;
}

export type SortableHeaderProps = {
  title: string; 
  type: 'text' | 'number';
}