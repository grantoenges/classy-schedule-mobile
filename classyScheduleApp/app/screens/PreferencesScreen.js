import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";

const PreferenceFun = ({ navigation }) => {
  const login = () => navigation.navigate("Login");
  const ClassesCT = () => navigation.navigate("Classes Can Teach");
  const ClassesPT = () => navigation.navigate("Classes Preferred Teach");
  const TimesCT = () => navigation.navigate("Times Cant Teach");
  const DaysPT = () => navigation.navigate("Days Prefered Teach");

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Title title="Preference Screen" />
      </Card>
      <Button style={styles.buttonStyle} onPress={ClassesCT}>
        Classes Can Teach
      </Button>
      <Button style={styles.buttonStyle} onPress={ClassesPT}>
        Classes Preffered To Teach
      </Button>
      <Button style={styles.buttonStyle} onPress={TimesCT}>
        Times Cant Teach
      </Button>
      <Button style={styles.buttonStyle} onPress={DaysPT}>
        Days Preferred Teach
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  cardStyle: {
    backgroundColor: "powderblue",
  },
  buttonStyle: {
    backgroundColor: "silver",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default PreferenceFun;
