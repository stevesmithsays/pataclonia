import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>        
        <Hero/>
        <Shop/>
      </div>
    );
  }
}

export default App;
