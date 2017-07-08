import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS } from 'react-native';



import SmallHeader from './SmallHeader'
import Footer from './Footer'

import Market from './Market'
import Profile from './Profile'
import Search from './Search'


export default class Home extends Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
    this.goToMarket = this.goToMarket.bind(this)
  }

  goToHome(){
    this.props.navigator.push({
      component: Home,
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

  goToMarket(){
    this.props.navigator.push({
      component: Market,
      navigationBarHidden: true,

    })
  }


  render(){
    return(
      <View style={styles.container}>

        <SmallHeader />

        <View>
          <Text style={styles.text}>Home</Text>
        </View>


        <Footer goHome={this.goToHome} goProfile={this.goToProfile} goSearch={this.goToSearch} goMarket={this.goToMarket} />

      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    height: "50%",
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: "space-between",
  },

  text: {
    justifyContent: 'center',
    fontSize: 100
  }





})
