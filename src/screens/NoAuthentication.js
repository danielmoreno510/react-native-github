import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppStackNavigator = createStackNavigator({
    Login:LoginScreen,
    Home:HomeScreen,
})


const NoAuthentication = createAppContainer(AppStackNavigator);

export default NoAuthentication;
