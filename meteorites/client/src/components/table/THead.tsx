import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { getMeteors } from '../../api/meteors';

import Sort from '../icons/Sort';

function THead(): any {
  const { ctx, setCtx } = useContext(AppContext);

  function getOrder(field: string): string {
    if (ctx.sort.field !== field) return 'asc';
    if (ctx.sort.order === 'asc') return 'desc';
    if (ctx.sort.order === 'desc') return 'none';
    if (ctx.sort.order === 'none') return 'asc';
    return 'asc';
  }

  function changeSort(field: string): any {
    getMeteors({
      ...ctx,
      sort: {
        field,
        order: getOrder(field),
      },
    }).then(res => {
      setCtx(prev => {
        return {
          ...prev,
          pages: res.count,
          meteors: res.data,
          sort: {
            field,
            order: getOrder(field),
          },
        };
      });
    });
  }

  const heads = [
    { field: 'date', title: 'Date' },
    { field: 'name', title: 'Name' },
    { field: 'mass', title: 'Mass [g]' },
    { field: 'fall', title: 'Fell' },
    { disabled: true, title: 'Location', field: '' },
    { field: 'important', title: 'Important' },
  ];

  return (
    <thead>
      <tr>
        {heads.map((e, i) =>
          e.disabled ? (
            <th key={i} className="disabled-sort">
              {e.title}
            </th>
          ) : (
            <th
              key={i}
              className={`${
                e.field === ctx.sort.field && ctx.sort.order !== 'none'
                  ? 'bg-selected'
                  : ''
              }`}
              onClick={(): void => {
                changeSort(e.field);
              }}
            >
              <Sort order={getOrder(e.field)} /> {e.title}
            </th>
          ),
        )}
      </tr>
    </thead>
  );
}

export default THead;
