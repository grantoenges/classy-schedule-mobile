import React from "react";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet, Alert } from "react-native";
import { Button, Card, Checkbox, Text } from "react-native-paper";

import styles from '../Style'

// DaysPrefFun creates useState objects for each possible day of the week
// it then creates the page view, containing title and checkboxes for each day of the week
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
        <Text>Monday is {mondayChecked ? "True" : "False"}</Text>
        <Text>Tuesday is {tuesdayChecked ? "True" : "False"}</Text>
        <Text>Wednesday is {wednesdayChecked ? "True" : "False"}</Text>
        <Text>Thursday is {thursdayChecked ? "True" : "False"}</Text>
        <Text>Friday is {fridayChecked ? "True" : "False"}</Text>
      </View>
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

      {/* Code in preparation for database endpoints to be made to receive day preferences
      <Button
        onPress={() =>
          fetch("https://mywebsite.com/endpoint/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              monday: mondayChecked,
              tuesday: "yourOtherValue",
            }),
          })
        }
      >
        Save Days Preferred to Teach
      </Button>
      */}

      <Button
        onPress={() =>
          Alert.alert(
            JSON.stringify({
              monday: mondayChecked,
              tuesday: tuesdayChecked,
              wednesday: wednesdayChecked,
              thursday: thursdayChecked,
              friday: fridayChecked,
            })
          )
        }
      >
        Save Days Preferred to Teach JSON ALERT
      </Button>
    </SafeAreaView>
  );
};

export default DaysPrefFun;
