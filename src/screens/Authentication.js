import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Login:LoginScreen,
})


const Authentication = createAppContainer(AppStackNavigator);

export default Authentication;
