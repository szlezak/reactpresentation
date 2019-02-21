import React, { Component } from 'react';
import { Heading, Slide, Image } from 'spectacle';

import ThinkingImage from '../assets/thinking.png';

class Thinking extends Component {
  render() {
    return (
      <Slide>
        <Heading size={2} textColor="secondary">
          Thinking in React
        </Heading>
        <br />
        <Image width={2200} src={ThinkingImage} />
      </Slide>
    );
  }
}

export default Thinking;
