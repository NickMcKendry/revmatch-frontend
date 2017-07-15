import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';



import Feed from './Feed'
import Header from './Header'
import SignUp from './SignUp'
import Root from '../Root'



export default class LogIn extends React.Component {


  goToFeed(){
    this.props.navigator.push({
      component: Root,
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

          <Image style={styles.background} source={require('./bg.png')}>

          <View style={styles.Login}>

            <Header />

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
              color="#00D9C0"
              style={styles.newAccountButton}
              onPress={() => this.goToSignUp()}
            />

          </View>
        </Image>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

  },



  Login: {
    backgroundColor: 'transparent',
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    opacity: 1,
    height: 800

  },

  input : {
    height: 40,
    width: '100%',
    borderColor: '#FFFFF3',
    borderWidth: 1,
    textAlign: 'center',
    color: '#5CE6D6',
    backgroundColor: 'black',
    opacity: .9,
    marginTop: 15,

  },

  button: {

    height: 10,
    width: 100
  },

  newAccount: {
    height: 100,
    width: 500,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },

  newAccountButton: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    color: '#5CE6D6'
  },

  background: {
    backgroundColor: "#030301",
    opacity: 1,
    resizeMode: 'cover'
  }





});
