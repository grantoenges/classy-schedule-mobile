import React, {useState} from 'react';
import { SafeAreaView, View,Text,StyleSheet, Switch, } from 'react-native';
import {Button, Card, TextInput, useTheme} from 'react-native-paper'
import styles, { Context } from '../Style'

/*This method is used to be a location for the user to change their settings within the app.
Currently most of the settings that can change (text size) are controlled in the phone settings.
This page will implement any specific settings for an account in Classy Schedule.
*/ 
const SettingFun = ({navigation}) => {

  const { toggleTheme } = React.useContext(Context);
  const paperTheme = useTheme();
  const changePassword = () => navigation.navigate("Change Password");

  /*This usestate variable is used as a flag, keeping track of the when the page has information changed and will need a reload of the data*/
  
  const [dummy, setDummy] = useState(paperTheme.dark);
  /*This usestate variable is used as a holder of the text that the button uses when on one mode of the button (Subject to change)*/
  /*This usestate variable is used as a holder of the text that the button uses when on the other mode of the button (Subject to change)*/
  let darkMode = 'Dark Mode';
  let lightMode = 'Light Mode';

  return (
    
    <SafeAreaView style={[styles.container, {backgroundColor: paperTheme.colors.background}]}>
      <Card >
          <Card.Title title= "User Preferences"/>
          <Button loading={dummy} onPress={()=>{ toggleTheme(); setDummy(!dummy);}} mode={dummy? "contained":'outlined'} style={[styles.generalButton, {marginBottom: 5}]}>{dummy? darkMode: lightMode}</Button>
          <Button mode={dummy? "contained":'outlined'} style={[styles.generalButton, {marginBottom: 5}]}  icon="account-plus"  onPress={changePassword}>Update Password</Button>
      </Card>
    </SafeAreaView>
 );
}

export default SettingFun;

