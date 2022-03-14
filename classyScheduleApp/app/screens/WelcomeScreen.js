import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'


const WelcomeScreenFun = ({navigation}) => {
     const login = () => navigation.navigate("Login")
     const prefs = () => navigation.navigate("Preferences")
     const settings = () => navigation.navigate("Settings")
     const schedule = () => navigation.navigate("Schedule")
     const Input = () => navigation.navigate("Class Input")
    


  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Welcome Screen"/>
        </Card>
        <Button style={styles.buttonStyle} onPress={login}>Login</Button>
        <Button style={styles.buttonStyle} onPress={prefs}>Preferences</Button>
        <Button style={styles.buttonStyle} onPress={settings}>Settings</Button>
        <Button style={styles.buttonStyle} onPress={schedule}>Schedule</Button>
        <Button style={styles.buttonStyle} onPress={Input}>Class Input</Button>
        <Button style={styles.buttonStyle} onPress={Teste}>Class Input</Button>


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
  

export default WelcomeScreenFun;


