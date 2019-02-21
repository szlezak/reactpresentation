import React, { Component } from 'react';
import { Slide, Image } from 'spectacle';

import KeepImage from '../assets/keep.png';

class Keep extends Component {
  render() {
    return (
      <Slide>
        <Image width={500} src={KeepImage} />
      </Slide>
    );
  }
}

export default Keep;

