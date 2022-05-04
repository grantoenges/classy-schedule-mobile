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
import styles from "../Style";

// TimesCTFun creates useState objects for each teaching time group and each possible teaching time slot
// it then creates the page view, containing title and checkboxes for each time group and each possible teaching time slot
const TimesCTFun = ({ navigation }) => {
  const paperTheme = useTheme();
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
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: paperTheme.colors.background },
      ]}
    >
      <ScrollView>
        <Button
          mode="contained"
          onPress={() =>
            Alert.alert(
              JSON.stringify({
                morning: morningChecked,
                afternoon: afternoonChecked,
                evening: eveningChecked,
                slot1: threeDay1Checked,
                slot2: threeDay2Checked,
                slot3: threeDay3Checked,
                slot4: threeDay4Checked,
                slot5: threeDay5Checked,
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
            Time Of Day Preferred To Teach
          </Text>
        </Card>

        <View>
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="Morning"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={morningChecked ? "checked" : "unchecked"}
            onPress={() => {
              setMorningChecked(!morningChecked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="Afternoon"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={afternoonChecked ? "checked" : "unchecked"}
            onPress={() => {
              setAfternoonChecked(!afternoonChecked);
            }}
          />
          <Checkbox.Item
            labelStyle={paperTheme.label.color}
            label="Evening"
            color={paperTheme.label.color}
            uncheckedColor={paperTheme.label.color}
            status={eveningChecked ? "checked" : "unchecked"}
            onPress={() => {
              setEveningChecked(!eveningChecked);
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
