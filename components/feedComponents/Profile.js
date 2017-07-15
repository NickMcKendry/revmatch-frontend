import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

import SmallHeader from './SmallHeader'

export default class Home extends Component {


  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../../Icons/Wheel-nav.png')} style={styles.img}></Image>
      )

  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Profile</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    height: "50%",
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: "space-between",
  },

  text: {
    justifyContent: 'center',
    fontSize: 100
  },

  img : {
    width: 35,
    height: 'auto',
    flex: 1
  }
})
