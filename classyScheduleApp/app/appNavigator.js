import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import  SignInScreenFun from "./screens/SignInScreen"; 
import WelcomeScreenFun from "./screens/WelcomeScreen";
import NewAccountScreen from "./screens/NewAccountScreen";

const {Navigator, Screen} = createStackNavigator ();


const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName = "Login">
            <Screen name = "Welcome" component = {WelcomeScreenFun} options={{headerLeft: (props) => null }}/>
            <Screen name = "Login" component = {SignInScreenFun}/>
            <Screen name = "NewAccount" component = {NewAccountScreen}/>

        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;