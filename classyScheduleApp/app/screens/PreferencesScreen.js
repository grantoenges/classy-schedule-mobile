import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import styles from "../Style";

/** This method is what displays the screen for this page
 * Inputs: Navigation class (allowing for the page to navigate to other pages)
 * Outputs: An array of buttons that allow for the user to press them and move to other screens
 */
const PreferenceFun = ({ navigation }) => {
  const ClassesCT = () => navigation.navigate("Classes Can Teach");
  const ClassesPT = () => navigation.navigate("Classes Preferred Teach");
  const TimesCT = () => navigation.navigate("Times Unable To Teach");
  const DaysPT = () => navigation.navigate("Days Prefered To Teach");

  //handlers for Long Click help alerts
  const ClassesCTLongClick = () => {
    alert('Brings the user to the classes can teach page where they can select the classes they can teach.');
  };

  const ClassesPTLongClick = () => {
    alert('Brings the user to the classess preferred to teach page where they can select the classes they prefer to teach.');
  };

  const TimesCTLongClick = () => {
    alert('Brings the user to the times unable to teach page where they can select the times they are unable to teach.');
  };

  const DaysPTLongClick = () => {
    alert('Brings the user to the days preferred to teach page where they can select the days they prefer to teach.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollview}>
        <View style={styles.viewStyle}>
          <TouchableOpacity
            mode="contained"
            activeOpacity={0.8}
            style={styles.buttonStyle}
            onPress={ClassesCT}
            onLongPress={ClassesCTLongClick}
          >
            <Text style={styles.textStyle}>Classes Can Teach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            mode="contained"
            style={styles.buttonStyle}
            activeOpacity={0.8}
            onPress={ClassesPT}
            onLongPress={ClassesPTLongClick}
          >
            <Text style={styles.textStyle}>Classes Preferred To Teach</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewStyle}>
          <TouchableOpacity
            mode="contained"
            activeOpacity={0.8}
            style={styles.buttonStyle}
            onPress={TimesCT}
            onLongPress={TimesCTLongClick}
          >
            <Text style={styles.textStyle}>Times Unable To Teach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            mode="contained"
            style={styles.buttonStyle}
            activeOpacity={0.8}
            onPress={DaysPT}
            onLongPress={DaysPTLongClick}
          >
            <Text style={styles.textStyle}>Days Prefered To Teach</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreferenceFun;
