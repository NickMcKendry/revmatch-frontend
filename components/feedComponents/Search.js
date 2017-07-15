import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

import SmallHeader from './SmallHeader'

export default class Home extends Component {

  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../../Icons/Search-Nav.png')} style={styles.img}></Image>
      )

  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Search
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    height: "50%",
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: "space-between",
  },

    text: {
      justifyContent: 'center',
      fontSize: 100
    },

    img : {
      width: 30,
      height: 'auto',
      paddingTop: 10,
      flex: 1
    }
})
