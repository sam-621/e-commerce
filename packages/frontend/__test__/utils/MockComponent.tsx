import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MockComponent = ({ Component }: IMockComponent) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {Component}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

interface IMockComponent {
  Component: ReactElement;
}

export default MockComponent;
