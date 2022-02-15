import React, { useContext, useState } from 'react'
import { SavePokemonContext } from '../../../contexts/SavePokemon';
import { Pokemon } from '../../../../generated/graphql';

export function PokemonRow({ id, sprite, name, height, weight, types, abilities }: Pokemon) {
  const [expanded, setExpanded] = useState(false);
  const { savedPokemons, savePokemon } = useContext(SavePokemonContext);

  return (
    <>
      <tr onClick={(e) => {
        e.stopPropagation(); 
        setExpanded((p) => !p)
      }}>
        <th scope="row">{id}</th>
        <th scope="row"><img src={sprite as string} alt="Pokemon image" /></th>
        <td>{name}</td>
        <td>{types?.join(", ")}</td>
        <td>{height || "-"}</td>
        <td>{weight || "-"}</td>
        <td className="text-center">
          <i className={`bi bi-caret-${expanded ? "up" : "down"}-fill`} />
        </td>
        <td
          className="text-center text-warning"
          onClick={(e) => {
            e.stopPropagation();
            savePokemon({ id, name });
          }}
        >
          <i className={`bi bi-star${savedPokemons.find((pok) => pok.id === id) ? "-fill" : ""}`} />
        </td>
      </tr>
      {expanded && <tr>
        <td colSpan={8}>
          <h5 className='p-3 fw-bold'>Abilities:</h5>
          <ul>{abilities?.map(ab => <li key={ab.ability}>{ab.ability}</li>)}</ul>
        </td>
      </tr>}
    </>
  );
}
