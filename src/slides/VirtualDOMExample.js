import React, { Component } from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

import VirtualDOMImage from '../assets/virtualDOM.png';

class VirtualDOMExample extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Virtual DOM
        </Heading>
        <br />
        <Image width={800} src={VirtualDOMImage} />
      </Slide>
    );
  }
}

export default VirtualDOMExample;
