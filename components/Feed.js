import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, ScrollView } from 'react-native';

import { connect } from 'react-redux'
import { fetchMyPosts } from './feedComponents/postComponents/actions'

import { PostApi } from '../constants/api'
import PostList from './feedComponents/postComponents/PostList'

import LoadingScreen from './LoadingScreen'
import SmallHeader from './feedComponents/SmallHeader'


@connect(
  state => ({
    posts: state.posts
  }),
  { fetchMyPosts }
)

export default class Feed extends Component {



  static navigationOptions = {
    header: () => (
      <SmallHeader />
    ),

    tabBarIcon:  () => (
        <Image source={require('../Icons/Garage-nav.png')} style={styles.img}></Image>
      )
  }

  state = {
    loading: false,
    posts: []
  }

  async componentDidMount(){
    this.props.fetchMyPosts()
  }

  render(){
    const {
      posts: {
        isFetched,
        data,
        error
      }
    } = this.props

    if(!isFetched){
        return <LoadingScreen />
    } else if(error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      )
    }


    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.postContainer}>
            <PostList posts={data} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: "space-between",
  },

  postContainer: {
    flex: 0.8,
  },

  header: {
    position: 'relative'
  },

  img : {
    width: 30,
    height: 'auto',
    flex: 1
  }
})
