import React from "react";
import { SafeAreaView, View, Text,Image, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { MyComponent } from "./shake";

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
  /**This function navigates the user to the Api test listing page */
  const ApiLister = () => navigation.navigate("Api List");

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Title title="Welcome Screen" />
      </Card>
      <Button mode="outlined" style={styles.buttonStyle} onPress={login}>
        Login
      </Button>
      <Button mode="outlined"  style={styles.buttonStyle} onPress={prefs}>
        Preferences
      </Button>
      <Button mode="outlined"  icon="cog" style={styles.buttonStyle} onPress={settings}>
        Settings
      </Button>
      <Button mode="outlined" style={styles.buttonStyle} onPress={schedule}>
        Schedule
      </Button>
      <Button mode="outlined" style={styles.buttonStyle} onPress={Input}>
        Class Input
      </Button>
      <Button mode="outlined" style={styles.buttonStyle} onPress={ApiTester}>
        API Test
      </Button>
      <Button mode="outlined" style={styles.buttonStyle} onPress={ApiLister}>
        API Test (Will crash)
      </Button>
      <Button mode="outlined" style={styles.buttonStyle} onPress={MyComponent}>
        shake Test (Will crash)
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  tinyLogo:{
    width: 150,
    height: 150,
    marginTop: 10,
    alignItems: "center",
    marginTop: "30%",
  },
  cardStyle: {
    backgroundColor: "grey",
  },
  buttonStyle: {
    
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default WelcomeScreenFun;
