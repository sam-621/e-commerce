import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import { Register, Login, Home, Payment } from './components/pages/';

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:productID" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
};

export default app;
