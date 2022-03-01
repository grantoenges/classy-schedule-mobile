import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'

const ScheduleFun = ({navigation}) => {
     const settings = () => navigation.navigate("Settings")

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Schedule Screen"/>
        </Card>
        <Button style={styles.buttonStyle} onPress={settings}>Settings</Button>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      
    },
    cardStyle:{
        backgroundColor:"powderblue"
    },
    buttonStyle:{
        backgroundColor :"silver"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  

export default ScheduleFun;


