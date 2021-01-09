import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import Register from './components/pages/Register';

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default app;
