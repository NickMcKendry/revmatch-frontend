import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

import { MeetupApi } from '../../constants/api'
import MeetupList from './meetupComponents/MeetupList'

import SmallHeader from './SmallHeader'
import LoadingScreen from '../LoadingScreen'

const meetupApi = new MeetupApi();

export default class Meetups extends Component {

  static defaultProps = {
    meetupApi
  }

  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../../Icons/Meetups-Nav.png')} style={styles.img}></Image>
      )

  }

  state = {
    loading: false,
    meetups: []
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const meetups =  await this.props.meetupApi.fetchGroupMeetups()
    console.log('meetups var', meetups);
    this.setState({ loading: false, meetups })
    console.log('this.state',this.state);
  }


  render(){
    if(this.state.loading){
      console.log(this.state.loading);
        return <LoadingScreen />
    } else {
      console.log('meetups', this.state.meetups);
    }


    return(
      <Image source={require('./meetupComponents/meetups.png')} style={styles.container}>

        <View style={styles.topContainer}>
          <Text style={styles.titleText}>Meetups</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MeetupList meetups={this.state.meetups} />
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
