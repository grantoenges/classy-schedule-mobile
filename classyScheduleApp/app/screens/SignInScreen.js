import React, { Component, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getApi} from "../databaseService";
import styles from '../Style'

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

const SignInScreenFun = ({ navigation }) => {
  const newAccount = () => navigation.navigate("New Account");
  let value = value || "";

  const [email, setEmail] = useState({ value: "", error: "" }); 
  const [password, setPassword] = useState({ value: "", error: "" });

  //When login is pressed this will run error checkers and navigation if no problems
  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      alert(emailError + " " + passwordError);
    } else {
      navigation.navigate("Welcome");
    }
  };
  {/*
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };  */}

  return (
    <SafeAreaView style={styles.back}>
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
      <Button loading ={true} mode="contained" onPress={onLoginPressed}>Login</Button>
      <Button icon="account-plus"  onPress={newAccount}>Create Account</Button>
      {/* Forgot password */}
      <TouchableOpacity style={styles.centerPage} onPress={() => alert("Then remember it!")}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <View style = {styles.centerPage}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/ClassyLogoSquare.png')}
      />
      </View>
    </SafeAreaView>
  );
};


export default SignInScreenFun;
