import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import {
  Button,
  Card,
  TextInput,
  Checkbox,
  useTheme,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Style";

// TimesCTFun creates useState objects for each teaching time group and each possible teaching time slot
// it then creates the page view, containing title and checkboxes for each time group and each possible teaching time slot
const TimesCTFun = ({ navigation }) => {
  const paperTheme = useTheme();

  /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
  const [isLoading, setLoading] = useState(true);
  //const [dummy, setDummy] = React.useState(false);


  const [threeDay1Checked, setThreeDay1Checked] = useState(false);
  const [threeDay2Checked, setThreeDay2Checked] = useState(false);
  const [threeDay3Checked, setThreeDay3Checked] = useState(false);
  const [threeDay4Checked, setThreeDay4Checked] = useState(false);
  const [threeDay5Checked, setThreeDay5Checked] = useState(false);

  const [twoDay1Checked, setTwoDay1Checked] = useState(false);
  const [twoDay2Checked, setTwoDay2Checked] = useState(false);
  const [twoDay3Checked, setTwoDay3Checked] = useState(false);
  const [twoDay4Checked, setTwoDay4Checked] = useState(false);
  const [twoDay5Checked, setTwoDay5Checked] = useState(false);
  const [twoDay6Checked, setTwoDay6Checked] = useState(false);
 

  /*
  sendTimesPreferences's purpose is to make a call to the API point and set our usestate variable to the data that 
  should be returned while also updating the isLoading variable to reflect the loading status 
    ------------------
    Inputs: None
    Outputs: None (But the data variable should be set to the json from the API)
    -------------------
   If for some reason the API call fails then the try catch block should be aware of that failure and 
   should send that error to the console.log 
  */
  const sendTimesPreferences = async () => {
    try {
      setLoading(true);
      const auth = await AsyncStorage.getItem("Auth");
      const userRole = await AsyncStorage.getItem("Role");
      const userId = await AsyncStorage.getItem("UserId");

      console.log("Current auth token", auth);
      console.log("Current userId", userId);
      console.log("Current userRole", userRole);
      const response = await fetch(
        "https://capstonedbapi.azurewebsites.net/preference-management/time-slot-preferences/can-teach/save/" +
          userId,
        {
          method: "POST",
          /*,  Example of how headers look for if people are to take this to use on other parts of the app */
          headers: {
            //Will need the authorization to be a saved string each time we sign in
            Authorization: auth, //AUTH._W//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify([
            {
              time_slot_id: 1,
              can_teach: twoDay1Checked,
            },
            {
              time_slot_id: 2,
              can_teach: threeDay1Checked,
            },
            {
              time_slot_id: 3,
              can_teach: threeDay2Checked,
            },
            {
              time_slot_id: 4,
              can_teach: twoDay2Checked,
            },
            {
              time_slot_id: 5,
              can_teach: threeDay3Checked,
            },
            {
              time_slot_id: 6,
              can_teach: threeDay4Checked,
            },
            {
              time_slot_id: 7,
              can_teach: twoDay3Checked,
            },
            {
              time_slot_id: 8,
              can_teach: threeDay5Checked,
            },
            {
              time_slot_id: 9,
              can_teach: twoDay4Checked,
            },
            {
              time_slot_id: 10,
              can_teach: twoDay5Checked,
            },
            {
              time_slot_id: 11,
              can_teach: twoDay6Checked,
            },
          ]),
        }
      );
      //const json = await response.json();
      //alert(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // This function enables the button to run two functions to send professor preferences to the database
  const sendFunctionsCombined = async () => {
    //sendTimeOfDayPreferences();
    sendTimesPreferences();
    alert("Preference sent to database!");
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: paperTheme.colors.background },
      ]}
    >
      <ScrollView>
        <Button mode="contained" onPress={() => sendFunctionsCombined()}>
          Save Preferences
        </Button>
        
        
        <Card
          style={[
            styles.cardStyle,
            { backgroundColor: paperTheme.cardStyle.backgroundColor },
          ]}
        >
          <Text
            style={[
              styles.textStyle,
              { color: paperTheme.cardTextStyle.color },
            ]}
          >
            3 Days a Week Unable to Teach
          </Text>
        </Card>

        <View>
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="8:15am-9:20am"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={threeDay1Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay1Checked(!threeDay1Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="9:35am-10:40am"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={threeDay2Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay2Checked(!threeDay2Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="10:55am-12:00pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={threeDay3Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay3Checked(!threeDay3Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="12:15pm-1:20pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={threeDay4Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay4Checked(!threeDay4Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="1:35pm-2:40pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={threeDay5Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay5Checked(!threeDay5Checked);
            }}
          />
        </View>

        <Card
          style={[
            styles.cardStyle,
            { backgroundColor: paperTheme.cardStyle.backgroundColor },
          ]}
        >
          <Text
            style={[
              styles.textStyle,
              { color: paperTheme.cardTextStyle.color },
            ]}
          >
            2 Days a Week Unable to Teach
          </Text>
        </Card>

        <View>
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="8:00am-9:40am"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={twoDay1Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay1Checked(!twoDay1Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="9:55am-11:35am"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={twoDay2Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay2Checked(!twoDay2Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="1:30pm-3:10pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={twoDay3Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay3Checked(!twoDay3Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="3:25pm-5:00pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={twoDay4Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay4Checked(!twoDay4Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="5:30pm-7:15pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={twoDay5Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay5Checked(!twoDay5Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="7:30pm-9:15pm"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={twoDay6Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay6Checked(!twoDay6Checked);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimesCTFun;
