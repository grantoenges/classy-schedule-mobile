import React from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput, useTheme,Switch,Checkbox } from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import styles from '../Style'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ClassInputFun = () => {
    const paperTheme = useTheme();
    /** This use state is used to hold onto selected language (test variable) allowing for dynamic selection in the drop down menu. */
    const [selectedLanguage, setSelectedLanguage] = useState("1");
    /** This use state is used for storage of the classes string title. */
    const [classTitle, setClassTitle] = useState();
    /** This use state is used for the storage of the classes integer number. */
    const [classNumber, setClassNum] = useState("");
    /** This use state is used for the storage of the classes integer capacity. */
    const [classCapacity, setClassCapacity] = useState();
        /** This use state is used for the storage of the classes integer credits value. */
    const [classCredits, setClassCredits] = useState("4");

    const [isLab, setIsLab] = useState(false);

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

    const sendClass = async() =>{
      try{
       setLoading(true);
       const auth = await AsyncStorage.getItem('Auth');
       const id = await AsyncStorage.getItem('UserId');
   
       const response = await fetch('https://capstonedbapi.azurewebsites.net/preference-management/class-preferences/prefer-to-teach/save/'+id, {
         method: 'POST',
         /*,  Example of how headers look for if people are to take this to use on other parts of the app */ 
         headers: { 
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': auth//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
         },
           body: JSON.stringify(dataT)
         });
         const json = await response.json();
       alert(json);
       }
         catch (error) {
           console.error(error);
         } finally {
           setLoading(false);
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
      alert("dept_id:"+selectedLanguage +"\nclass_num:" + classNumber+"\nTitle:" + classTitle +"\nCredits:"+ classCredits +"\nLab:"+isLab);
      
    }
    const onChange = (val) =>{
      setClassNum(val.replace(/[^0-9]/g, ''));
  }

 const onChangeNumericInput = (value) =>{
   if (value.length ===0 || value == 'NaN'){
     return ''
   }
  let x = parseInt(value.replace(/[^0-9]/g, '')).toString();
  if (x =='NaN'){
    return '';
  }
  return(x);
}
//<Text>{isLab? "This class is a lab" : "This class is not a lab"} </Text>
//<Switch value = {isLab} onValueChange={() => setIsLab(!isLab)}/>
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: paperTheme.colors.background}]}>
        <Card style={style.cardStyle}>
            
            <Picker color='purple' style={style.buttonStyle} selectedValue={selectedLanguage}  dropdownIconRippleColor='#7F46C7' prompt='Pick department' onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
              <Picker.Item label="Computer Science" value="1" />
              <Picker.Item label="Statistics" value="0" />
            </Picker>
            <TextInput keyboardType="numeric" maxLength={4} value={classNumber} onChangeText={classNumber =>setClassNum(onChangeNumericInput(classNumber))}  label={'Class Number'}></TextInput>
            <TextInput maxLength={30} multiline={false} value={classTitle} onChangeText={(classTitle) => setClassTitle(classTitle)} label={'Class Title'}></TextInput>
            <TextInput keyboardType='numeric' maxLength={4} value={classCapacity} onChangeText={(classCapacity) => setClassCapacity(onChangeNumericInput(classCapacity))} label={'Capacity'}></TextInput>
            <TextInput keyboardType='numeric' maxLength={2}  value={classCredits} onChangeText={(classCredits) => setClassCredits(onChangeNumericInput(classCredits))} label={'Credits'}></TextInput>
            
            <Checkbox.Item label = {isLab? "This class is a lab" : "This class is not a lab"} color = "purple" uncheckedColor = "black" status = {isLab? 'checked':'unchecked'} onPress = {() => setIsLab(!isLab)}/>

            <Button mode="contained" onPress={getstate} >save data </Button>
        </Card>
    </SafeAreaView>
 );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  cardStyle:{
   // backgroundColor:"powderblue"
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