import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements'

const TextInputWithValidation = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
<View style={containerStyle}>
  <FormLabel fontFamily="Futura-MediumItalic" labelStyle={{ color:'#FCF7FF'}} >
    {label}
  </FormLabel>
  <FormInput
    {...input}
    {...custom}
  />
  {error && touched &&
    <FormValidationMessage fontFamily="Futura-MediumItalic" labelStyle={{ color:"#FCBA04" }} >
      {error}
    </FormValidationMessage>
  }

</View>
)




const styles = StyleSheet.create({

})


export default TextInputWithValidation
