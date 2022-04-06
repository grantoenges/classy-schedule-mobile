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
import { Button, Card, TextInput, Checkbox } from "react-native-paper";
import styles from "../Style";

// TimesCTFun creates useState objects for each teaching time group and each possible teaching time slot
// it then creates the page view, containing title and checkboxes for each time group and each possible teaching time slot
const TimesCTFun = ({ navigation }) => {
  const [morningChecked, setMorningChecked] = useState(false);
  const [afternoonChecked, setAfternoonChecked] = useState(false);
  const [eveningChecked, setEveningChecked] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.cardStyle}>
          <Card.Title title="Time Of Day Preferred To Teach" />
        </Card>

        <View>
          <Button
            onPress={() =>
              Alert.alert(
                JSON.stringify({
                  morning: morningChecked,
                  afternoon: afternoonChecked,
                  evening: eveningChecked,
                })
              )
            }
          >
            Save Time of Day Preferences
          </Button>
          <Checkbox.Item
            labelStyle={styles.label}
            label="Morning"
            color="black"
            uncheckedColor="black"
            status={morningChecked ? "checked" : "unchecked"}
            onPress={() => {
              setMorningChecked(!morningChecked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="Afternoon"
            color="black"
            uncheckedColor="black"
            status={afternoonChecked ? "checked" : "unchecked"}
            onPress={() => {
              setAfternoonChecked(!afternoonChecked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="Evening"
            color="black"
            uncheckedColor="black"
            status={eveningChecked ? "checked" : "unchecked"}
            onPress={() => {
              setEveningChecked(!eveningChecked);
            }}
          />
        </View>

        <Card style={styles.cardStyle}>
          <Card.Title title="3 Days A Week Times Unable To Teach" />
        </Card>

        <View>
          <Button
            onPress={() =>
              Alert.alert(
                JSON.stringify({
                  slot1: threeDay1Checked,
                  slot2: threeDay2Checked,
                  slot3: threeDay3Checked,
                  slot4: threeDay4Checked,
                  slot5: threeDay5Checked,
                })
              )
            }
          >
            Save 3 Days A Week Times Unable To Teach
          </Button>
          <Checkbox.Item
            labelStyle={styles.label}
            label="8:15am-9:20am"
            color="black"
            uncheckedColor="black"
            status={threeDay1Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay1Checked(!threeDay1Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="9:35am-10:40am"
            color="black"
            uncheckedColor="black"
            status={threeDay2Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay2Checked(!threeDay2Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="10:55am-12:00pm"
            color="black"
            uncheckedColor="black"
            status={threeDay3Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay3Checked(!threeDay3Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="12:15pm-1:20pm"
            color="black"
            uncheckedColor="black"
            status={threeDay4Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay4Checked(!threeDay4Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="1:35pm-2:40pm"
            color="black"
            uncheckedColor="black"
            status={threeDay5Checked ? "checked" : "unchecked"}
            onPress={() => {
              setThreeDay5Checked(!threeDay5Checked);
            }}
          />
        </View>

        <Card style={styles.cardStyle}>
          <Card.Title title="2 Days A Week Times Unable To Teach" />
        </Card>

        <View>
          <Button
            onPress={() =>
              Alert.alert(
                JSON.stringify({
                  slot1: twoDay1Checked,
                  slot2: twoDay2Checked,
                  slot3: twoDay3Checked,
                  slot4: twoDay4Checked,
                  slot5: twoDay5Checked,
                  slot6: twoDay6Checked,
                })
              )
            }
          >
            Save 2 Days A Week Times Unable To Teach
          </Button>
          <Checkbox.Item
            labelStyle={styles.label}
            label="8:00am-9:40am"
            color="black"
            uncheckedColor="black"
            status={twoDay1Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay1Checked(!twoDay1Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="9:55am-11:35am"
            color="black"
            uncheckedColor="black"
            status={twoDay2Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay2Checked(!twoDay2Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="1:30pm-3:10pm"
            color="black"
            uncheckedColor="black"
            status={twoDay3Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay3Checked(!twoDay3Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="3:25pm-5:00pm"
            color="black"
            uncheckedColor="black"
            status={twoDay4Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay4Checked(!twoDay4Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="5:30pm-7:15pm"
            color="black"
            uncheckedColor="black"
            status={twoDay5Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay5Checked(!twoDay5Checked);
            }}
          />
          <Checkbox.Item
            labelStyle={styles.label}
            label="7:30pm-9:15pm"
            color="black"
            uncheckedColor="black"
            status={twoDay6Checked ? "checked" : "unchecked"}
            onPress={() => {
              setTwoDay6Checked(!twoDay6Checked);
            }}
          />
        </View>
        <Button>Save Day Preferences</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimesCTFun;
