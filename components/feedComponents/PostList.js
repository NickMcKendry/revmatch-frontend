import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Button, TouchableHighlight } from 'react-native'

const PostList = ({ posts }) => (
  <View style={styles.container}>
    <View style={styles.postCard}>
      {posts.map((post, i) => (

        <View key={i} style={styles.imgContainer}>
          <View style={styles.userContainer}>
            <View style={styles.thumbnail}></View>
            <Text style={styles.userText}>{post.author}</Text>
          </View>
          <Image style={styles.img} source={{uri: post.image}}></Image>
          <View style={styles.iconContainer}>

            <TouchableHighlight>
              <Image style={styles.likeIcon} source={require('./like-icon.png')}></Image>
            </TouchableHighlight>
            <TouchableHighlight>
              <Image style={styles.commentIcon} source={require('./comment-icon.png')}></Image>
            </TouchableHighlight>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.boldUser}>{post.author} </Text>
            <Text style={styles.descText}>{post.description} </Text>
          </View>

        </View>

      ))}

    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1A6AB',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    position: 'relative'
  },

  userText : {
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'Futura-MediumItalic',

  },

  postCard: {
    flex: 1,
    position: 'relative',
    marginBottom: 18,
  },

  imgContainer : {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#A1A6AB',
    marginBottom: 5

  },

  img: {
    height: 300,
    width: "100%",
  },

  iconContainer : {
    flexDirection: 'row',
  },

  likeIcon : {
    top: 3,
    marginLeft: 3,
    marginRight: 10,
    height: 25
  },

  thumbnail : {
    borderRadius: 50,
    height: 30,
    width: 30,
    margin: 5,
    backgroundColor: '#463F3A'
  },

  userContainer : {
    flexDirection: 'row'
  },

  descText : {
    margin: 5
  },


  commentIcon: {
    top: 3,
    height: 25

  },

  descContainer: {
    flexDirection: 'row'
  },

  boldUser: {
    fontWeight: 'bold',
    margin: 5
  }
})


export default PostList
