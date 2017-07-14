import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

const PostList = ({ posts }) => (
  <View style={styles.container}>
    <View style={styles.postCard}>
      {posts.map((post, i) => (

        <View key={i} style={styles.imgContainer}>
          <Text style={styles.userText}>{post.author}</Text>

          <Image style={styles.img} source={{uri: post.image}}></Image>
          <View style={styles.iconContainer}>
            <Image style={styles.likeIcon} source={require('./like-logo.png')}></Image>
            <Image style={styles.commentIcon} source={require('./comment-logo.png')}></Image>
          </View>
          <Text>{post.description} </Text>

        </View>

      ))}

    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7FF',
    top: 71,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },

  userText : {
    fontSize: 20,
    fontFamily: 'Futura-MediumItalic'
  },

  postCard: {
    flex: 1,
  },

  imgContainer : {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#FCF7FF',
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
    marginLeft: 15,
    marginRight: 10,
  }
})


export default PostList
