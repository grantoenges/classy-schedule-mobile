import React, { useState } from "react";
import { SafeAreaView, View,Text, Image, Appearance } from 'react-native';
import {Button, TextInput} from 'react-native-paper'
import styles from '../Style'

//Function that checks to see if there is valid email
function emailValidator(email) {
  //Regular expression that checks if valid email format
  const re = /\S+@\S+\.\S+/
  if (!email) {
    return "Email can't be empty.";
  } 
  if (!re.test(email)) {
    return "Ooops! We need a valid email address.";
  }
  return "";
}

//Function that checks if password is valid and strong
function passwordValidator(password) {
  //if str does not contain a capital letter return false
  if(password.length == 0) {
    return "Error, password cannot be blank."
  }
  if(!/[A-Z]/.test(password)){
    return "Error, password does not contain capital letter.";
  }
  //if str does not contaion a number return false
  if(!/[0-9]/.test(password)){
    return "Error, password does not contain a number.";
  }
  //if str doesn't contain a special character return false
  if(!containsSpecialCharacters(password)){
    return "Error, password does not contain special character.";
  }
  //if str contains "password" return false
  if(containsPassword(password)>-1){
    return "Error, password contains password.";
  }
  //if str is longer than 30 or less than 8 return false
  if(password.length <8 || password.length>30) {
    return "Error, password length is invalid.";
  }
  return ""
}

//take in a string and determine if it contains special characters or not
function containsSpecialCharacters(str) {
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
return (specialChars.test(str));
}

//takes in a string and determines whether or not the substring "password"
//is in it. returns -1 if password is not found in the string
function containsPassword(str) {
lowerCase = str.toLowerCase();
return lowerCase.search("password");
}  

//Checks to see if password and retype password field are same
function passwordSame(password, value) {
  if(password === value) {
    return ""
  } 
  return "Passwords are not the same!"
}

const NewAccountFunc = ({navigation}) => {
    const login = () => navigation.navigate("Welcome");
    //const newAccount = () => navigation.navigate("NewAccount");
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [repass, confirmPass] = useState({value:"", error: ""});
    const onPressed = () => {
      console.log(AUTH._W);
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);
      const samePass = passwordSame(repass, password.value)
      if ((emailError || passwordError) || samePass) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        alert(emailError + " " + passwordError + " " + samePass);
      } else {
        navigation.navigate("Welcome");
      }
    };

    //const colorScheme = "dark";
    let color = (COLORSCHEME[0]==="dark" ? "grey" : "white");
    let color2 = (COLORSCHEME[0]==="dark" ? "grey" : "#6200ed");
  return (
    <SafeAreaView style={styles.noPadContainer}>
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
        {/* Retype password input field */}
        <TextInput
          style={styles.TextInput}
          label = "Retype Password"
          placeholderTextColor="#ABC"
          value={repass.value}
          secureTextEntry={true}
          onChangeText={(passConf) => confirmPass(passConf, password.value)}
        />
        {/* Create account button */}
        <Button style={styles.generalButtonContained} color={color} icon="account-plus"  onPress={onPressed}>Create Account</Button>
        <Button style={styles.generalButton} color={color2} onPress={login}>Navigate to Welcome</Button>
          
        <View style = {styles.centerPage}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/ClassyLogoSquare.png')}
          />
        </View>
      </View>
        
    </SafeAreaView>
  );
}


export default NewAccountFunc;
