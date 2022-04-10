import React, {useState} from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import styles from '../Style'

const SettingFun = ({navigation}) => {
  const [dummy, setDummy] = useState(true);
  const [mode, setMode] = useState('Dark Mode (COMING SOON!)');
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

