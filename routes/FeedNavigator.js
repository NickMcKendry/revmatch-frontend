import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import Feed from '../components/Feed'
import Login from '../components/LogIn'
import Meetups from '../components/feedComponents/Meetups'
import Profile from '../components/feedComponents/Profile'
import Search from '../components/feedComponents/Search'


export default TabNavigator({
  Feed: {
    screen: Feed
  },

  Search: {
    screen: Search
  },

  Profile: {
    screen: Profile
  },

  Meetups: {
    screen: Meetups
  }
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
  activeTintColor: '#FCBA04',
  inactiveTintColor: '#A1A6AB',
  style: {
    backgroundColor: '#030301',
  },
}

})
