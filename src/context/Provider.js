import React from 'react';

import MyContext from './MyContext';

class Provider extends React.Component {
  constructor () {
    super();

    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, value) {
    console.log(car, value);
    this.setState({ [car]: value });
  }

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        { children }
      </MyContext.Provider>
    )
  }
}

export default Provider;
