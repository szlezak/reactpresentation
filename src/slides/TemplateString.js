import React, { Component } from 'react';
import { Text, Heading, Slide, Image } from 'spectacle';

import TemplateImage from '../assets/teamplate.png';

class TemplateStrings extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Template Strings
        </Heading>
        <Text textColor="white">Template literals are string literals allowing embedded expressions</Text>
        <br />
        <br />
        <Image width={1000} src={TemplateImage} />
      </Slide>
    );
  }
}

export default TemplateStrings;
