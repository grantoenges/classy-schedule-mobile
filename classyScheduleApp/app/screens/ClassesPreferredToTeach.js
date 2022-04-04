import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import {Button, Card, Checkbox, TextInput} from 'react-native-paper'
import styles from '../Style';

// ClassesPTFun creates useState objects for each class offered.
// It also makes the application page to display them and allows users to
// select a checkbox and save the classes they prefer to teach.
const ClassesPTFun = ({navigation}) => {
  const [cisc130Checked, setcisc130Checked] = React.useState(false);
  const [cisc131Checked, setcisc131Checked] = React.useState(false);
  const [cisc230Checked, setcisc230Checked] = React.useState(false);
  const [cisc231Checked, setcisc231Checked] = React.useState(false);
  const [cisc340Checked, setcisc340Checked] = React.useState(false);
  const [cisc350Checked, setcisc350Checked] = React.useState(false);
  const [cisc380Checked, setcisc380Checked] = React.useState(false);
  const [cisc480Checked, setcisc480Checked] = React.useState(false);
  const [cisc310Checked, setcisc310Checked] = React.useState(false);
  const [cisc342Checked, setcisc342Checked] = React.useState(false);
  const [cisc370Checked, setcisc370Checked] = React.useState(false);
  const [cisc369Checked, setcisc369Checked] = React.useState(false);
  const [cisc375Checked, setcisc375Checked] = React.useState(false);
  const [cisc420Checked, setcisc420Checked] = React.useState(false);
  const [cisc440Checked, setcisc440Checked] = React.useState(false);
  const [cisc450Checked, setcisc450Checked] = React.useState(false);
  const [cisc451Checked, setcisc451Checked] = React.useState(false);
  const [stat220Checked, setstat220Checked] = React.useState(false);
  const [stat360Checked, setstat360Checked] = React.useState(false);
  const [stat400Checked, setstat400Checked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Card style={styles.cardStyle}>
        <Card.Title title="Classes Preferred to Teach" />
      </Card>

      <View>
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 130"
          color="black"
          uncheckedColor="black"
          status={cisc130Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc130Checked(!cisc130Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 131"
          color="black"
          uncheckedColor="black"
          status={cisc131Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc131Checked(!cisc131Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 230"
          color="black"
          uncheckedColor="black"
          status={cisc230Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc230Checked(!cisc230Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 231"
          color="black"
          uncheckedColor="black"
          status={cisc231Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc231Checked(!cisc231Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 340"
          color="black"
          uncheckedColor="black"
          status={cisc340Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc340Checked(!cisc340Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 350"
          color="black"
          uncheckedColor="black"
          status={cisc350Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc350Checked(!cisc350Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 380"
          color="black"
          uncheckedColor="black"
          status={cisc380Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc380Checked(!cisc380Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 480"
          color="black"
          uncheckedColor="black"
          status={cisc480Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc480Checked(!cisc480Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 310"
          color="black"
          uncheckedColor="black"
          status={cisc310Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc310Checked(!cisc310Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 342"
          color="black"
          uncheckedColor="black"
          status={cisc342Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc342Checked(!cisc342Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 370"
          color="black"
          uncheckedColor="black"
          status={cisc370Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc370Checked(!cisc370Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 369"
          color="black"
          uncheckedColor="black"
          status={cisc369Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc369Checked(!cisc369Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 375"
          color="black"
          uncheckedColor="black"
          status={cisc375Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc375Checked(!cisc375Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 420"
          color="black"
          uncheckedColor="black"
          status={cisc420Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc420Checked(!cisc420Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 440"
          color="black"
          uncheckedColor="black"
          status={cisc440Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc440Checked(!cisc440Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 450"
          color="black"
          uncheckedColor="black"
          status={cisc450Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc450Checked(!cisc450Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="CISC 451"
          color="black"
          uncheckedColor="black"
          status={cisc451Checked ? "checked" : "unchecked"}
          onPress={() => {
            setcisc451Checked(!cisc451Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="STAT 220"
          color="black"
          uncheckedColor="black"
          status={stat220Checked ? "checked" : "unchecked"}
          onPress={() => {
            setstat220Checked(!stat220Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="STAT 360"
          color="black"
          uncheckedColor="black"
          status={stat360Checked ? "checked" : "unchecked"}
          onPress={() => {
            setstat360Checked(!stat360Checked);
          }}
        />
        <Checkbox.Item
          labelStyle={styles.label}
          label="STAT 400"
          color="black"
          uncheckedColor="black"
          status={stat400Checked ? "checked" : "unchecked"}
          onPress={() => {
            setstat400Checked(!stat400Checked);
          }}
        />
      </View>
      <Button>Save Classes Preferred to Teach</Button>
      </ScrollView>
    </SafeAreaView>
  );
};
  

export default ClassesPTFun;



