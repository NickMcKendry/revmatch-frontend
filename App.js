import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, NavigatorIOS, ActivityIndicator } from 'react-native';
import LogIn from './components/LogIn'
import Header from './components/Header'



export default class App extends React.Component {




  render(){
    
    return(
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute = {{
            component: LogIn,
            title: 'Home Page',
            navigationBarHidden: true,
          }}
          style={{flex: 11}}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },

})
