import React, { Component } from 'react';
import { Heading, Slide, Text } from 'spectacle';

class BasicComponent extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Component
        </Heading>
        <Text textColor="white">The building blocks of any React app</Text>
      </Slide>
    );
  }
}

export default BasicComponent;

