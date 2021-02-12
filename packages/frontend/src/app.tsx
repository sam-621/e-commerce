import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import { Register, Login, Home, Payment, Main, Cart } from './components/pages/';
import { CartContextProvider } from './context/cart';

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <CartContextProvider>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/cart" component={Cart} />
          <Route exact path="/home/:productID" component={Payment} />
        </CartContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default app;
