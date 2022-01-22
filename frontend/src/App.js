import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
<BrowserRouter>
<div className="grid-container">
  <header className="row">
    <div>
      <a className="brand" href="/">Silk Road Home</a>
    </div>
    <div>
      <a href="/cart">Cart</a>
      <a href="/signin">Sign In</a>
    </div>
  </header>
  <main>
    <Route component={HomeScreen} exact path="/"></Route> 
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/cart/:id?" component={CartScreen}></Route>
  </main>
  <footer className="row center">
    All Rights Reserved
  </footer>
</div> 
</BrowserRouter>
  );
}

export default App;
