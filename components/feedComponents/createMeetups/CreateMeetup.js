import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'

import moment from 'moment'

export default class CreateMeetup extends Component {

  static navigationOptions = {
    title: 'Add a new Meetup or Event!',
    headerStyle: {
      backgroundColor: '#030301',
    },

    headerTitleStyle: {
      color: '#00D9C0'
    },

  }

  state = {
    isDateTimePickerVisible: false
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
    this.setState({ date  })
    this._handleDateTimePicker()
  }

  _checkTitle() {
    const { date } = this.state
    if(date > moment()){
      return moment(date).format('MMMM Do YYYY, h:mm a')
    }
    return 'Pick Event Date'
  }

  render(){
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.item}>
            <FormLabel fontFamily = 'Futura' >Title</FormLabel>
            <FormInput
              selectionColor = '#00D9C0'
              type="text"
            />
          </View>
          <View style={styles.item}>
            <FormLabel fontFamily = 'Futura' >Location</FormLabel>
            <FormInput
              selectionColor = '#00D9C0'
              type="text"
            />
          </View>
          <View style={styles.item}>
            <FormLabel fontFamily = 'Futura' >Event Type</FormLabel>
            <FormInput
              selectionColor = '#00D9C0'
              type="text"
            />
          </View>
          <View style={styles.item}>
            <FormLabel fontFamily = 'Futura' >Description</FormLabel>
            <FormInput
              selectionColor = '#00D9C0'
              type="textarea" multiline={true}
            />
          </View>
          <View style={styles.item}>
            <Button
              onPress={this._showDateTimePicker}
              backgroundColor = '#FCBA04'
              title = {this._checkTitle()}
              raised
              fontFamily = 'Futura'
            />
          </View>
          <View style={styles.buttonCreate}>
            <Button
              title = "Create Event"
              raised
              fontFamily = 'Futura'
              backgroundColor = '#00D9C0'
            />
          </View>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode = 'datetime'
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
  },

  container: {
    flex: 1,
    width: '90%'
  },

  item : {
    marginVertical: '2%'
  },

  buttonCreate : {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '10%'
  }
})
