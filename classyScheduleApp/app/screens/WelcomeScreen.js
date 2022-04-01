import React from "react";
import { SafeAreaView, View, Text,Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Card, TextInput, TouchableRipple } from "react-native-paper";
import { MyComponent } from "./shake";
import RNShake from 'react-native-shake';

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
        <View style={styles.viewStyle}>
          <TouchableOpacity mode="contained" style={styles.buttonStyle} onPress={Input}>
            <Text style={styles.textStyle}>Class Input</Text>
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
