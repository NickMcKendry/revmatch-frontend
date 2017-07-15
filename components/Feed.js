import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, ScrollView } from 'react-native';


import { PostApi } from '../constants/api'

import Meetups from './feedComponents/Meetups'
import Search from './feedComponents/Search'
import Profile from './feedComponents/Profile'
import LoadingScreen from './LoadingScreen'
import PostList from './feedComponents/PostList'


import SmallHeader from './feedComponents/SmallHeader'
import Footer from './feedComponents/Footer'


const postApi = new PostApi()
console.log(postApi);

export default class Feed extends Component {
  constructor(){
    super()
    this.goToHome = this.goToHome.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
    this.goToMeetup = this.goToMeetup.bind(this)
  }

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



  goToHome(){
    this.props.navigator.push({
      component: Feed,
      navigationBarHidden: true,
    })
  }

  goToSearch(){
    this.props.navigator.push({
      component: Search,
      navigationBarHidden: true,

    })
  }

  goToProfile(){
    this.props.navigator.push({
      component: Profile,
      navigationBarHidden: true,

    })
  }

  goToMeetup(){
    this.props.navigator.push({
      component: Meetups,
      navigationBarHidden: true,

    })
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



        {/* <SmallHeader style={styles.header} /> */}

        <ScrollView>
          <View style={styles.postContainer}>
            <PostList posts={this.state.posts} />
          </View>
        </ScrollView>


        {/* <Footer goHome={this.goToHome} goProfile={this.goToProfile} goSearch={this.goToSearch} goMeetup={this.goToMeetup} /> */}

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
