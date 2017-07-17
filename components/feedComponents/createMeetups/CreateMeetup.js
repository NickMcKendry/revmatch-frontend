import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class CreateMeetup extends Component {

  static navigationOptions = {
    title: 'Add a new Meetup or Event!',
    headerStyle: {
      backgroundColor: '#030301',
    },

    headerTitleStyle: {
      color: '#00D9C0'
    },

  }

  render(){
    return (
      <View>
        <Text>Create Meetup</Text>
      </View>
    )
  }
}
