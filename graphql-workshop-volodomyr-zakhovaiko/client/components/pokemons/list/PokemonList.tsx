import React, { useState } from 'react';
import _ from 'lodash';
import config from '../../../config';
import { useFilteredPokemons } from '../../../hooks/useFilteredPokemons';
import { Spinner } from '../../layout/Spinner';
import { PokemonRow } from './PokemonRow';
import { Pagination } from '../../layout/Pagination';
import { SortableHeader } from '../../helpers/SortableHeader';
import { Error } from '../../layout/Error';
import { PokemonListHeader } from './PokemonListHeader';
import { Pokemon } from '../../../../generated/graphql';

export function PokemonList() {
  const { data, loading, error, handlePageChange, handleTypeSelect, handleNameInput } = useFilteredPokemons();
  const [page, setPage] = useState(1);

  if (error) {
    <Error />;
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <PokemonListHeader
        handleNameInput={handleNameInput}
        handleTypeSelect={handleTypeSelect}
      />
      {!data?.result && data?.results.length === 0 && <h4 className='my-5'>There is no pokemons yet</h4>}
      {data?.results.length > 0 && <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <SortableHeader title="Name" type="text" />
            <th scope="col">Types</th>
            <SortableHeader title="Height, cm" type="number" />
            <SortableHeader title="Weight, g" type="number" />
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data?.results.map((pokemon: Pokemon) => (
            <PokemonRow key={pokemon.id} {...pokemon} />
          ))}
        </tbody>
      </table>}
      <Pagination
        page={page}
        setPage={setPage}
        onChange={handlePageChange}
        count={Math.floor(data?.count / config.ITEMS_PER_PAGE)}
      />
    </div>
  );
}
