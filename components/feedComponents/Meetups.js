import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

import { connect } from 'react-redux'

import { MeetupApi } from '../../constants/api'
import MeetupList from './meetupComponents/MeetupList'

import { fetchMyMeetups } from './meetupComponents/actions'
import SmallHeader from './SmallHeader'
import LoadingScreen from '../LoadingScreen'


@connect(
  state => ({
    myMeetups: state.meetups
  }),
  { fetchMyMeetups }
)


export default class Meetups extends Component {

  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../../Icons/Meetups-Nav.png')} style={styles.img}></Image>
      )

  }

  async componentDidMount() {
    this.props.fetchMyMeetups()
  }

  render(){
    const {
      myMeetups: {
        isFetched,
        data,
        error
      }
    } = this.props


    if(!isFetched){
      console.log('data');
        return <LoadingScreen />
    } else if(error.on) {
      return(
        <View>
          <Text>{error.message}</Text>
        </View>
      )
    }


    return(
      <Image source={require('./meetupComponents/meetups.png')} style={styles.container}>

        <View style={styles.topContainer}>
          <Text style={styles.titleText}>Meetups</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MeetupList meetups={data} />
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    justifyContent: 'center',
    fontSize: 100
  },
  topContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.8,
    backgroundColor: '#A1A6AB'
  },

  titleText : {
    fontFamily: 'SnellRoundhand-Black',
    fontSize: 80,
    color: '#00D9C0',
  },

  img : {
    width: 30,
    height: 'auto',
    flex: 1
  }
})
