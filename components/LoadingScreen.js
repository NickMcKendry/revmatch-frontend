import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { Rotating } from './Header'

const LoadingScreen = () => (
  <View style={styles.container}>
    <Rotating />
  </View>
)


const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})




export default LoadingScreen
