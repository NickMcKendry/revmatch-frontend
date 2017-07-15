import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, TouchableHighlight, TouchableOpacity } from 'react-native';



export default class Footer extends Component {



  render(){
    return(
        <View style={styles.bottombar}>
          <TouchableHighlight onPress={this.props.goHome}>
            <Image style={styles.img} source={require('../logos/garage.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.props.goSearch}>
            <Image style={styles.img} source={require('../logos/mag.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.props.goProfile}>
            <Image style={styles.img} source={require('../logos/smallwheel.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.props.goMeetup}>
            <Image style={styles.img} source={require('../logos/wrench.png')} />
          </TouchableHighlight>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bottombar: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    backgroundColor: '#030301',
    alignSelf: 'flex-end',
    justifyContent: 'space-around'
  },

  img : {
    width: 40,
    height: 'auto',
    flex: 1
  },







})
