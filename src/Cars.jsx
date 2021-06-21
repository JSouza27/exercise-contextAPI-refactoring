// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

import CarContext from './context/CarContext';

function Cars() {
  return (
    <CarContext.Consumer>
      {
        ({ cars: { red, blue, yellow }, moveCar }) => (
          <div>
            <div>
              <img
                className={red ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => moveCar('red', !red)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={blue ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => moveCar('blue', !blue)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={yellow ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => moveCar('yellow', !yellow)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
        )
      }
    </CarContext.Consumer>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow});

// const mapDispatchToProps = { moveCar };

export default Cars;