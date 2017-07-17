import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'

import { connect } from 'react-redux'
import { createMeetup } from './actions'

import LoadingScreen from '../../LoadingScreen'

import CreateMeetupForm from './components/CreateMeetupForm'

import moment from 'moment'


@connect(
  state => ({
    meetup: state.createMeetup
  }),
  { createMeetup }
)
export default class CreateMeetup extends Component {

  static navigationOptions = {
    title: 'Add a new Meetup or Event!',
    headerStyle: {
      backgroundColor: '#030301',
    },

    headerTitleStyle: {
      color: '#00D9C0',

    },

  }

  state = {
    isDateTimePickerVisible: false,
    date: moment(),
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    this.setState({ date  })
    this._handleDateTimePicker()
  }

  _checkIfButtonSubmitDisabled() {
    const today = moment()
    const { date } = this.state

    if(date > moment()){
      return false
    } else {

    return true
  }
}

_createMeetup = async (values) => {
  console.log(values);
  await this.props.createMeetup(values)
  this.props.navigation.goBack()
}

  _checkTitle() {
    const { date } = this.state
    if(date > moment()){
      return moment(date).format('MMMM Do YYYY, h:mm a')
    }
    return 'Pick Event Date'
  }

  render(){
    const {
      meetup
    } = this.props

    if(meetup.isLoading){
      return(
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      )
    } else if( meetup.error.on ){
      return(
        <View style={styles.root}>
          <Text>{meetup.error.message}</Text>
        </View>
      )
    }
    return (
      <View style={styles.root}>
        <CreateMeetupForm
          createMeetup={this._createMeetup}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
          changeDescription={this._changeDescription}
          changeLocation={this._changeLocation}
          changeEventType={this._changeEventType}
         />

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode = 'datetime'
          minimumDate = {moment()._d}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A1A6AB'
  }
})
