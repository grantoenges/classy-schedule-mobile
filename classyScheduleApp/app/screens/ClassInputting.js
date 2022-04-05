import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ClassInputFun = () => {
  /** This use state is used to hold onto selected language (test variable) allowing for dynamic selection in the drop down menu. */
    const [selectedLanguage, setSelectedLanguage] = useState();
    /** This use state is used for storage of the classes string title. */
    const [classTitle, setClassTitle] = useState();
    /** This use state is used for the storage of the classes integer number. */
    const [classNumber, setClassNum] = useState();

    /** This method use is to store a given value into one predetermined location into the devices memory.
     *   Inputs: value (should be integer but can be anything)
     *   Outputs: nothing (may add consol log if needed)
     */
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          // saving error
        }
    }

    /**This method is used to access the stored item from the async storage*/
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
    /**This method sends three simple alerts to the user. Is a test method 
     * that tries to see more of the ways the usestate variables can be used and accessed.
     * Inputs: none
     * Outputs: Three alerts stating the current state of the usestate variables
      */
    const getstate = () => {
      alert(classTitle)
      alert(classNumber)
      alert(selectedLanguage)
    }
  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Class Input Screen"/>
            <Picker  style={styles.buttonStyle} selectedValue={selectedLanguage} dropdownIconRippleColor='purple' prompt='Pick department' onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
              <Picker.Item label="Cisc" value="CISC" />
              <Picker.Item label="Stats" value="STAT" />
            </Picker>
            <TextInput  onChangeText={(classNumber) => setClassNum(classNumber)} label={'Class number'}></TextInput>
            <TextInput onChangeText={(classTitle) => setClassTitle(classTitle)} label={'Class Title'}></TextInput>
            <Button onPress={() => storeData(selectedLanguage)} >save data </Button>
            <Button onPress={getstate}>retreive data </Button>
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



