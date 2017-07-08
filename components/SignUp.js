import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

import Feed from './Feed'
import Header from './Header'




export default class SignUp extends React.Component {


  goToFeed(){
    this.props.navigator.push({
      component: Feed,
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
            placeholder="Email"
            style={styles.input} />
          <TextInput
            placeholder="First Name"
            style={styles.input} />
          <TextInput
            placeholder="Last Name"
            style={styles.input} />
          <TextInput
            placeholder="Desired UserName"
            style={styles.input} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input} />
          <Button
            title="Sign Up"
            color="gold"
            onPress={() => this.goToFeed()}
           />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
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

  Login: {
    backgroundColor: 'black',
    flex: 9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,

  },

})
