import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Nav from './components/Nav/index';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  )
}

export default App;
