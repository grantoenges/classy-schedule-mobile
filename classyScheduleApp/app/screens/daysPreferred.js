import React from 'react';
import {SafeAreaView, View, StyleSheet } from 'react-native';
import {Button, Card, Checkbox, Text} from 'react-native-paper'

const DaysPrefFun = ({navigation}) => {
  const [mondayChecked, setMondayChecked] = React.useState(false);
  const [tuesdayChecked, setTuesdayChecked] = React.useState(false);
  const [wednesdayChecked, setWednesdayChecked] = React.useState(false);
  const [thursdayChecked, setThursdayChecked] = React.useState(false);
  const [fridayChecked, setFridayChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <Card style={styles.cardStyle}>
            <Card.Title title= "Days Preferred to Teach"/>
            <Text>
              <center>Select Days Preferred to Teach</center>
            </Text>
        </Card>

        <View >
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Monday" 
            color="black"
            uncheckedColor="black"
            status={mondayChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setMondayChecked(!mondayChecked);
            }} 
          />
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Tuesday" 
            color="black"
            uncheckedColor="black"
            status={tuesdayChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setTuesdayChecked(!tuesdayChecked);
            }} 
          />
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Wednesday" 
            color="black"
            uncheckedColor="black"
            status={wednesdayChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setWednesdayChecked(!wednesdayChecked);
            }} 
          />
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Thursday" 
            color="black"
            uncheckedColor="black"
            status={thursdayChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setThursdayChecked(!thursdayChecked);
            }} 
          />
          <Checkbox.Item 
            labelStyle={styles.label}
            label="Friday" 
            color="black"
            uncheckedColor="black"
            status={fridayChecked ? 'checked' : 'unchecked'} 
            onPress={() => {
              setFridayChecked(!fridayChecked);
            }} 
          />
        </View>
      <Button>Submit Day Preferences</Button>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
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
  

export default DaysPrefFun;