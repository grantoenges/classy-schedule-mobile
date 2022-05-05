import React, { Component, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Appearance,
} from "react-native";
import { Button, TextInput, Title, useTheme} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuthorization, signIn } from "../databaseService";
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
  global.AUTH = signIn();
  //global.AUTH = AUTH._W
  const newAccount = () => navigation.navigate("Change Password");
  let value = value || "";
  //let styles = COLORSCHEME[0] ==='dark' ? darkStyles : lightStyles;
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState({ value: "", error: "" }); 
  const [password, setPassword] = useState({ value: "", error: "" });
  

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
        console.log('response', response);
        if(response.token){
          //succesful login
          console.log('succesful login');
          AsyncStorage.setItem(
            'Auth',
            response.token
          );
          AsyncStorage.setItem(
            'Username',
            response.username
          );
          AsyncStorage.setItem(
            'Role',
            response.user_role
          );
          AsyncStorage.setItem(
            'UserId',
            response.token
          );
          setLoading(false);
          navigation.navigate("Welcome")
        } else {
          //unsucessful login
          alert(response.message);
          setLoading(false);
        }
      });
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
  //const colorScheme = "dark";
  const paperTheme = useTheme();
  
  return (
    <SafeAreaView style={[styles.noPadContainer, {backgroundColor: paperTheme.colors.background}]}>
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
      {/* Account Creation */}
      <Button mode="text" style={[styles.generalButton, {marginBottom: 5}]}  icon="account-plus"  onPress={newAccount}>Create Account</Button>
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
