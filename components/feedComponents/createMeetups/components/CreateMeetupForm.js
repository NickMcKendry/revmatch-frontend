import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-native-elements'

import { meetupValidation } from '../Validation'

import TextInputWithValidation from '../../../TextInputWithValidation'


const CreateMeetupForm = ({
  createMeetup,
  checkTitle,
  changeLocation,
  changeEventType,
  changeDescription,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidation}
      name="title"
      label="Title"
      selectionColor="#00D9C0"
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidation}
      name="location"
      label="Location"
      selectionColor="#00D9C0"
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidation}
      name="eventtype"
      label="Event Type"
      selectionColor="#00D9C0"
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidation}
      name="description"
      label="Description"
      multiline
      selectionColor="#00D9C0"
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        backgroundColor = '#FCBA04'
        raised
        fontFamily = 'Futura'
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        title = "Create Event"
        raised
        fontFamily = 'Futura'
        backgroundColor = '#00D9C0'
        disabled = {invalid || submitting}
        onSubmit={handleSubmit(createMeetup)}
      />
    </View>
  </View>

)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%'
  },

  item : {
    marginVertical: '2%',
  },

  buttonCreate : {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '10%'
  },
})

export default reduxForm({
  form: "createMeetup",
  validate: meetupValidation
})(CreateMeetupForm)
