import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

import React, { Component } from 'react';
import CarContext from './context/CarContext';
import TrafficContext from './context/TrafficContext';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' }
    }

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(color, value) {
    this.setState({
      cars: { ...this.state ,[color]: value },
    });
  }

  changeSignal(color) {
    this.setState({
      ...this.state,
      signal: color,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    return (
      <div className="container">
        <CarContext.Provider value={contextValue}>
          <TrafficContext.Provider value={contextValue}>
            <Cars />
            <TrafficSignal />
          </TrafficContext.Provider>
        </CarContext.Provider>
      </div>
    );
  }
}

export default App
