import React from 'react'
import {createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation-tabs'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'


const AuthTabNavigator = createMaterialTopTabNavigator({
    REGISTER:{
        screen:RegisterScreen,
        path:'REGISTER',
    },
    LOGIN:{
        screen:LoginScreen,
        path:"LOGIN"
    }
},{
    tabBarOptions: {
        style: {
            backgroundColor: '#86c5d8',
        },
      }
}
)

export default AuthTabNavigator