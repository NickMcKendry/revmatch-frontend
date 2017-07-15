import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';



import SmallHeader from './SmallHeader'
import Footer from './Footer'


import Feed from '../Feed'

import Meetups from './Meetups'
import Profile from './Profile'
import Search from './Search'

export default class Home extends Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
    this.goToMeetup = this.goToMeetup.bind(this)
  }

  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../../Icons/Search-Nav.png')} style={styles.img}></Image>
      )

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

        {/* <SmallHeader /> */}

        <View>
          <Text style={styles.text}>
            Search
          </Text>
        </View>


        {/* <Footer goHome={this.goToHome} goProfile={this.goToProfile} goSearch={this.goToSearch} goMeetup={this.goToMeetup} /> */}

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
      width: 50,
      height: 'auto',
      flex: 1
    }






})
