import React, { Component } from 'react';
import { Slide, Image } from 'spectacle';

import ReactIcon from '../assets/reactIcon.svg';

class Intro extends Component {
  render() {
    return (
      <Slide>
        <Image width={1000} src={ReactIcon} />
      </Slide>
    );
  }
}

export default Intro;
