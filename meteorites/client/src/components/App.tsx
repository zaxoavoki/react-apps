import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/App.css';
import Main from './Main';
import AppContext, { initialState } from './contexts/AppContext';

const App: React.FC = () => {
  const [ctx, setCtx] = useState(initialState);

  return (
    <AppContext.Provider value={{ ctx, setCtx }}>
      <Main />
    </AppContext.Provider>
  );
};

export default App;
