import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import {Button, TextInput} from 'react-native-paper'

const SignInScreenFun = () => {
  return (
    <SafeAreaView>
        <TextInput label={'Username'}></TextInput>
        <TextInput label={'Password'}></TextInput>
        <Button>Login</Button>
    </SafeAreaView>
 );
}


export default SignInScreenFun;