import React, { Component } from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

import PropsImage from '../assets/props.png';

class Props extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Props
        </Heading>
        <Text textColor="white">Props are how components talk to each other</Text>
        <br />
        <br />
        <br />
        <Image width={1000} src={PropsImage} />
      </Slide>
    );
  }
}

export default Props;
