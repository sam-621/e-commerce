import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import { Main } from './components/pages/';
import Login from './components/modules/Login/Login';
import Register from './components/modules/Register/Register';
import Home from './components/modules/Home/Home';
import Payment from './components/modules/Payment/Payment';
import Cart from './components/modules/Cart/Cart';
import User from './components/modules/User/User';
import UserProducts from './components/modules/User/userProductsPage/UserProducts';
import UserCart from './components/modules/User/userCarts/UserCart';

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
          <ProtectedRoute path="/user/cart" Component={UserCart} />
        </CartContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
