import  React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View,Text, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';


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
    return true;
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

const SignInScreenFun = ({navigation}) => {
  const newAccount = () => navigation.navigate("NewAccount");
  let value = value || '';
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      alert(emailError + " " + passwordError);
    } else {
      navigation.navigate("Welcome");
    }
    
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  return (
    <SafeAreaView>
       
        <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#ABC"
            value={email.value}
            onChangeText={(email) => setEmail({value: email, error: '' })}
            error={!!email.error}
            errorText={email.error}
            textContentType="emailAddress"
            keyboardType="email-address"
        />
      

       
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#ABC"
                secureTextEntry={true}
                onChangeText={(password) => setPassword({value: password, error: '' })}
                error={!!password.error}
                errorText={password.error}    
            />
        
        <Button onPress={onLoginPressed}>Login</Button>
        <Button onPress={newAccount}>Create Account</Button>
        <Button onPress={storeData()}>Store Data</Button>
        <TouchableOpacity>
            <Text>Forgot Password?</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },

  inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
  },
  
  TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  },

});


export default SignInScreenFun;