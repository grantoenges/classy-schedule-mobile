import React from "react";
import { SafeAreaView, View, Text,Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, TextInput, TouchableRipple } from "react-native-paper";

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
      <Card style={styles.cardStyle}>
        <Card.Title title="Navigation Screen" />
      </Card>

      <View style={styles.centerPage}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  centerPage: {
    marginTop: 40,
    justifyContent: "center",
    alignItems:"center"
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
    width: "100%",
    height: "100%",
    minWidth: 150,
    minHeight: 150,
    maxWidth:175,
    maxHeight: 175,
    textAlign: "center",
    backgroundColor: "#6200ed",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    elevation: 10,
    justifyContent: "center",
  },
  textStyle: {
    
    //color: "#6200ed",
    color: "white",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
    fontWeight: '500',
    fontSize: 14,
    fontFamily: "System",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginVertical: 9,
    marginHorizontal: 16,
  },

  viewStyle: {
    flex:-1,
    flexDirection:"row",
    marginTop: 10,
  }
});

export default WelcomeScreenFun;
