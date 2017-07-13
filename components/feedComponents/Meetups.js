import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';

import { MeetupApi } from '../../constants/api'
import MeetupList from './meetupComponents/MeetupList'

import LoadingScreen from '../LoadingScreen'


import SmallHeader from './SmallHeader'
import Footer from './Footer'


import Feed from '../Feed'
import Profile from './Profile'
import Search from './Search'

const meetupApi = new MeetupApi();
console.log(meetupApi);

export default class Meetups extends Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
    this.goToMeetup = this.goToMeetup.bind(this)
  }

  static defaultProps = {
    meetupApi
  }

  state = {
    loading: false,
    meetups: []
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const meetups =  this.props.meetupApi.fetchGroupMeetups()
    this.setState({ loading: false, meetups })
  }

  goToHome(){
    this.props.navigator.push({
      component: Feed,
      navigationBarHidden: true,
    })
  }

  goToSearch(){
    this.props.navigator.push({
      component: Search,
      navigationBarHidden: true,

    })
  }

  goToProfile(){
    this.props.navigator.push({
      component: Profile,
      navigationBarHidden: true,

    })
  }

  goToMeetup(){
    this.props.navigator.push({
      component: Meetups,
      navigationBarHidden: true,

    })
  }




  render(){
    if(this.state.loading){
      console.log(this.state.loading);
        return <LoadingScreen />
    }


    return(
      <View style={styles.container}>

        <SmallHeader />

        <View style={styles.topContainer}>
          <Text >Meetups</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MeetupList meetups={this.state.meetups} />
        </View>


        <Footer goHome={this.goToHome} goProfile={this.goToProfile} goSearch={this.goToSearch} goMeetup={this.goToMeetup} />

      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    backgroundColor: '#FCF7FF',
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
  }





})
