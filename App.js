import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainMenu from './Container/MainMenu';
import Start from './Container/Start';
import Account from './Container/Account';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: Start
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <this.state.currentScreen/>
        <MainMenu handleScreenChange={this.handleScreenChange}/>
      </View>
    );
  };

  handleScreenChange = newScreen => {
    let screen = null;

    switch (newScreen) {
      case 'Account':
        screen = Account;
        break;
      case 'Start':
        screen = Start;
        break;
      default:
        screen = Start;
    }

    this.setState({currentScreen: screen});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white'
  },
});
