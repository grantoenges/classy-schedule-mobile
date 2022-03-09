import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ClassInputFun = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [classTitle, setClassTitle] = useState();
    const [classNumber, setClassNum] = useState();

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          // saving error
        }
    }
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            // value previously stored
            alert(value)
          }
        } catch(e) {
          // error reading value
        }
    }
    const getstate = () => {
      alert(classTitle)
      alert(classNumber)
      alert(selectedLanguage)
    }
  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Class Input Screen"/>
            <Picker  style={styles.buttonStyle}
            selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Cisc" value="CISC" />
            <Picker.Item label="Stats" value="STAT" />
            </Picker>
            <TextInput onChangeText={(classNumber) => setClassNum(classNumber)} label={'Class number'}></TextInput>
            <TextInput onChangeText={(classTitle) => setClassTitle(classTitle)} label={'Class Title'}></TextInput>
            <Button onPress={() => storeData(selectedLanguage)}>save data </Button>
            <Button onPress={getstate}>retr data </Button>
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


