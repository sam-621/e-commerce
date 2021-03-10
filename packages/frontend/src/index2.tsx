import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app2';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}