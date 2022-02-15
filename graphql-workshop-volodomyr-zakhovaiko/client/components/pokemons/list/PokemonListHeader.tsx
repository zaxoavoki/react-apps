import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Type } from '../../../../generated/graphql';
import GET_TYPES from '../../../queries/getTypes.graphql';

export function PokemonListHeader({ handleTypeSelect, handleNameInput }) {
  const { data, error } = useQuery(gql(GET_TYPES));

  return (
    <div className="w-50 mx-auto mb-3">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
          onChange={handleNameInput}
        />
      </div>
      {!error && <select onChange={handleTypeSelect} defaultValue="all" className="form-select">
        <option defaultValue={"all"}>All</option>
        {data && data.types.results.map((type: Type) => <option key={type.name} defaultValue={type.name as string}>{type.name}</option>)}
      </select>}
    </div>
  );
}
