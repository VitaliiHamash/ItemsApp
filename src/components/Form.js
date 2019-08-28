import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions} from 'react-native-router-flux';

export default class Logo extends Component {


    MainScreen(){
        Actions.MainScreen()
      }



    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox} placeholder="Name" 
                placeholderTextColor ="#3b3b3b"
                onSubmitEditing={() => this.password = input}
                />
                <TextInput style={styles.inputBox}
                placeholder="Password" 
                placeholderTextColor ="#3b3b3b"
                secureTextEntry={true}
                selectionColor="#fff"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.MainScreen}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    inputBox: {
        width:300,
        backgroundColor:'#E6E6E6',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize:16,
        color:'#3b3b3b',
        marginVertical: 10
    },
    button:{
        width:300,
        backgroundColor:'#FF0266',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "400",
        color:'#ffffff',
        textAlign:"center"
    }
  });
