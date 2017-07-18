import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, ActivityIndicator, AsyncStorage, UIManager } from 'react-native';
import { persistStore } from 'redux-persist'
import LogIn from './components/LogIn'
import Header from './components/Header'

import Root from './Root'

import { Provider } from 'react-redux'
import store from './redux/store'


export default class App extends React.Component {




  render(){

    return(
      <View style={styles.container}>
        <Provider store={store}>
          <Root />
        </Provider>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },

})
