import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'


const MeetupList = ({ meetups }) => (

  <View style={styles.container}>

    {/* <View style={styles.titleContainer}>
      <Text style={styles.titleText}>My Meetups</Text>
    </View> */}
    <View style={styles.bodyContainer}>
      <ScrollView horizontal>
        {meetups.map((meetup, i) => (
          <View key={i} style={styles.meetupCard}>

            <View style={styles.meetupCardTopContainer}>
              <Text style={styles.meetupCardTitle}>{meetup.title}</Text>
              <Text style={styles.cardDescription}>{meetup.description}</Text>
            </View>

            <View style={styles.meetupCardBottom}>
              <Text style={styles.cardName}>Hosted By: {meetup.group.name}</Text>
              <Text style={styles.cardLocation}>Location: {meetup.location}</Text>
              <Text style={styles.cardDate}>Date:  </Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>

  </View>
)


const styles = StyleSheet.create({
  container : {
    flex: 1,
  },

  titleContainer : {
    flex: 0.2,
    paddingHorizontal: 4,
    paddingVertical: 4,

  },

  bodyContainer : {
    flex: 1
  },

  titleText: {
    color: '#00D9C0',
    fontSize: 25
  },

  meetupCard : {
    height: "90%",
    width: 175,
    marginHorizontal: 3,
    backgroundColor: '#463F3A',
    alignSelf: 'center'

  },

  cardName : {
    fontSize: 15,
    fontFamily: 'Gujarati Sangam MN'

  },

  cardLocation: {
    fontSize: 13,
    fontFamily: 'Gujarati Sangam MN'

  },

  cardDate: {
    fontSize: 13,
    fontFamily: 'Gujarati Sangam MN'

  },

  meetupCardTitle: {
    position: 'absolute',
    color: '#00D9C0',
    fontFamily: 'Futura-MediumItalic',
    borderBottomWidth: 2
  },

  meetupCardTopContainer : {
    flex: 1,
    position: 'relative',
    top: 4,
    left: 3,
  },

  meetupCardBottom : {
    flex: 0.4,
    backgroundColor: '#00D9C0',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  cardDescription : {
    top: 25,
    backgroundColor: 'transparent',

  }
})


export default MeetupList
