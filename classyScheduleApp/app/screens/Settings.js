import React, {useState} from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import styles from '../Style'

/*This method is used to be a location for the user to change their settings within the app.
Currently most of the settings that can change (text size) are controlled in the phone settings.
This page will implement any specific settings for an account in Classy Schedule.
*/
const SettingFun = ({navigation}) => {
  /*This usestate variable is used as a flag, keeping track of the when the page has information changed and will need a reload of the data*/
  const [dummy, setDummy] = useState(true);
  /*This usestate variable is used as a holder of the text that the button uses when on one mode of the button (Subject to change)*/
  const [mode, setMode] = useState('Dark Mode (COMING SOON!)');
  /*This usestate variable is used as a holder of the text that the button uses when on the other mode of the button (Subject to change)*/
  const [pmode, setpMode] = useState('Light Mode (Already here)');
  
  return (
    <SafeAreaView style={styles.container}>
        <Card >
            <Card.Title title= "Settings Will go here"/>
            <Button loading={dummy} onPress={()=>{console.log('hh'); setDummy(!dummy);}} mode={dummy? "contained":'outlined'} >{dummy? mode:pmode}</Button>
        </Card>
    </SafeAreaView>
 );
}


export default SettingFun;

