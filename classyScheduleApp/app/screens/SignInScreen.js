import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "../databaseService";
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

//fucntion to securely save to the device
async function saveSecureValue(key, value) {
    await SecureStore.setItemAsync(key, value);
}


const SignInScreenFun = ({ navigation }) => {
    const Welcome = () => navigation.navigate("Welcome");
    const ForgotPass = () => navigation.navigate("Forgot Password");
    let value = value || "";
    //let styles = COLORSCHEME[0] ==='dark' ? darkStyles : lightStyles;
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    //when biometric login is selected 
    const onBiometricsPressed = async () => {
        //check if biometrics are available on the device
        const compatible = await hasHardwareAsync()
        if(compatible) {
        //check to see if biometrics are saved
        const savedBiometrics = await isEnrolledAsync();
        //biometrics are saved on device
        if(savedBiometrics) {
            const bioAuthenticate = await authenticateAsync();
            if(bioAuthenticate.success) {
            //user is autheenticated, get username and password
            const savedUsrname = await SecureStore.getItemAsync('username');
            const savedPassword = await SecureStore.getItemAsync('password');
            //send the sign in request and change the page the user is on

            signIn(savedUsrname, savedPassword).then((response) => {
                if(response.token) {
                    //succesful login
                    AsyncStorage.setItem("Auth", response.token);
                    AsyncStorage.setItem("Username", response.username);
                    AsyncStorage.setItem("Role", response.user_role);
                    AsyncStorage.setItem("UserId", response.user_id.toString());
                    setLoading(false);
                    navigation.navigate("Welcome");
                } else {
                    //unsucessful login
                    alert('username and password have not been previously saved, ' +
                        'please log into the app with username and password');
                    //reset loading
                    setLoading(false);
                }
            });
            } else {
                alert('could not Authenticate user');
                //reset loading
                setLoading(false);
                return;
            }
        } else {
            alert('No Saved Biometrics on device');
            //reset loading
            setLoading(false);
            return;
        }
        } else {
            alert('device does not support biometrics');
            //reset loading
            setLoading(false);
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
                if (response.token) {
                    //save username and password securely to device for bioauth
                    saveSecureValue('username', email.value);
                    saveSecureValue('password', password.value);
                    //succesful login
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
    
    // Theming 
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
                    style = {styles.TextInput}
                    label = "Email"
                    placeholderTextColor = "#ABC"
                    value = {email.value}
                    onChangeText = {(email) => setEmail({ value: email, error: "" })}
                    error = {!!email.error}
                    errorText = {email.error}
                    textContentType = "emailAddress"
                    keyboardType = "email-address"
                />
                {/* Password input field */}
                <TextInput
                    style = {styles.TextInput}
                    label = "Password"
                    placeholderTextColor = "#ABC"
                    value = {password.value}
                    secureTextEntry = {true}
                    onChangeText = {(password) => 
                        setPassword({ value: password, error: "" })}
                    error = {!!password.error}
                    errorText = {password.error}
                />
                {/* Login button */}
                <Button 
                    mode = "contained" 
                    style = {styles.generalButtonContained}  
                    loading = {isLoading} 
                    onPress = {() => onLoginPressed()}>
                    Login
                </Button>
                {/* Biometrics button*/}
                <Button 
                    icon = "fingerprint"
                    mode = "text" 
                    style = {styles.generalButtonContained} 
                    loading = {isLoading} 
                    onPress = {() => onBiometricsPressed()}>
                    Biometric Login
                </Button>
                    
                
                {/* Forgot password */}
                <TouchableOpacity 
                    style = {styles.centerPage} 
                    onPress = {ForgotPass}>
                    <Text style = {{color: paperTheme.textStyle.color}}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <Button 
                    mode="text" 
                    style={[styles.generalButton, {marginBottom: 5}]} 
                    onPress={Welcome}>
                </Button>

                <View style = {styles.centerPage}>
                <Image
                    style = {styles.tinyLogo}
                    source = {require('../assets/ClassyLogoSquare.png')}
                />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignInScreenFun;
