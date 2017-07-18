import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, TouchableOpacity, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Facebook, Google } from 'expo'

import { connect } from 'react-redux'

import { login } from './auth/actions'

import fbConfig from '../constants/fbConfig'
import googleConfig from '../constants/googleConfig'



import Feed from './Feed'
import Header from './Header'
import SignUp from './SignUp'
import Root from '../Root'
import LoadingScreen from './LoadingScreen'


@connect(state => ({
  isLoading: state.auth.isLoading
}), {login})
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

_onLoginPress = name => {
  if(name === 'facebook') {
    this._loginWithFacebook()
  } else {
    this._loginWithGoogle()
  }
}

async _loginWithFacebook(){
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
    permissions: ['public_profile', 'email' ]
  })

  if(type === 'success'){
    this.props.login(token, 'facebook')
  } else {
    throw new Error('Something went wrong, try again!')
  }

}

async _loginWithGoogle(){
  try{
    const result = await Google.logInAsync({
      iosClientId: googleConfig.CLIENT_ID_IOS,
      scope: ['profile', 'email']
    })

    if(result.type === 'success'){
      this.props.login(result.accessToken, 'google')
    } else {
      console.log('failed');

      return{ cancelled: true}
    }
  } catch(e){
    throw e
  }
}


  render() {

    if(this.props.isLoading){
        return <LoadingScreen />

    }

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
              fontSize={30}
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

          <TouchableOpacity style={styles.facebookLogin} onPress={() => this._onLoginPress('facebook')}>
            <Text style={styles.facebookText}>Connect</Text>
            <MaterialCommunityIcons name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleLogin} onPress={() => this._onLoginPress('google')}>
            <Text style={styles.googleText}>Connect</Text>
            <MaterialCommunityIcons name="google" size={30} color="#db3236" />
          </TouchableOpacity>
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

  facebookLogin: {
    backgroundColor: "#030301",
    opacity: .9,
    flexDirection: 'row',
    width: '50%',
    alignSelf: 'center',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 25
  },

  googleLogin: {
    backgroundColor: "#030301",
    opacity: .9,
    flexDirection: 'row',
    width: '50%',
    alignSelf: 'center',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 25,
    marginVertical: 5
  },

  facebookText: {
    color: '#3b5998',
    fontSize: 30,
    fontFamily: 'Futura',
    left: 10
  },

  googleText: {
    color: '#db3236',
    fontSize: 30,
    fontFamily: 'Futura',
    left: 10
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
  },







});
