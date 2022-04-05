import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import styles from '../Style'
import WeeklyCalendar from 'react-native-weekly-calendar';
 
const ScheduleFun = () =>{
  const sampleEvents = [
    { 'start': '2022-04-11 10:15:00', 'duration':  '01:00:00', 'note': 'Teach Intro to Cisc' },
    { 'start': '2022-04-13 10:15:00', 'duration': '01:00:00', 'note': 'Teach Intro to Cisc' },
    { 'start': '2022-04-15 10:15:00', 'duration': '01:00:00', 'note': 'Teach Intro to Cisc' },
    { 'start': '2022-04-11 13:35:00', 'duration':  '01:00:00', 'note': 'Teach computer graphics' },
    { 'start': '2022-04-13 13:35:00', 'duration': '01:00:00', 'note': 'Teach computer graphics' },
    { 'start': '2022-04-15 13:35:00', 'duration': '01:00:00', 'note': 'Teach computer graphics' },
    { 'start': '2022-04-14 13:35:00', 'duration': '02:00:00', 'note': 'Intro to cisc lab' },
    { 'start': '2022-04-16 13:35:00', 'duration': '01:00:00', 'note': 'Read Sawins angry emails' },
    
  ]
 
  return (
    <View style={styless.container}>
      <WeeklyCalendar events={sampleEvents} style={{ height: 750 }} themeColor='#7F46C7' selected='2022-04-11'/>
    </View>
  );
}
 
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ScheduleFun;