import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import  SignInScreenFun from "./screens/SignInScreen"; 
import WelcomeScreenFun from "./screens/WelcomeScreen";
import NewAccountScreen from "./screens/NewAccountScreen";
import PreferenceFun from "./screens/preferencesScreen";
import SettingFun from "./screens/settings";
import ScheduleFun from "./screens/schedule";
import ClassesCTFun from "./screens/classesCanTeachScreen";
import ClassesPTFun from "./screens/classesPreferredToTeach";
import TimesCTFun from "./screens/timesCantTeach";
import DaysPrefFun from "./screens/daysPreferred";
import ClassInputFun from "./screens/classInputting";
import Apites from "./screens/apiTest";
import ApiList from "./screens/apiT";
/*This variable creates a stack navigator, this is our holder that allows for 
screens to be navigated to from other screens as well as allowing for native use
of the back button in order to navigate between them.
*/
const {Navigator, Screen} = createStackNavigator ();

/*This variable is what stores every page of the app. This is done as a way to allow for 
any page of the app to be able to navigate to another page without issues (hopefully)*/
const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName = "Login">
            <Screen name = "Welcome" component = {WelcomeScreenFun} options={{headerLeft: (props) => null }}/>
            <Screen name = "Login" component = {SignInScreenFun}/>
            <Screen name = "New Account" component = {NewAccountScreen}/>
            <Screen name = 'Preferences' component={PreferenceFun}/>
            <Screen name = 'Settings' component={SettingFun}/>
            <Screen name = 'Schedule' component={ScheduleFun}/>
            <Screen name = 'Classes Can Teach' component={ClassesCTFun}/>
            <Screen name = 'Classes Preferred Teach' component={ClassesPTFun}/>
            <Screen name = 'Times Cant Teach' component={TimesCTFun}/>
            <Screen name = 'Days Prefered Teach' component={DaysPrefFun}/>
            <Screen name = 'Class Input' component={ClassInputFun}/>
            <Screen name = 'Api Test' component={Apites}/>
            <Screen name = 'Api List' component={ApiList}/>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;