import * as React from 'react';
import Store from './store';
import './App.scss';

export default class App extends React.PureComponent {
  render() {
    return (
      <Store />
    );
  }
}
