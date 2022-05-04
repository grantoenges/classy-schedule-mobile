import React from "react";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet, Alert } from "react-native";
import { Button, Card, Checkbox, Text, useTheme } from "react-native-paper";

import styles from "../Style";

// DaysPrefFun creates useState objects for each possible day of the week
// it then creates the page view, containing title and checkboxes for each day of the week
const DaysPrefFun = ({ navigation }) => {
  const paperTheme = useTheme();
  const [mondayChecked, setMondayChecked] = useState(false);
  const [tuesdayChecked, setTuesdayChecked] = useState(false);
  const [wednesdayChecked, setWednesdayChecked] = useState(false);
  const [thursdayChecked, setThursdayChecked] = useState(false);
  const [fridayChecked, setFridayChecked] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: paperTheme.colors.background },
      ]}
    >
      <Button
        mode="contained"
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
        Save Preferences
      </Button>
      <Card
        style={[
          styles.cardStyle,
          { backgroundColor: paperTheme.cardStyle.backgroundColor },
        ]}
      >
        <Text
          style={[styles.textStyle, { color: paperTheme.cardTextStyle.color }]}
        >
          Days Preferred to Teach
        </Text>
      </Card>

      <View>
        <Checkbox.Item
          labelStyle={paperTheme.label.color}
          label="Monday"
          color={paperTheme.label.color}
          uncheckedColor={paperTheme.label.color}
          status={mondayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setMondayChecked(!mondayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={paperTheme.label.color}
          label="Tuesday"
          color={paperTheme.label.color}
          uncheckedColor={paperTheme.label.color}
          status={tuesdayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setTuesdayChecked(!tuesdayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={paperTheme.label.color}
          label="Wednesday"
          color={paperTheme.label.color}
          uncheckedColor={paperTheme.label.color}
          status={wednesdayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setWednesdayChecked(!wednesdayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={paperTheme.label.color}
          label="Thursday"
          color={paperTheme.label.color}
          uncheckedColor={paperTheme.label.color}
          status={thursdayChecked ? "checked" : "unchecked"}
          onPress={() => {
            setThursdayChecked(!thursdayChecked);
          }}
        />
        <Checkbox.Item
          labelStyle={paperTheme.label.color}
          label="Friday"
          color={paperTheme.label.color}
          uncheckedColor={paperTheme.label.color}
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
    </SafeAreaView>
  );
};

export default DaysPrefFun;
