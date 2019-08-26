import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Routes from './src/Routes';

export default class App extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Routes/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    
  },
});