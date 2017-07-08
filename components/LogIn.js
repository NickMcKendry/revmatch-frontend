import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';



import Feed from './Feed'
import Header from './Header'
import SignUp from './SignUp'


export default class LogIn extends React.Component {


  goToFeed(){
    this.props.navigator.push({
      component: Feed,
      interactivePopGestureEnable: true,
      navigationBarHidden: true,

    })
  }

  goToSignUp(){
    this.props.navigator.push({
      component: SignUp,
      interactivePopGestureEnable: true,
      navigationBarHidden: true,
    })
  }



  render() {



    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.Login}>
          <TextInput
            placeholder="UserName"
            style={styles.input} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input} />
          <Button
            title="Log In"
            color="#00D9C0"
            onPress={() => this.goToFeed()}
           />

        </View>
        <View style={styles.newAccount}>
          <Button
            title="Need an account? Sign up here!"
            color="#030301"
            style={styles.newAccountButton}
            onPress={() => this.goToSignUp()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -50,
    backgroundColor: '#00D9C0',
    alignItems: 'center',
    justifyContent: 'center',

  },



  Login: {
    backgroundColor: '#030301',
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,

  },

  input : {
    height: 40,
    width: '100%',
    borderColor: '#FFFFF3',
    borderWidth: 1,
    textAlign: 'center',
    color: '#5CE6D6',
    marginTop: 15
  },

  button: {

    height: 10,
    width: 100
  },

  newAccount: {
    height: 100,
    width: 500
  },

  newAccountButton: {
    width: 100,
    height: 100
  },





});
