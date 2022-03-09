import React from 'react';
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
    return false;
  }
  //if str does not contaion a number return false
  if(!/[0-9]/.test(password)){
    return false;
  }
  //if str doesn't contain a special character return false
  if(!containsSpecialCharacters(password)){
    return false;
  }
  //if str contains "password" return false
  if(containsPassword(password)>-1){
    return false;
  }
  //if str is longer than 30 or less than 8 return false
  if(password.length <8 || password.length>30) {
    return false;
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

const NewAccountFunc = ({navigation}) => {
    const login = () => navigation.navigate("Welcome")
    const newAccount = () => navigation.navigate("NewAccount")

  return (
    <SafeAreaView>
        <TextInput label={'Username'}></TextInput>
        <TextInput  secureTextEntry={true}  label={'Password'}></TextInput>
        <TextInput  secureTextEntry={true}  label={'Retype Password'}></TextInput>
        <Button onPress={login}>Create Account</Button>
    </SafeAreaView>
 );
}


export default NewAccountFunc;