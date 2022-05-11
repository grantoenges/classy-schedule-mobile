import React, { useState } from "react";
import { SafeAreaView, View,Text, Image, Appearance } from 'react-native';
import {Button, TextInput, useTheme} from 'react-native-paper';
import styles from '../Style';
import { forgotPass } from '../databaseService'

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


const NewAccountFunc = ({navigation}) => {
    const paperTheme = useTheme();
    const Login = () => navigation.navigate("Login");
    //const newAccount = () => navigation.navigate("NewAccount");
    const [email, setEmail] = useState({ value: "", error: "" });
    
    const onPressed = () => {
        const emailError = emailValidator(email.value);
        if (emailError) {
            setEmail({ ...email, error: emailError });
            
            alert(emailError);
        } else {
            forgotPass(email.value);
            alert("Email Sent");
            email.error = "";
        }
    };
    

    return (
        <SafeAreaView 
        style={[styles.noPadContainer, 
            {backgroundColor: paperTheme.colors.background}]}>
        <View style={styles.generalOverlay}>
            {/* Email input field */}
            <TextInput
            style={[styles.TextInput, {marginBottom: 2}]}
            label= "Email"
            placeholderTextColor="#ABC"
            value={email.value}
            onChangeText={(email) => setEmail({ value: email, error: "" })}
            error={!!email.error}
            errorText={email.error}
            textContentType="emailAddress"
            keyboardType="email-address"
            />

            
            {/* Create account button */}
            <Button 
            mode="contained" 
            style={styles.generalButtonContained} 
            icon="account-plus"  
            onPress={onPressed}>
                Send Email
            </Button>

            <Button 
            mode="text" 
            style={styles.generalButtonContained} 
            onPress={Login}>
                Back to Login
            </Button>

            
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