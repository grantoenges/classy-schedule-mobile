import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Pressable,
} from "react-native";
import { Button, Card, TextInput, TouchableRipple, Modal, useTheme} from "react-native-paper";
import { MyComponent } from "./Shake";
import RNShake from "react-native-shake";
import styles from "../Style";

/** This method is what displays the screen for this page
 * Inputs: Navigation class (allowing for the page to navigate to other pages)
 * Outputs: An array of buttons that allow for the user to press them and move to other screens
 */

const WelcomeScreenFun = ({ navigation }) => {
  global.auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDk0NTA0NDgsImV4cCI6MTY1MDA1NTI0OCwiaWF0IjoxNjQ5NDUwNDQ4fQ.OoPrpvgpbItWR-m_SSq-SqunbLWPSLd2nuBQZldBjGg';
  const paperTheme = useTheme();
  let buttonColor = paperTheme.buttonStyle;
  
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
  /**This function navigates the user to the Api list page */
  const ApiLister = () => navigation.navigate("Api List");

  //Color for react native button text is #6200ed
  //Might need to change textFamily for android in textStyle

  //This is where the shake work/testing/failure is happening
  const MyComponent = () => {
    React.useEffect(() => {
      const subscription = RNShake.addListener(() => {
        // Your code here...
        console.log("shook");
      });

      return () => {
        // Your code here...
        console.log("Not ");
        //subscription.remove()
      };
    }, []);
  };


  
//Use state constants for modal visibility
  const [loginModal, setModalLogin] = useState(false);
  const [prefModal, setModalPref] = useState(false);
  const [settingsModal, setModalSettings] = useState(false);
  const [scheduleModal, setModalSchedule] = useState(false);
  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: paperTheme.colors.background}]}>
      <View style={styles.overlay}>
        <View style={styles.viewStyle}>
          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={login}
            onLongPress={() => setModalLogin(true)}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>Logout</Text>
            <Modal
              contentContainerStyle={styles.modalStyle}
              animationType="slide"
              transparent={true}
              visible={loginModal}
              onDismiss={() => {
                setModalLogin(!loginModal);
              }}
            >
            
            <Pressable
              style={styles.modalStyle}
              onPress={() => setModalLogin(!loginModal)}
              >
                <Text style={styles.modalText}>Logs the user out and returns the user to the login page.</Text>
            </Pressable>
            
            </Modal>
          </TouchableOpacity>

          <TouchableOpacity
            mode="contained"
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={prefs}
            onLongPress={() => setModalPref(true)}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>Preferences</Text>
            <Modal
              contentContainerStyle={styles.modalStyle}
              animationType="slide"
              transparent={true}
              visible={prefModal}
              onDismiss={() => {
                setModalPref(!prefModal);
              }}
            >
            
            <Pressable
              style={styles.modalStyle}
              onPress={() => setModalPref(!prefModal)}
              >
                <Text style={styles.modalText}>Brings the user to the preferences menu where they can select their preferences.</Text>
            </Pressable>
            
            </Modal>
          </TouchableOpacity>
        </View>

        <View style={styles.viewStyle}>
          <TouchableOpacity
            mode="contained"
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={settings}
            onLongPress={() => setModalSettings(true)}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>Settings</Text>
            <Modal
              contentContainerStyle={styles.modalStyle}
              animationType="slide"
              transparent={true}
              visible={settingsModal}
              onDismiss={() => {
                setModalSettings(!settingsModal);
              }}
            >
            
            <Pressable
              style={styles.modalStyle}
              onPress={() => setModalSettings(!settingsModal)}
              >
                <Text style={styles.modalText}>Brings the user to the settings menu where they can adjust their settings.</Text>
            </Pressable>
            
            </Modal>
          </TouchableOpacity>
          <TouchableOpacity
            mode="contained"
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={schedule}
            onLongPress={() => setModalSchedule(true)}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>Schedule</Text>
            <Modal
              contentContainerStyle={styles.modalStyle}
              animationType="slide"
              transparent={true}
              visible={scheduleModal}
              onDismiss={() => {
                setModalSchedule(!scheduleModal);
              }}
            >
            
            <Pressable
              style={styles.modalStyle}
              onPress={() => setModalSchedule(!scheduleModal)}
              >
                <Text style={styles.modalText}>Brings the user to the schedule page where they can see their schedule.</Text>
            </Pressable>
            
            </Modal>
          </TouchableOpacity>
        </View>

        <View style={styles.viewStyle}>
          <TouchableOpacity
            mode="contained"
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={Input}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>Class Input</Text>
          </TouchableOpacity>
          <TouchableOpacity
            mode="contained"
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={ApiLister}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>API checklist example</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewStyle}>
          <TouchableOpacity
            mode="contained"
            style={[styles.buttonStyle, {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
            activeOpacity={0.8}
            onPress={ApiTester}
          >
            <Text style={[styles.textStyle, {color: buttonColor.textColor}]}>APi test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreenFun;
