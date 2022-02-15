import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { Application } from './components/Application';
import { BrowserRouter } from "react-router-dom";
import SavePokemonProvider from "./contexts/SavePokemon";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const application = (
  <ApolloProvider client={client}>
    <SavePokemonProvider>
      <BrowserRouter>
        <Application />
    </BrowserRouter>
    </SavePokemonProvider>
  </ApolloProvider>
);

render(application, document.querySelector('#app'));
