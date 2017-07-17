import React, {Component} from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import LogIn from '../components/LogIn'
import Navigator from './Navigator'


@connect(
  state => ({
    navigation: state.navigation,
    user: state.user
  })
)

export default class AppNavigator extends Component {
  state = {

  }
  render(){
    return(

    )
  }

}
