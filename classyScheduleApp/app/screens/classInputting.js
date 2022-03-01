import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const ClassInputFun = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Class Input Screen"/>
            <Picker  style={styles.buttonStyle}
            selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Cisc" value="CISC" />
            <Picker.Item label="Stats" value="STAT" />
            </Picker>
        </Card>
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
  

export default ClassInputFun;


