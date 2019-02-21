import React, { Component } from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

import JSXImage from '../assets/jsx.png';

class JSX extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          JSX
        </Heading>
        <Text textColor="white">JSX may remind you of a template language, but it comes with the full power of JavaScript</Text>
        <Text textColor="white">Describe what the UI should look like</Text>
        <br />
        <br />
        <br />
        <Image width={500} src={JSXImage} />
      </Slide>
    );
  }
}

export default JSX;

