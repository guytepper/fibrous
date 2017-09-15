import React, { Component } from 'react';
import './App.css';
import FoodsTable from './components/FoodsTable/FoodsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fibrous</h1>
        <h2>Easily check for insoluble / soluble fiber content in foods</h2>
        <div className="table-container">
          <FoodsTable className="test" />
        </div>        
      </div>
    );
  }
}

export default App;
