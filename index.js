import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, ActivityIndicator } from 'react-native';

import Root from './Root'

import { Provider } from 'react-redux'
import store from './redux/store'



export default class index extends React.Component {




  render(){

    return(
      <Provider store={store}>
        {console.log('store', store);}
        <Root />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },

})
