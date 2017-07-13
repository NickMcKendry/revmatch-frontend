import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'


const MeetupList = ({ meetups }) => {
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>My Meetups</Text>
    </View>
    <View style={styles.bodyContainer}>
      <ScrollView horizontal>
        {meetups.map((meetup, i) => (
          <View key={i} style={styles.meetupCard}>
            <View>

            </View>
            <View style={styles.meetupCardBottom}>

            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  </View>
}


const styles = StyleSheet.create({
  container : {

  },

  titleContainer : {

  },

  bodyContainer : {

  },

  titleText: {

  },

  meetupCard : {

  }
})


export default MeetupList
