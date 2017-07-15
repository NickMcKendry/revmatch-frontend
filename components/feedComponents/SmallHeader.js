import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

export default class SmallHeader extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.topbartext}>Revmatch<Image source={require('../logofinal.png')} style={styles.img} /></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: .1,
    height: 1
  },

  topbar: {
    flex: 0,
    width: "100%",
    backgroundColor: '#030301',
  },

  topbartext: {
    color: "#00D9C0",
    textAlign: 'center',
    fontSize: 45,
    fontFamily: 'Futura',
    paddingTop: 20

  },

  img: {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
    marginTop: 25,
    marginLeft: 5
  }
})
