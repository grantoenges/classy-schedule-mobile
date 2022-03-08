import React from 'react';
import { useState, CheckBox } from 'react';
import { SafeAreaView, View,Text,StyleSheet } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'

const DaysPrefFun = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const days = [
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Days preferred to teach Screen"/>
        </Card>

    <div className="App">
      <h3>Days Preferred To Teach</h3>
      <ul className="days-list">
        {days.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="days-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    <Button>Submit Day Preferences </Button>
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
  

export default DaysPrefFun;


