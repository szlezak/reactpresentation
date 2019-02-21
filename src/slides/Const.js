import React, { Component } from 'react';
import { Text, Heading, Slide, Image } from 'spectacle';

import ConstImage from '../assets/const.png';

class Const extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          Let, Const
        </Heading>
        <Text textColor="white">Block-scoped binding constructs</Text>
        <br />
        <br />
        <Image width={600} src={ConstImage} />
      </Slide>
    );
  }
}

export default Const;
