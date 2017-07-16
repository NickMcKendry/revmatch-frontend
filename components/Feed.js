import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, ScrollView } from 'react-native';

import { PostApi } from '../constants/api'
import PostList from './feedComponents/postComponents/PostList'

import LoadingScreen from './LoadingScreen'
import SmallHeader from './feedComponents/SmallHeader'

const postApi = new PostApi()

export default class Feed extends Component {

  static defaultProps = {
    postApi
  }

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
    this.setState({ loading: true })
    console.log('postApi ', postApi);
    const posts = await this.props.postApi.fetchPosts()
    console.log('posts var', posts);
    this.setState({ loading: false, posts })
  }

  render(){

    if(this.state.loading){
      console.log(this.state.loading);
        return <LoadingScreen />
    } else {
      console.log('this.state.posts', this.state);
    }


    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.postContainer}>
            <PostList posts={this.state.posts} />
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
