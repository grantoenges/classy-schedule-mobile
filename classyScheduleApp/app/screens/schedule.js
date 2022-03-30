import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import styles from '../Style'
const ScheduleFun = ({navigation}) => {
     const settings = () => navigation.navigate("Settings")

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Schedule Screen"/>
        </Card>
        <Button style={styles.buttonStyleT} onPress={settings}>Settings</Button>
    </SafeAreaView>
 );
}


export default ScheduleFun;


