
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";
import styles from "../Style";
import WeeklyCalendar from "react-native-weekly-calendar";


/*This method is used to fetch and to display a users schedule to them.
It should set the day to the current day, having the calandar sync with the current day.
*/
const ScheduleFun = () => {
  const paperTheme = useTheme();
  //This current iteration of the app cannot fetch a users schedule just yet so we have just made a sample version of a schedule for testing.
  const sampleEvents = [
    {
      start: "2022-04-11 10:15:00",
      duration: "01:00:00",
      note: "Teach Intro to Cisc",
    },
    {
      start: "2022-04-13 10:15:00",
      duration: "01:00:00",
      note: "Teach Intro to Cisc",
    },
    {
      start: "2022-04-15 10:15:00",
      duration: "01:00:00",
      note: "Teach Intro to Cisc",
    },
    {
      start: "2022-04-11 13:35:00",
      duration: "01:00:00",
      note: "Teach computer graphics",
    },
    {
      start: "2022-04-13 13:35:00",
      duration: "01:00:00",
      note: "Teach computer graphics",
    },
    {
      start: "2022-04-15 13:35:00",
      duration: "01:00:00",
      note: "Teach computer graphics",
    },
    {
      start: "2022-04-14 13:35:00",
      duration: "02:00:00",
      note: "Intro to cisc lab",
    },
    {
      start: "2022-04-16 13:35:00",
      duration: "01:00:00",
      note: "Read Sawins angry emails",
    },
  ];
  //"#7F46C7" original schedule color
  return (
    <View
      style={[
        styless.container,
        { backgroundColor: paperTheme.colors.background },
      ]}
    >
      <WeeklyCalendar
        events={sampleEvents}
        style={styles.scheduleHeight}
        themeColor="#6200ed"
        selected="2022-04-11"
      />
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScheduleFun;
