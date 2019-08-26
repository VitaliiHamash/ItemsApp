import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image source={require('../images/logo.gif')} />
            <Text style={styles.logoText}>Join us on Items App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:"flex-end",
      alignItems:"center"
    },
    logoText: {
        fontSize:22,
        marginVertical:10,
        fontWeight:"bold",
        color:"#949494"
    }
  });
