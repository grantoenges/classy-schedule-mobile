import React, { useState } from "react";
import { SafeAreaView, View,Text } from 'react-native';
import {Button, TextInput} from 'react-native-paper'


function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) {
    return "Email can't be empty.";
  } 
  if (!re.test(email)) {
    return "Ooops! We need a valid email address.";
  }
  return "";
}

function passwordValidator(password) {
  //if str does not contain a capital letter return false
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
  setPassword({value: password, error: '' });
  console.log(password);
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
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);
      const samePass = passwordSame(repass, password.value)
      if ((emailError || passwordError) || !samePass) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        alert(emailError + " " + passwordError + " " + samePass);
      } else {
        navigation.navigate("Welcome");
      }
    };

  return (
    <SafeAreaView>

        <TextInput
        label= "Email"
        placeholderTextColor="#ABC"
        value={email.value}
        onChangeText={(email) => setEmail({ value: email, error: "" })}
        error={!!email.error}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
      />
        <TextInput
        label = "Password"
        placeholderTextColor="#ABC"
        value={password.value}
        secureTextEntry={true}
        onChangeText={(password) => setPassword({ value: password, error: "" })}
        error={!!password.error}
        errorText={password.error}
      />
      <TextInput
        label = "Retype Password"
        placeholderTextColor="#ABC"
        value={repass.value}
        secureTextEntry={true}
        onChangeText={(password) => confirmPass({value:password, error: ""})}
      />
        <Button onPress={login}>Navigate to Welcome</Button>
        <Button onPress={onPressed}>Create Account</Button>

    </SafeAreaView>
 );
}


export default NewAccountFunc;