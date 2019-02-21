import React, { Component } from 'react';
import createTheme from 'spectacle-theme-nova';
import { Deck } from 'spectacle';

import Intro from './slides/Intro';
import About from './slides/About';
import VirtualDOM from './slides/VirtualDOM';
import VirtualDOMExample from './slides/VirtualDOMExample';
import BasicComponent from './slides/Component';
import ClassComponent from './slides/ClassComponent';
import FunctionComponent from './slides/FunctionComponent';
import Props from './slides/Props';
import State from './slides/State';
import JSX from './slides/JSX';
import ES6 from './slides/ES6';
import Classes from './slides/Classes';
import Arrow from './slides/Arrow';
import Const from './slides/Const';
import Destructuring from './slides/Destructuring';
import Spread from './slides/Spread';
import TemplateString from './slides/TemplateString';
import Thinking from './slides/Thinking';
import Keep from './slides/Keep';

require('normalize.css');

const theme = createTheme();

class Presentation extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Intro />
        <About />
        <VirtualDOM />
        <VirtualDOMExample />
        <BasicComponent />
        <ClassComponent />
        <FunctionComponent />
        <Props />
        <State />
        <JSX />
        <ES6 />
        <Classes />
        <Arrow />
        <Const />
        <Destructuring />
        <Spread />
        <TemplateString />
        <Thinking />
        <Keep />
      </Deck>
    );
  }
}

export default Presentation;

