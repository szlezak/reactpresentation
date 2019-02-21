import React, { Component } from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

import ClassComponentImage from '../assets/classComponent.png';

class ClassComponent extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Class Component
        </Heading>
        <Text textColor="white">These components are created using ES6’s class syntax</Text>
        <br />
        <br />
        <br />
        <Image width={1000} src={ClassComponentImage} />
      </Slide>
    );
  }
}

export default ClassComponent;

