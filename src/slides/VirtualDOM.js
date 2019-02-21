import React, { Component } from 'react';
import { Heading, Slide, Text } from 'spectacle';

class VirtualDOM extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Virtual DOM
        </Heading>
        <Text textColor="white">Reducing calls to DOM API involves keeping DOM tree representation in memory</Text>
      </Slide>
    );
  }
}

export default VirtualDOM;

