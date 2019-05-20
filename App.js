import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/store/Store';
import Config from './src/screens/Config';

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'S4N' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Config />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
