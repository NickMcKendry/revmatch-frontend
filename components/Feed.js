import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';




import Meetups from './feedComponents/Meetups'
import Search from './feedComponents/Search'
import Profile from './feedComponents/Profile'


import SmallHeader from './feedComponents/SmallHeader'
import Footer from './feedComponents/Footer'

export default class Feed extends Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
    this.goToMeetup = this.goToMeetup.bind(this)
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


    return(
      <View style={styles.container}>



        <SmallHeader />





        <Footer goHome={this.goToHome} goProfile={this.goToProfile} goSearch={this.goToSearch} goMeetup={this.goToMeetup} />

      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    height: "50%",
    backgroundColor: '#FFFFF3',
    flex: 1,
    justifyContent: "space-between",
  }





})
