import React from "react";
import { SafeAreaView, View, Text,Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Card, TextInput, TouchableRipple } from "react-native-paper";
import { MyComponent } from "./shake";
import RNShake from 'react-native-shake';

import styles from '../Style'

/** This method is what displays the screen for this page
 * Inputs: Navigation class (allowing for the page to navigate to other pages)
 * Outputs: An array of buttons that allow for the user to press them and move to other screens
 */

const WelcomeScreenFun = ({ navigation }) => {
  /**This function navigates the user to the Login page */
  const login = () => navigation.navigate("Login");
  /**This function navigates the user to the Preferences page */
  const prefs = () => navigation.navigate("Preferences");
  /**This function navigates the user to the Settings page */
  const settings = () => navigation.navigate("Settings");
  /**This function navigates the user to the Schedule page */
  const schedule = () => navigation.navigate("Schedule");
  /**This function navigates the user to the Class page */
  const Input = () => navigation.navigate("Class Input");
  /**This function navigates the user to the Api test page */
  const ApiTester = () => navigation.navigate("Api Test");
  const ApiLister = () => navigation.navigate("Api List");

//Color for react native button text is #6200ed
//Might need to change textFamily for android in textStyle

 
 const MyComponent = () => {
  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      // Your code here...
      console.log("shook")
    })

    return () => {
      // Your code here...
      console.log('Not ')
      //subscription.remove()
    }
  }, [])
}


MyComponent();

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyleWelcome}>
        <Card.Title title="Navigation Screen" />
      </Card>

      <View style={styles.centerPageMargin}>
        <View style={styles.viewStyle}>
          <TouchableOpacity mode="contained"  style={styles.buttonStyle} onPress={login}>
            <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity mode="contained"  style={styles.buttonStyle} onPress={prefs}>
            <Text style={styles.textStyle}>Preferences</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewStyle}>
          <TouchableOpacity mode="contained"  icon="cog" style={styles.buttonStyle} onPress={settings}>
            <Text style={styles.textStyle}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity mode="contained" style={styles.buttonStyle} onPress={schedule}>
            <Text style={styles.textStyle}>Schedule</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewStyle}>
          <TouchableOpacity mode="contained" style={styles.buttonStyle} onPress={Input}>
            <Text style={styles.textStyle}>Class Input</Text>
          </TouchableOpacity>
          <TouchableOpacity mode="contained" style={styles.buttonStyle} onPress={ApiLister}>
            <Text style={styles.textStyle}>API List</Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.viewStyle}>
          <TouchableOpacity mode="contained" style={styles.buttonStyle} onPress={Input}>
            <Text style={styles.textStyle}>Class Input</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
};



export default WelcomeScreenFun;
