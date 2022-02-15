import React, { useContext } from 'react';

import { getMeteors } from '../api/meteors.js';
import AppContext from './contexts/AppContext';

function Pagination(): any {
  const { ctx, setCtx } = useContext(AppContext);

  return (
    <nav>
      {ctx.pages < 2 ? (
        ''
      ) : (
        <ul className="pagination justify-content-center">
          {ctx.page < 2 ? (
            ''
          ) : (
            <li
              className="page-item"
              onClick={() => {
                getMeteors({
                  ...ctx,
                  page: ctx.page - 1,
                }).then(res => {
                  setCtx(prev => ({
                    ...prev,
                    meteors: res.data,
                    pages: res.count,
                    page: prev.page - 1,
                  }));
                });
              }}
            >
              <p className="page-link">
                <span>&laquo;</span>
                <span className="sr-only">Previous</span>
              </p>
            </li>
          )}
          {Array.from({ length: ctx.pages }).map((e: any, i: number) => [
            <li
              key={i}
              className={`page-item ${i + 1 === ctx.page ? 'active' : ''}`}
              onClick={() => {
                getMeteors({
                  ...ctx,
                  page: i + 1,
                }).then(res => {
                  setCtx(prev => ({
                    ...prev,
                    page: i + 1,
                    meteors: res.data,
                    pages: res.count,
                  }));
                });
              }}
            >
              <p className="page-link">{i + 1}</p>
            </li>,
          ])}
          {ctx.page > ctx.pages - 1 ? (
            ''
          ) : (
            <li
              className="page-item"
              onClick={() => {
                getMeteors({
                  ...ctx,
                  page: ctx.page + 1,
                }).then(res => {
                  setCtx(prev => ({
                    ...prev,
                    page: prev.page + 1,
                    meteors: res.data,
                    pages: res.count,
                  }));
                });
              }}
            >
              <p className="page-link">
                <span>&raquo;</span>
                <span className="sr-only">Next</span>
              </p>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Pagination;
