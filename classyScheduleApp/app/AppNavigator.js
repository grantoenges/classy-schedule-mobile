import React from "react";
import { useTheme } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreenFun from "./screens/SignInScreen";
import WelcomeScreenFun from "./screens/WelcomeScreen";
import ChangePassword from "./screens/ChangePassword";
import PreferenceFun from "./screens/PreferencesScreen";
import SettingFun from "./screens/Settings";
import ClassesCTFun from "./screens/ClassesCanTeachScreen";
import ClassesPTFun from "./screens/ClassesPreferredToTeach";
import TimesCTFun from "./screens/TimesUnableToTeach";
import DaysPrefFun from "./screens/DaysPreferred";
import ClassInputFun from "./screens/ClassInputting";
import Help from "./screens/Help";
import ForgotPassword from "./screens/ForgotPassword";

/*This variable creates a stack navigator, this is our holder that allows for 
screens to be navigated to from other screens as well as allowing for native use
of the back button in order to navigate between them.
*/
const { Navigator, Screen } = createStackNavigator();

/*This function is what stores every page of the app. This is done as 
a way to allow for any page of the app to be able to navigate to 
another page without issues (hopefully)*/
function AppNavigator() {
    const paperTheme = useTheme();
    return (
        <NavigationContainer theme={paperTheme}>
            <Navigator
                initialRouteName = "Login"
                screenOptions = {{
                headerStyle: {
                    backgroundColor: paperTheme.headerStyle.color,
                },
                headerTitleStyle: {
                    color: paperTheme.headerStyle.textColor,
                },
                }}
            >
                <Screen
                    name = "Welcome"
                    component = {WelcomeScreenFun}
                    options = {{ headerLeft: (props) => null }}
                />
                <Screen name = "Login" component={SignInScreenFun} />
                <Screen name = "Forgot Password" component={ForgotPassword} />
                <Screen name = "Change Password" component={ChangePassword} />
                <Screen name = "Preferences" component={PreferenceFun} />
                <Screen name = "Settings" component={SettingFun} />
                <Screen name = "Classes Can Teach" component={ClassesCTFun} />
                <Screen name = "Classes Preferred To Teach" component={ClassesPTFun} />
                <Screen name = "Times Unable To Teach" component={TimesCTFun} />
                <Screen name = "Days Preferred To Teach" component={DaysPrefFun} />
                <Screen name = "Class Input" component={ClassInputFun} />
                <Screen name = "Help" component={Help} />
            </Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;
