import React, { Component } from 'react';
import { Text, Heading, Slide, Image } from 'spectacle';

import DestructuringImage from '../assets/destructuring.png';

class Destructuring extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Destructuring
        </Heading>
        <Text textColor="white">JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables</Text>
        <br />
        <Image width={600} src={DestructuringImage} />
      </Slide>
    );
  }
}

export default Destructuring;
