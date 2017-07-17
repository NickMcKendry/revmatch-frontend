import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight, NavigatorIOS } from 'react-native'

import SmallHeader from './SmallHeader'
import CreateMeetup from './createMeetups/CreateMeetup'

export default class Create extends Component {





  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../../Icons/add.png')} style={styles.img}></Image>
      )

  }


  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.tophalf}  onPress={() => this.props.navigation.navigate('CreatePosts')}>
          <Image style={styles.postImg} source={require('../../Icons/apbg4.png')}>
            <Text style={styles.postText}>Add a new post!</Text>
          </Image>
        </TouchableHighlight>
        <TouchableHighlight style={styles.bottomhalf} onPress={() => this.props.navigation.navigate('CreateMeetups')}>
          <Image style={styles.meetupImg} source={require('../../Icons/ambg2.png')} >
            <Text style={styles.meetupText}>Add a new meetup!</Text>
          </Image>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img : {
    width: 30,
    height: 'auto',
    flex: 1
  },

  container: {
    flex: 4,
    backgroundColor: 'black'
  },

  tophalf: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#00D9C0'
  },

  bottomhalf: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#00D9C0'
  },

  postText: {
    color: '#00D9C0',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    bottom: 50,
    fontSize: 40,
    fontFamily: 'SnellRoundhand-Black',
  },

  meetupImg: {
    flex: 1,
    alignSelf: 'center',
    bottom: 62,
    overflow: 'visible',
  },

  meetupText: {
    color: '#00D9C0',
    top: 120,
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'SnellRoundhand-Black',
    backgroundColor: 'transparent'
  },

  postImg : {
    flex: 1,
    top: 82,
    overflow: 'visible'
  }
})
