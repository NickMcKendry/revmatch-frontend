import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'

import CreateMeetupForm from './components/CreateMeetupForm'

import { MeetupApi } from '../../../constants/api'

import moment from 'moment'


const meetupApi = new MeetupApi()



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
    title: '',
    location: '',
    meetuptype: '',
    description: ''
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    this.setState({ date  })
    this._handleDateTimePicker()
  }

  _checkIfButtonSubmitDisabled() {
    const today = moment()
    const { title, location, meetuptype, description, date } = this.state

    if(title.length > 1 && location.length > 1 && meetuptype.length > 1 && description.length > 1 && date > moment()){
      return false
    } else {

    return true
  }
}

_createMeetup = async () => {
  const { title, location, meetuptype, description, date } = this.state
  console.log('title', title);
  console.log('location', location);
  console.log('meetuptype', meetuptype);
  console.log('description', description);
  console.log('date', date);


  const res = await meetupApi.createGroupMeetups({
    title,
    location,
    meetuptype,
    description,
    date
  })

  console.log(res);
}

  _checkTitle() {
    const { date } = this.state
    if(date > moment()){
      return moment(date).format('MMMM Do YYYY, h:mm a')
    }
    return 'Pick Event Date'
  }

  _changeTitle = title => this.setState({ title })

  _changeDescription = description => this.setState({ description })

  _changeLocation = location => this.setState({ location })

  _changeEventType = meetuptype => this.setState({ meetuptype })



  render(){
    console.log(this.state);
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
