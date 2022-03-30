import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import styles from '../Style'

const SettingFun = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Settings Screen"/>
        </Card>
    </SafeAreaView>
 );
}


export default SettingFun;


