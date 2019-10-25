import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import firebase from 'firebase'
import MainSwitchNavigator from './src/navigators/MainSwitchNavigator';

export default function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyDOBmkDF4UYhqs-x7yad81SEKugC0r-FL0",
    authDomain: "instaclone-bf4cb.firebaseapp.com",
    databaseURL: "https://instaclone-bf4cb.firebaseio.com",
    projectId: "instaclone-bf4cb",
    storageBucket: "instaclone-bf4cb.appspot.com",
    messagingSenderId: "973661426402",
    appId: "1:973661426402:web:d76e64148fdcbd897f84bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  return (
    <View style={{flex:1}}>
      <MainSwitchNavigator/>
    </View>
  )
}