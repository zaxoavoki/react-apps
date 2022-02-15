import { getAllPockemons, getAllTypes, getOnePokemonByUrl } from './pockemon.service';

export const Query = {
  pokemons: (_, args) => getAllPockemons({ limit: args.limit, offset: args.offset }),
  pokemon: (_, args) => getOnePokemonByUrl(`${process.env.SERVER_URI}/pokemon/` + args.id),
  types: () => getAllTypes(),
};

export const Pokemon = {
  friends: async (root) => {
    const pokemon = await getOnePokemonByUrl(`${process.env.SERVER_URI}/pokemon/` + root.id);
    return pokemon.friends;
  }
};
