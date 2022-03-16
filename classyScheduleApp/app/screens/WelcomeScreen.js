import React from "react";
import { SafeAreaView, View, Text,Image, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";

const WelcomeScreenFun = ({ navigation }) => {
  const login = () => navigation.navigate("Login");
  const prefs = () => navigation.navigate("Preferences");
  const settings = () => navigation.navigate("Settings");
  const schedule = () => navigation.navigate("Schedule");
  const Input = () => navigation.navigate("Class Input");
  const ApiTester = () => navigation.navigate("Api Test");

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
        API Test (Will crash)
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
