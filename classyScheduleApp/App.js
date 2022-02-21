import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import{NavigationContainer} from '@react-navigation/native-stack'
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
    return(
      <WelcomeScreen/>
    );
}