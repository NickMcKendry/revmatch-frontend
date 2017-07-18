import React, {Component} from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import LogIn from '../components/LogIn'
import Navigator from './Navigator'


@connect(
  state => ({
    navigation: state.navigation,
    auth: state.auth
  })
)

export default class AppNavigator extends Component {
  state = {

  }
  render(){

    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navigation,
    })

    if(this.props.user.loggedIn){
      return <Navigator navigation={navigation} />
    }

    return <Login />
  }

}

export const router = Navigator.router
