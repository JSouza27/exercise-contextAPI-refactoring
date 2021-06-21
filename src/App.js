import './App.css';
import Cars from './Cars';

import React, { Component } from 'react'
import MyContext from './context/MyContext';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, value) {
    this.setState({
      cars: { [color]: value }
    });
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    )
  }
}

export default App

