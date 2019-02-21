import React, { Component } from 'react';
import { Text, Heading, Slide, Image } from 'spectacle';

import ClassesImage from '../assets/classes.png';

class Classes extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Classes
        </Heading>
        <Text textColor="white">Classes are in fact "special functions", syntactic sugar</Text>
        <br />
        <br />
        <Image width={600} src={ClassesImage} />
      </Slide>
    );
  }
}

export default Classes;
