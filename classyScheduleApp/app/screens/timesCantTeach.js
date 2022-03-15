import React from 'react';
import { useState, CheckBox } from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput, Checkbox} from 'react-native-paper';


const TimesCTFun = ({navigation}) => {
  const [morningChecked, setMorningChecked] = React.useState(false);
  const [afternoonChecked, setAfternoonChecked] = React.useState(false);
  const [eveningChecked, setEveningChecked] = React.useState(false);

  const times3DaysWeek = [
    {
      name: "8:15am-9:20am"
    },
    {
      name: "9:35am-10:40am"
    },
    {
      name: "10:55am-12:00am"
    },
    {
      name: "12:15am-1:20am"
    },
    {
      name: "1:35am-2:40am"
    }
  ];

  const times2DaysWeek = [
    {
      name: "8:00am-9:40am"
    },
    {
      name: "9:55am-11:35am"
    },
    {
      name: "1:30am-3:10am"
    },
    {
      name: "3:25am-5:00am"
    },
    {
      name: "5:30am-7:15am"
    },
    {
      name: "7:30am-9:15am"
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Times Can't Teach Screen"/>
        </Card>
      
      <View >
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Morning" 
            color="black"
            uncheckedColor="black"
            status={morningChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setMorningChecked(!morningChecked);
            }} 
          />
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Afternoon" 
            color="black"
            uncheckedColor="black"
            status={afternoonChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setAfternoonChecked(!afternoonChecked);
            }} 
          />
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Evening" 
            color="black"
            uncheckedColor="black"
            status={eveningChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setEveningChecked(!eveningChecked);
            }} 
          />
        </View>  

    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#fff',
    },
    cardStyle:{
        backgroundColor:"powderblue"
    },
    buttonStyle:{
        backgroundColor :"silver"
    },
    label: {
      color: 'black'
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
  

export default TimesCTFun;


