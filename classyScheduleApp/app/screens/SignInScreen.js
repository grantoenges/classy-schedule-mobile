import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import {Button, TextInput} from 'react-native-paper'


const SignInScreenFun = ({navigation}) => {
    const login = () => navigation.navigate("Welcome")
    const newAccount = () => navigation.navigate("NewAccount")

  return (
    <SafeAreaView>
        <TextInput label={'Username'}></TextInput>
        <TextInput  secureTextEntry={true}  label={'Password'}></TextInput>
        <Button onPress={login}>Login</Button>
        <Button onPress={newAccount}>Create Account</Button>
    </SafeAreaView>
 );
}


export default SignInScreenFun;