import React from "react";
import { SafeAreaView, View, Text,Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, TextInput, TouchableRipple } from "react-native-paper";
import styles from '../Style'
const WelcomeScreenFun = ({ navigation }) => {
  const login = () => navigation.navigate("Login");
  const prefs = () => navigation.navigate("Preferences");
  const settings = () => navigation.navigate("Settings");
  const schedule = () => navigation.navigate("Schedule");
  const Input = () => navigation.navigate("Class Input");
  const ApiTester = () => navigation.navigate("Api Test");
//Color for react native button text is #6200ed
//Might need to change textFamily for android in textStyle
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
          <TouchableOpacity mode="contained" style={styles.buttonStyle} onPress={ApiTester}>
            <Text style={styles.textStyle}>API Test</Text> 
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
};



export default WelcomeScreenFun;
