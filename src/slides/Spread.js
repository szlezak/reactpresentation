import React, { Component } from 'react';
import { Heading, Slide, Image } from 'spectacle';

import SpreadImage from '../assets/spread.png';

class Spread extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Spread Operator
        </Heading>
        <br />
        <br />
        <Image width={600} src={SpreadImage} />
      </Slide>
    );
  }
}

export default Spread;

