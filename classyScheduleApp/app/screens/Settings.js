import React, { useState } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet, 
    Switch,
    ScrollView 
} from "react-native";
import {
    Button,
    Card,
    TextInput,
    useTheme,
    Dialog,
    Portal,
    Paragraph,
} from "react-native-paper";
import styles, { Context } from "../Style";

/*This method is used to be a location for the user to change their settings within the app.
Currently most of the settings that can change (text size) are controlled in the phone settings.
This page will implement any specific settings for an account in Classy Schedule.
*/
const SettingFun = ({ navigation }) => {
    // Context for changing theming
    const { toggleTheme } = React.useContext(Context);
    const paperTheme = useTheme();
    // Navigate to change password page
    const changePassword = () => navigation.navigate("Change Password");

    /* Sets visibility of dialog boxes */
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    /*This usestate variable is used as a flag, keeping track of the when the page has information changed and will need a reload of the data*/
    const [dummy, setDummy] = useState(paperTheme.dark);

    /* This usestate variable is used as a holder of the text that the button uses
    when on one mode of the button (Subject to change)*/
    let darkMode = "Dark Mode";
    /* This usestate variable is used as a holder of the text that the button uses
    when on the other mode of the button (Subject to change) */
    let lightMode = "Light Mode";

    return (
        <SafeAreaView
            style = {[
            styles.container,
            { backgroundColor: paperTheme.colors.background },
            ]}
        >
            <Card>
            <Card.Title title = "User Preferences" />
            {/* Dark mode button */}
            <Button
                icon={dummy ? "moon-waxing-crescent" : "lightbulb-on"}
                onPress = {() => {
                toggleTheme();
                setDummy(!dummy);
                }}
                mode = {dummy ? "contained" : "outlined"}
                style = {[styles.generalButton, { marginBottom: 5 }]}
            >
                {dummy ? darkMode : lightMode}
            </Button>
            {/* Change Password button */}
            <Button
                mode = {dummy ? "contained" : "outlined"}
                style = {[styles.generalButton, { marginBottom: 5 }]}
                icon="account-plus"
                onPress={changePassword}
            >
                Update Password
            </Button>
            {/* License button */}
            <Button
                icon = {dummy ? "card-account-details-outline" : "card-account-details"}
                mode = {dummy ? "contained" : "outlined"}
                onPress = {showDialog}
                style = {[styles.generalButton, { marginBottom: 5 }]}
            >
                License
            </Button>
            <Portal>
                <Dialog style={styles.noPadContainer} visible = {visible} onDismiss={hideDialog}>
                <ScrollView>
                <Dialog.Title>Application License</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>
                    MIT License Copyright (c) 2022 University of Saint Thomas
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated documentation
                    files (the "Software"), to deal in the Software without
                    restriction, including without limitation the rights to use,
                    copy, modify, merge, publish, distribute, sublicense, and/or
                    sell copies of the Software, and to permit persons to whom the
                    Software is furnished to do so, subject to the following
                    conditions: The above copyright notice and this permission
                    notice shall be included in all copies or substantial portions
                    of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
                    WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                    LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress = {hideDialog}>Done</Button>
                </Dialog.Actions>
                </ScrollView>
                </Dialog>
            </Portal>
            </Card>
        </SafeAreaView>
    );
};

export default SettingFun;
