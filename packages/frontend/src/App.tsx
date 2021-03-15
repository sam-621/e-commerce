import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import {
  Register,
  Login,
  Home,
  Payment,
  Main,
  Cart,
  User,
  UserProducts,
} from './components/pages/';
import { CartContextProvider } from './context/cart/cart';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <CartContextProvider>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:productID" component={Payment} />
          <ProtectedRoute path="/cart" Component={Cart} />
          <ProtectedRoute path="/user" Component={User} />
          <ProtectedRoute path="/user/products" Component={UserProducts} />
        </CartContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
