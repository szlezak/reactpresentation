import React, { Component } from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

import StateImage from '../assets/state.png';

class State extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          State
        </Heading>
        <Text textColor="white">State of component can keep track of information in between any renders that it does</Text>
        <br />
        <Image width={600} src={StateImage} />
      </Slide>
    );
  }
}

export default State;
