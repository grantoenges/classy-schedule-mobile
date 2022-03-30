import React from "react";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Button, Card, Checkbox, Text } from "react-native-paper";
import styles from '../Style'
const DaysPrefFun = ({ navigation }) => {
  const [mondayChecked, setMondayChecked] = useState(false);
  const [tuesdayChecked, setTuesdayChecked] = useState(false);
  const [wednesdayChecked, setWednesdayChecked] = useState(false);
  const [thursdayChecked, setThursdayChecked] = useState(false);
  const [fridayChecked, setFridayChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Title title="Days Preferred to Teach" />
      </Card>

      <View>
        <Checkbox.Item
          labelStyle={styles.label}
          label="Monday"
          color="black"
          uncheckedColor="black"
          status={mondayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setMondayChecked(!mondayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="Tuesday"
          color="black"
          uncheckedColor="black"
          status={tuesdayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setTuesdayChecked(!tuesdayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="Wednesday"
          color="black"
          uncheckedColor="black"
          status={wednesdayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setWednesdayChecked(!wednesdayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="Thursday"
          color="black"
          uncheckedColor="black"
          status={thursdayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setThursdayChecked(!thursdayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="Friday"
          color="black"
          uncheckedColor="black"
          status={fridayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setFridayChecked(!fridayChecked);
          }}
        />
      </View>
      <Button>Save Day Preferences</Button>
    </SafeAreaView>
  );
};


export default DaysPrefFun;
