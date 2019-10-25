import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthTabNavigator from './AuthTabNavigator'

const MainSwitchNavigator = createAppContainer(
    createSwitchNavigator({
        AuthTabNavigator
    })
)

export default MainSwitchNavigator