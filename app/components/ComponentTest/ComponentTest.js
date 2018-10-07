import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class ComponentTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'UserName',
      showName: true,
      messageProps: this.props.messageProps
    }
  }

  static defaultProps = {
    message: 'Hi there - default props'
  }

  render() {
    let name = this.state.showName ? this.state.name : 'No name';
    console.log('HELLOOOOOOOOOOOOOOO!');
    return (
      <View>
        <Text>HELLO BLYAT! First component here</Text>
        <Text>Name from state: {name}</Text>
        <Text>Message from PROPS: {this.props.message}</Text>
        <Text>Message from constructor: {this.state.messageProps}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ComponentTest', () => ComponentTest);