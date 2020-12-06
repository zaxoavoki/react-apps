import React from 'react';

export type InitialState = {
  meteors: [];
  pages: number;
  page: number;
  important: boolean;
  fallen: boolean;
  sort: {
    field: string;
    order: string;
  };
};

export const initialState: InitialState = {
  meteors: [],
  pages: 0,
  page: 1,
  important: false,
  fallen: false,
  sort: { field: '', order: '' },
};

export const AppContext = React.createContext({
  ctx: initialState,
  setCtx: (
    state: (
      prev: InitialState,
    ) => {
      important: boolean;
      pages: any;
      fallen: boolean;
      meteors: any;
      page: number;
      sort: { field: string; order: string };
    },
  ) => {
    //
  },
});

export default AppContext;
