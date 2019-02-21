import React, { Component } from 'react';
import { Text, Heading, Slide, List, ListItem } from 'spectacle';

class ES6 extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          ES6
        </Heading>
        <Text textColor="white">ECMAScript 6 is going to be the next major revision of ECMAScript, which is the language which is often seen implemented as JavaScript</Text>
        <br />
        <br />
        <List>
          <ListItem textColor="white">Classes</ListItem>
          <ListItem textColor="white">Arrow function</ListItem>
          <ListItem textColor="white">Let, Const</ListItem>
          <ListItem textColor="white">Destructuring</ListItem>
          <ListItem textColor="white">Spread operator</ListItem>
          <ListItem textColor="white">Template Strings</ListItem>
        </List>
      </Slide>
    );
  }
}

export default ES6;

