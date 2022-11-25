import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';
import Nav from './components/Nav/index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Browse from './pages/Browse';
import SingleItem from './pages/SingleItem';
import Footer from './components/Footer/index';
import CartPage from './pages/Cart';
import Success from './pages/Success'


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
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="/browse" 
              element={<Browse />} 
            />
            <Route 
              path="/products/:id" 
              element={<SingleItem />} 
            />
            <Route 
              path="/cart" 
              element={<CartPage />} 
            />
            <Route 
                path="/success" 
                element={<Success />} 
              />
          </Routes>
          <div className='footer-location'><Footer /></div>
        </StoreProvider>
      </Router>

    </ApolloProvider>
  );
}

export default App;
