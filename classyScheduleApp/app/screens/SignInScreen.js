import React, { Component, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Appearance,
} from "react-native";
import { Button, TextInput, Title, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuthorization, signIn } from "../databaseService";
import styles from '../Style'
import { 
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync 
} from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';


//Function that validates email
function emailValidator(email) {
  //Regular expression to check if there is valid email format
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return "Email can't be empty.";
  }
  if (!re.test(email)) {
    return "Ooops! We need a valid email address.";
  }
  return "";
}

//Function checks to see if password field is empty or not
function passwordValidator(password) {
  if (password.length === 0) {
    return "Cannot have empty password field";
  }
  return "";
}

//function that securely stores the username/password
async function getSecureValue(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("Here's your value \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

async function saveSecureValue(key, value) {
  await SecureStore.setItemAsync(key, value);
}


const SignInScreenFun = ({ navigation }) => {
  global.AUTH = signIn();
  //global.AUTH = AUTH._W
  const Welcome = () => navigation.navigate("Welcome");
  let value = value || "";
  //let styles = COLORSCHEME[0] ==='dark' ? darkStyles : lightStyles;
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  //when biometric login is selected 
  const onBiometricsPressed = async () => {
    //check if biometrics are available on the device
    const compatible = await hasHardwareAsync()
    if(compatible){
      //check to see if biometrics are saved
      const savedBiometrics = await isEnrolledAsync();
      //biometrics are saved on device
      if(savedBiometrics) {
        const bioAuthenticate = await authenticateAsync();
        if(bioAuthenticate.success){
          //user is authenticated, get username and password
          const username = await SecureStore.getItemAsync('username');
          const password = await SecureStore.getItemAsync('password');
          //send the sign in request and change the page the user is on
          global.TEMP = signIn(username, password).then((response) => {
            if(response.token){
              //succesful login
              global.AUTH = response.token;
              global.USERNAME = response.username;
              global.ROLE = response.user_role;
              global.USERID = response.user_id;
              setLoading(false);
              navigation.navigate("Welcome")
            } else {
              //unsucessful login
              alert(response.message);
              setLoading(false);
            }
          });
        } else {
          alert('could not Authenticate user');
        }
      } else {
        alert('No Saved Biometrics on device');
        return;
      }
    } else {
      alert('device does not support biometrics');
      return;
    }
  }

  //When login is pressed this will run error checkers and navigation if no problems
  const onLoginPressed = () => {
    setLoading(true);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      alert(emailError + " " + passwordError);
      setLoading(false);
    } else {
      //send sign in request
      global.TEMP = signIn(email.value, password.value).then((response) => {
        console.log("response", response);
        if (response.token) {
          //succesful login
          console.log("succesful login");
          AsyncStorage.setItem("Auth", response.token);
          AsyncStorage.setItem("Username", response.username);
          AsyncStorage.setItem("Role", response.user_role);
          AsyncStorage.setItem("UserId", response.user_id.toString());
          setLoading(false);
          navigation.navigate("Welcome");
        } else {
          //unsucessful login
          alert(response.message);
          setLoading(false);
        }
      });
    }
  };
  {
    /*
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };  */
  }
  //const colorScheme = "dark";
  const paperTheme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.noPadContainer,
        { backgroundColor: paperTheme.colors.background },
      ]}
    >
      <View style={styles.generalOverlay}>
        {/* Email input field */}
      <TextInput
        style={styles.TextInput}
        label= "Email"
        placeholderTextColor="#ABC"
        value={email.value}
        onChangeText={(email) => setEmail({ value: email, error: "" })}
        error={!!email.error}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      {/* Password input field */}
      <TextInput
        style={styles.TextInput}
        label = "Password"
        placeholderTextColor="#ABC"
        value={password.value}
        secureTextEntry={true}
        onChangeText={(password) => setPassword({ value: password, error: "" })}
        error={!!password.error}
        errorText={password.error}
      />
      {/* Login button */}
      <Button mode="contained" style={styles.generalButtonContained}  loading ={isLoading} onPress={() => onLoginPressed()}>Login</Button>
      {/* Navigate to welcome- will delete */}
      <Button mode="text" style={[styles.generalButton, {marginBottom: 5}]}  icon="account-plus"  onPress={Welcome}>Navigate to Welcome</Button>
      {/* Forgot password */}
      <TouchableOpacity style={styles.centerPage} onPress={() => alert("Then remember it!")}>
        <Text style={{color: paperTheme.textStyle.color}}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style = {styles.centerPage}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/ClassyLogoSquare.png')}
      />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreenFun;
