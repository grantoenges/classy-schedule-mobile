import React from "react";
import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { 
    Modal,  
    useTheme, 
} from "react-native-paper";
import styles from "../Style";

/** This method is what displays the screen for this page
 * Inputs: Navigation class (allowing for the page to navigate to other pages)
 * Outputs: An array of buttons that allow for the user to press them and move to other screens
 */

const WelcomeScreenFun = ({ navigation }) => {
    const paperTheme = useTheme();
    let buttonColor = paperTheme.buttonStyle;
    
    /**This function navigates the user to the Login page */
    const login = () => navigation.navigate("Login");
    /**This function navigates the user to the Preferences page */
    const prefs = () => navigation.navigate("Preferences");
    /**This function navigates the user to the Settings page */
    const settings = () => navigation.navigate("Settings");
    /**This function navigates the user to the Schedule page */
    const schedule = () => navigation.navigate("Schedule");
    /**This function navigates the user to the Class page */
    const Input = () => navigation.navigate("Class Input");
    /**This function navigates the user to the Api test page */
    const Helper = () => navigation.navigate("Help");
    /**This function navigates the user to the Api list page */
    const ApiLister = () => navigation.navigate("Api List");

    //Use state constants for modal visibility
    const [loginModal, setModalLogin] = useState(false); 
    const [prefModal, setModalPref] = useState(false);
    const [settingsModal, setModalSettings] = useState(false);
    const [CIModal, setModalCI] = useState(false);
    const [helpModal, setModalHelp] = useState(false);
    
    return (
        <SafeAreaView style={[styles.container, 
            {backgroundColor: paperTheme.colors.background}]}>
            <View style={styles.overlay}>
                <View style={styles.viewStyle}>
                    {/* Logout Button */}
                    <TouchableOpacity
                        style = {[styles.buttonStyle, 
                            {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
                        activeOpacity = {0.8}
                        onPress = {login}
                        onLongPress = {() => setModalLogin(true)}
                    >
                        <Text style = {[styles.textStyle, {color: buttonColor.textColor}]}>
                            Logout
                        </Text>
                        <Modal
                            contentContainerStyle = {styles.modalStyle}
                            animationType = "slide"
                            transparent = {true}
                            visible = {loginModal}
                            onDismiss = {() => {
                                setModalLogin(!loginModal);
                            }}
                        >
                        
                        <Pressable
                            style = {styles.modalStyle}
                            onPress = {() => setModalLogin(!loginModal)}
                        >
                            <Text style={styles.modalText}>
                                Logs the user out and returns the user to the login page.
                            </Text>
                        </Pressable>
                        </Modal>
                    </TouchableOpacity>
                    {/* Preferences Button */}
                    <TouchableOpacity
                        mode = "contained"
                        style = {[styles.buttonStyle, 
                            {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
                        activeOpacity = {0.8}
                        onPress = {prefs}
                        onLongPress = {() => setModalPref(true)}
                    >
                        <Text style = {[styles.textStyle, {color: buttonColor.textColor}]}>
                            Preferences
                        </Text>
                        <Modal
                            contentContainerStyle = {styles.modalStyle}
                            animationType = "slide"
                            transparent = {true}
                            visible = {prefModal}
                            onDismiss = {() => {
                                setModalPref(!prefModal);
                            }}
                        >
                        <Pressable
                            style = {styles.modalStyle}
                            onPress = {() => setModalPref(!prefModal)}
                        >
                            <Text style = {styles.modalText}>
                                Brings the user to the preferences menu where they can select their preferences.
                            </Text>
                        </Pressable>
                        </Modal>
                    </TouchableOpacity>
                </View>

                <View style = {styles.viewStyle}>
                    {/* Settings Button */}
                    <TouchableOpacity
                        mode = "contained"
                        style = {[styles.buttonStyle,
                            {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
                        activeOpacity = {0.8}
                        onPress = {settings}
                        onLongPress = {() => setModalSettings(true)}
                    >
                        <Text style = {[styles.textStyle, {color: buttonColor.textColor}]}>
                            Settings
                        </Text>
                        <Modal
                            contentContainerStyle = {styles.modalStyle}
                            animationType = "slide"
                            transparent = {true}
                            visible = {settingsModal}
                            onDismiss = {() => {
                                setModalSettings(!settingsModal);
                            }}
                        >
                        <Pressable
                            style = {styles.modalStyle}
                            onPress = {() => setModalSettings(!settingsModal)}
                            >
                            <Text style={styles.modalText}>
                                Brings the user to the settings menu where they can adjust their settings.
                            </Text>
                        </Pressable>
                        </Modal>
                    </TouchableOpacity>
                    {/* Class Input Button */}
                    <TouchableOpacity
                        mode = "contained"
                        style = {[styles.buttonStyle, 
                            {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
                        activeOpacity = {0.8}
                        onPress = {Input}
                        onLongPress={() => setModalCI(true)}
                    >
                        <Text style = {[styles.textStyle, {color: buttonColor.textColor}]}>
                            Class Input
                        </Text>
                        <Modal
                            contentContainerStyle = {styles.modalStyle}
                            animationType = "slide"
                            transparent = {true}
                            visible = {CIModal}
                            onDismiss = {() => {
                                setModalCI(!CIModal);
                            }}
                        >
                        <Pressable
                            style = {styles.modalStyle}
                            onPress = {() => setModalCI(!CIModal)}
                        >
                            <Text style = {styles.modalText}>
                                Brings the user to the Class Input page where they can input classes.
                            </Text>
                        </Pressable>
                        </Modal>
                    </TouchableOpacity>
                    
                </View>

                <View style = {styles.viewStyle}>
                    
                    {/* Help Button */}
                    <TouchableOpacity
                        mode = "contained"
                        style = {[styles.buttonStyle, 
                            {backgroundColor: buttonColor.color, borderColor: buttonColor.borderColor}]}
                        activeOpacity = {0.8}
                        onPress = {Helper}
                        onLongPress = {() => setModalHelp(true)}
                    >
                        <Text style = {[styles.textStyle, {color: buttonColor.textColor}]}>
                            Help
                        </Text>
                        <Modal
                            contentContainerStyle = {styles.modalStyle}
                            animationType = "slide"
                            transparent = {true}
                            visible = {helpModal}
                            onDismiss = {() => {
                                setModalHelp(!helpModal);
                            }}
                        >
                        <Pressable
                            style = {styles.modalStyle}
                            onPress = {() => setModalHelp(!helpModal)}
                        >
                            <Text style = {styles.modalText}>
                                Brings the user to the Help page where they can learn more about the app
                            </Text>
                        </Pressable>
                        </Modal>
                    </TouchableOpacity>                    
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreenFun;
