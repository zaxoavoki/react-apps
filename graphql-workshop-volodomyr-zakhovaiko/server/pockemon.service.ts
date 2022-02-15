import fetch from "node-fetch";
import friendsData from './data.json';
import { GetPokemonsQueryVariables, Pokemon, PokemonsResponse } from "../generated/graphql";

export async function getAllPockemons({ limit = 10, offset }: GetPokemonsQueryVariables): Promise<PokemonsResponse> {
  const res = await fetch(`${process.env.SERVER_URI}/pokemon?limit=${limit}${offset ? '&offset=' + offset : ''}`);
  const data = await res.json();

  const pokemonsDetails = await Promise.all(data.results.map((pokemon) => getOnePokemonByUrl(pokemon.url)));
  return {
    ...data,
    results: pokemonsDetails,
  };
}

export async function getOnePokemonByUrl(url: string, depth = 1): Promise<Pokemon> {
  const res = await fetch(url);
  const data = await res.json();

  data.sprite = data.sprites.back_default;
  data.types = data.types.map(type => type.type.name);
  data.stats = data.stats.map(stat => ({ effort: stat.effort, base_stat: stat.base_stat, name: stat.stat.name }));
  data.abilities = data.abilities.map(abs => ({ is_hidden: abs.is_hidden, ability: abs.ability.name }));

  const friendsID = friendsData['who-likes-who'][data.id];
  if (depth < 2 && friendsID && Array.isArray(friendsID)) {
    const friends = await Promise.all(friendsID.map(friend => getOnePokemonByUrl(`${process.env.SERVER_URI}/pokemon/${friend}`, 2)));
    data.friends = friends;
  }

  return data;
}

export async function getAllTypes() {
  let res = await fetch(`${process.env.SERVER_URI}/type?limit=1`);
  let data = await res.json();

  res = await fetch(`${process.env.SERVER_URI}/type?limit=${data.count}`);
  data = await res.json();

  return data;
}