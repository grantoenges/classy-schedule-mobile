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
  /**This function navigates the user to the Classes Can Teach page */
  const ClassesCT = () => navigation.navigate("Classes Can Teach");
  /**This function navigates the user to the Classes Preferred Teach page */
  const ClassesPT = () => navigation.navigate("Classes Preferred Teach");
  /**This function navigates the user to the Times Unable To Teach page */
  const TimesCT = () => navigation.navigate("Times Unable To Teach");
  /**This function navigates the user to the Days Preferred To Teach page */
  const DaysPT = () => navigation.navigate("Days Prefered To Teach");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollview}>
        <View style={styles.viewStyle}>
          <TouchableOpacity
            mode="contained"
            activeOpacity={0.8}
            style={styles.buttonStyle}
            onPress={ClassesCT}
          >
            <Text style={styles.textStyle}>Classes Can Teach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            mode="contained"
            activeOpacity={0.8}
            style={styles.buttonStyle}
            onPress={ClassesPT}
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
          >
            <Text style={styles.textStyle}>Times Unable To Teach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            mode="contained"
            activeOpacity={0.8}
            style={styles.buttonStyle}
            onPress={DaysPT}
          >
            <Text style={styles.textStyle}>Days Prefered To Teach</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreferenceFun;
