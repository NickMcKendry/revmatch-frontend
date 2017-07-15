import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  NavigatorIOS,
  Animated,
  Platform,
  ScrollView,
  TouchableHighlight,
  Touchable,
  Switch,
  Dimensions,
  Easing,
  LayoutAnimation,
 } from 'react-native';


export class Rotating extends Component {
  constructor(props){
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  spin(){
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 8,
        duration: 6000,
        easing: Easing.linear
      }
    ).start()
  }

  componentDidMount(){
    this.spin()
  }

  render(){
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '2880deg']
    })

    return(
        <Animated.Image  source={require('./logofinal.png')}
          style={[styles.img,
            {
              transform: [
                {rotate: spin}
              ]
            }
          ]}   />

    )
  }
}



export default class Header extends Component {


  render(){



    return(
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.headerText}>Revmatch</Text>
            <Rotating />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: 'row'

  },
  Header: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',

  },
  headerText: {
    color: '#00D9C0',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Futura',
    marginTop: 80,
  },

  img: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginTop: 150,
    overflow: 'visible',
    position: 'absolute'

  },


});
