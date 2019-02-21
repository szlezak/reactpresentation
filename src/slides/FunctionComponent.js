import React, { Component } from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

import FunctionComponentImage from '../assets/functionComponent.png';

class FunctionComponent extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Function Component
        </Heading>
        <Text textColor="white">These components are purely presentational and are simply represented by a function</Text>
        <br />
        <br />
        <br />
        <Image width={1000} src={FunctionComponentImage} />
      </Slide>
    );
  }
}

export default FunctionComponent;


