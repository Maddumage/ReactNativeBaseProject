import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/App/HomeScreen';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


export const MainStackNavigator = createStackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        HomeScreen: {
            screen: HomeScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'SplashScreen'
    }
);
