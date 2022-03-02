import  React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View,Text, TouchableOpacity} from 'react-native';
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
  if (!password) {
    return "Password can't be empty.";
  }
  if (password.length < 5) {
    return "Password must be at least 5 characters long.";
  }
  return "";
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

  return (
    <SafeAreaView>
       
        <TextInput
            
            placeholder="Email"
            placeholderTextColor="#ABC"
            value={email.value}
            onChangeText={(email) => setEmail({value: email, error: '' })}
            error={!!email.error}
            errorText={email.error}
            textContentType="emailAddress"
            keyboardType="email-address"
        />
      

       
            <TextInput
                
                placeholder="Passwoord"
                placeholderTextColor="#ABC"
                secureTextEntry={true}
                value={password.value}
                onChangeText={(password) => setPassword({value: password, error: '' })}
                error={!!password.error}
                errorText={password.error}    
            />
        
        <Button onPress={onLoginPressed}>Login</Button>
        <Button onPress={newAccount}>Create Account</Button>
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
      width: "100%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
  },
  
  TextInput: {
      height: 50,
      flex: 1,
      width:"90%",
      padding: 10,
      marginLeft: 20,
      alignItems: 'center'
  },

});


export default SignInScreenFun;