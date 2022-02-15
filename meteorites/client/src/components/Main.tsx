import React, { useEffect, useContext } from 'react';

import AppContext, { InitialState } from './contexts/AppContext';
import { getMeteors } from '../api/meteors';

import Pagination from './Pagination';
import Switchers from './Switchers';

import TBody from './table/TBody';
import THead from './table/THead';

const Main: React.FC<any> = () => {
  const { ctx, setCtx } = useContext(AppContext);

  useEffect(() => {
    getMeteors({ ...ctx }).then(res =>
      setCtx((prev: InitialState) => ({
        ...prev,
        meteors: res.data,
        pages: res.count,
      })),
    );
  }, []);

  return (
    <div className="container">
      <Switchers />
      <table className="table table-bordered">
        <THead />
        <TBody />
      </table>
      <Pagination />
    </div>
  );
};

export default Main;
