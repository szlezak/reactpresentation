import React, { Component } from 'react';
import { Text, Heading, Slide, Image } from 'spectacle';

import ArrowImage from '../assets/arrow.png';

class Arrow extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Arrow Function
        </Heading>
        <br />
        <br />
        <Image width={1000} src={ArrowImage} />
      </Slide>
    );
  }
}

export default Arrow;
