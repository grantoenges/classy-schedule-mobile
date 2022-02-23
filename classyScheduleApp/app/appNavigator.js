import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import  SignInScreenFun from "./screens/SignInScreen"; 
import WelcomeScreenFun from "./screens/WelcomeScreen";

const {Navigator, Screen} = createStackNavigator ();


const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName = "Login">
            <Screen name = "Login" component = {SignInScreenFun}/>
            <Screen name = "Welcome" component = {WelcomeScreenFun}/>

        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;