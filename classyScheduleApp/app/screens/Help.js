import React, {useState } from 'react';
import { SafeAreaView} from "react-native";
import {
  Button,
  Card,
  useTheme,
  Dialog,
  Portal,
  Paragraph,
} from "react-native-paper";
import styles from "../Style";

 const Help = () => {
  const paperTheme = useTheme();
  const [dummy, setDummy] = useState(paperTheme.dark);

  /**Each of the following usestates and methods with them are used as 
   * booleans to tell if the corresponding dialog box should be shown to
   * the user or not along with the changing of that boolean.
   */
  const [generalVisible, setGeneralVisible] = React.useState(false);
  const showGeneralDialog = () => setGeneralVisible(true);
  const hideGeneralDialog = () => setGeneralVisible(false);

  const [prefVisible, setPrefVisible] = React.useState(false);
  const showPrefDialog = () => setPrefVisible(true);
  const hidePrefDialog = () => setPrefVisible(false);

  const [classVisible, setClassVisible] = React.useState(false);
  const showClassDialog = () => setClassVisible(true);
  const hideClassDialog = () => setClassVisible(false);

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const showPasswordDialog = () => setPasswordVisible(true);
  const hidePasswordDialog = () => setPasswordVisible(false);
  
  const [darkVisible, setDarkVisible] = React.useState(false);
  const showDarkDialog = () => setDarkVisible(true);
  const hideDarkDialog = () => setDarkVisible(false);

  const [bioVisible, setBioVisible] = React.useState(false);
  const showBioDialog = () => setBioVisible(true);
  const hideBioDialog = () => setBioVisible(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: paperTheme.colors.background },
      ]}
    >
      <Card>
        <Card.Title title="Help Sections" />
        <Button
          icon = "help-circle"
          mode={dummy ? "contained" : "outlined"}
          onPress={showPrefDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          General Use
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showClassDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Preferences
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showGeneralDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Class Creation
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showPasswordDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Password updating
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showDarkDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Dark Mode
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showBioDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Bioauthentication
        </Button>
        <Portal>
          <Dialog visible={prefVisible} onDismiss={hidePrefDialog}>
            <Dialog.Title>General Usage</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                For this app, the purpose is to allow for professors of the classy schedule
                school to be able to input their information for schedule creation. To be 
                here you must have an account made by your administrator. The task that 
                you likely need to complete should be preference setting. This will allow 
                for schedules to be made that will take into account your stored 
                preferences. You also will be able to create classes if you decide to teach
                 a new course for that semester. This app is here to help you in these tasks!
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hidePrefDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={classVisible} onDismiss={hideClassDialog}>
            <Dialog.Title>Preference setting</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Preferences that will be taken are located in the 
                "Preferences" page and are sectioned into 4 pages. The first being the 
                "Classes can teach page". This page is where you will see a list of 
                all courses the department offers. You are able to check the boxes 
                for each class you are capable of teaching. Once you select all of the 
                classes you can teach you can hit the "Save" button to save your preferences!
                For the The "Classes preferred to teach" page is the same action but for 
                the classes you want to teach. For the "times unable to teach" you will 
                again be doing a similar action, checking boxes, but selection should be
                done on timeslots you are not able to teach during and save it. Finally for the 
                "Days preferred to teach" you will select the days of the week you prefer
                to teach during, along with the times of day you prefer to teach during.
                Again for all pages you must hit the save button at the top to send the
                preferences to the database.
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideClassDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
        <Portal>
          <Dialog visible={passwordVisible} onDismiss={hidePasswordDialog}>
            <Dialog.Title>Updating password</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                If you are in need of a password change you will navigate to the
                "Settings" page from the welcome screen and select the button labeled
                "Update password" when you hit this button it will bring you to our
                password updating page. To update your password you must type a valid
                password, which is a password that is at least 8 characters long, has 
                a number, and has a special character. Once you type it once, you must
                type it into the next box to be sure you have typed out your password
                correctly. Once this is done hit the "update password" button to 
                update your password for use in sign in.
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hidePasswordDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
        <Portal>
          <Dialog visible={darkVisible} onDismiss={hideDarkDialog}>
            <Dialog.Title>Dark mode</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Dark mode is a mode created to hopefully put less strain on the eyes, 
                especially when using the app in a darkly lit area. To turn on night 
                mode, select the "Settings" button to be sent to the settings page. Once
                there, select the button that says "Light mode" and it will switch to 
                the button saying "Dark mode" and will set the app to dark mode!
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDarkDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={bioVisible} onDismiss={hideBioDialog}>
            <Dialog.Title>Setting up Bioauthentication</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                If your phone supports Bioauthentication we have an option to sign
                into your account using it. To set this up the only action that needs
                 to be done is you must sign into your account without the Bioauthentication.
                 You must also have a Bioauthentication saved onto your device for actions 
                 like unlocking your device. Once this is done you can select the "Bioauthentication"
                 button on the sign in page with no need to type your username or password!
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideBioDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={generalVisible} onDismiss={hideGeneralDialog}>
            <Dialog.Title>Class Creation</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                For class creation you must first navigate to the "Class input" page
                from the welcome screen. Then to make a class you must select the
                department the class is in, and then type the classes number, the 
                classes title, its capacity, and its credits. The class number, capacity,
                and credits need to be integers. The last thing you must do is select the 
                checkbox if the app is a lab or leave it unchecked if the class is not a lab.
                Then you must hit save data in order to send your new class to the database!
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideGeneralDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
      </Card>
    </SafeAreaView>
  );
};
export default Help;
