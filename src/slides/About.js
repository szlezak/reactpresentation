import React, { Component } from 'react';
import { Text, Heading, Slide, List, ListItem } from 'spectacle';

class About extends Component {
  render() {
    return (
      <Slide>
        <Heading size={1} textColor="secondary">
          React
        </Heading>
        <Text textColor="white">learn once, write anywhere</Text>
        <br />
        <br />
        <br />
        <List>
          <ListItem textColor="white">JavaScript library created by Facebook</ListItem>
          <ListItem textColor="white">used for building User Interface</ListItem>
          <ListItem textColor="white">lets you build UI Components</ListItem>
        </List>
      </Slide>
    );
  }
}

export default About;

