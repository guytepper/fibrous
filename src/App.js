import React, { Component } from 'react';
import './App.css';
import FoodsTable from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodsTable />
      </div>
    );
  }
}

export default App;
