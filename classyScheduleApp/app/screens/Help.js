import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch } from "react-native";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Dialog,
  Portal,
  Paragraph,
} from "react-native-paper";
import {  TouchableRipple, Modal} from "react-native-paper";
import styles from "../Style";

 const Help = () => {
  const paperTheme = useTheme();
  const [dummy, setDummy] = useState(paperTheme.dark);

  const [visible0, setVisible0] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const showDialog0 = () => setVisible0(true);
  const hideDialog0 = () => setVisible0(false);

  const [visible1, setVisible1] = React.useState(false);
  const showDialog1 = () => setVisible1(true);
  const hideDialog1 = () => setVisible1(false);

  const [visible2, setVisible2] = React.useState(false);
  const showDialog2 = () => setVisible2(true);
  const hideDialog2 = () => setVisible2(false);


  /*This usestate variable is used as a flag, keeping track of the when the page has information changed and will need a reload of the data*/

 

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
          mode={dummy ? "contained" : "outlined"}
          onPress={showDialog0}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          General Use
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showDialog1}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Preferences
        </Button>
        <Button
          mode={dummy ? "contained" : "outlined"}
          onPress={showDialog}
          style={[styles.generalButton, { marginBottom: 5 }]}
        >
          Class Creation
        </Button>
        <Portal>
          <Dialog visible={visible0} onDismiss={hideDialog0}>
            <Dialog.Title>General Usage</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                For this app, the purpose is to allow for professors of the classy schedule
                school to be able to input their information for schedule creation. To be 
                here you must have an account made by your administrator. Next should be 
                preference setting. This will allow for schedules to be made that will
                take into account your stored preferences. You also will be able to create
                classes if you decide to teach a new course for that semester. This app is here to help you in these tasks!
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog0}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={visible1} onDismiss={hideDialog1}>
            <Dialog.Title>Preference setting</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Preferences that will be taken are located in the 
                preferences page and are sectioned into 4 pages. The first being the 
                "Classes can teach page". This page is where you will see a list of 
                all courses the department offers. You are able to check the boxes 
                for each class you are capable of teaching. Once you select all of the 
                classes you can teach you can hit the "Save" button to save your preferences!
                For the The "Classes preferred to teach" page is the same action but for 
                the classes you want to teach. 
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog1}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Class Creation</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                MIT
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
      </Card>
    </SafeAreaView>
  );
};
export default Help;
