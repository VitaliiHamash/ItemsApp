import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar,TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions} from 'react-native-router-flux';
export default class Login extends Component {
    
  signup(){
    Actions.signup()
  }
  
    render() {
        return (
            
           <View style={styles.container}>
               <Logo/>
               <Form type="Login"/>
               <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Sign Up</Text></TouchableOpacity>
               </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    signupTextCont:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical:16,
      flexDirection:'row',
      color:"#FF0266"
    },

    signupText:{
        fontSize:16
    },
    signupButton:{
      color:"#FF0266",
      fontSize:16,
      fontWeight:"500"
    }

  });