import React, { useContext } from 'react';
import { getMeteors } from '../api/meteors';
import AppContext from './contexts/AppContext';

function Switchers(): any {
  const { ctx, setCtx } = useContext(AppContext);

  function showFallen(): any {
    getMeteors({ ...ctx, fallen: !ctx.fallen }).then(res => {
      setCtx(prev => ({
        ...prev,
        fallen: !prev.fallen,
        meteors: res.data,
        pages: res.count,
        page: 1, // TODO: Check why it's not working as needed
      }));
    });
  }

  function showImportant(): any {
    getMeteors({ ...ctx, important: !ctx.important }).then(res => {
      setCtx(prev => ({
        ...prev,
        important: !prev.important,
        meteors: res.data,
        pages: res.count,
        page: 1,
      }));
    });
  }

  return (
    <div className="form-inline mb-3">
      <div className="form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          id="fell"
          onChange={() => showFallen()}
        />
        <label className="form-check-label" htmlFor="fell">
          Only fell
        </label>
      </div>

      <div className="form-check ml-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="important"
          onChange={() => {
            showImportant();
          }}
        />
        <label className="form-check-label" htmlFor="important">
          Only important
        </label>
      </div>
    </div>
  );
}

export default Switchers;
