import React, { Component, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getApi} from "../databaseService";

function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return "Email can't be empty.";
  }
  if (!re.test(email)) {
    return "Ooops! We need a valid email address.";
  }
  return "";
}

function passwordValidator(password) {
  if (password.length === 0) {
    return "Cannot have empty password field";
  }
  return "";
}

const SignInScreenFun = ({ navigation }) => {
  const newAccount = () => navigation.navigate("New Account");
  let value = value || "";
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      alert(emailError + " " + passwordError);
    } else {
      navigation.navigate("Welcome");
    }
  };
  {/*
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };  */}

  return (
    <SafeAreaView style={styles.back}>
      <TextInput
        style={styles.TextInput}
        label= "Email"
        placeholderTextColor="#ABC"
        value={email.value}
        onChangeText={(email) => setEmail({ value: email, error: "" })}
        error={!!email.error}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.TextInput}
        label = "Password"
        placeholderTextColor="#ABC"
        secureTextEntry={true}
        onChangeText={(password) => setPassword({ value: password, error: "" })}
        error={!!password.error}
        errorText={password.error}
      />

      <Button loading ={false} mode="contained" onPress={onLoginPressed}>Login</Button>
      <Button icon="account-plus"  onPress={newAccount}>Create Account</Button>
      <TouchableOpacity style={styles.center}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <View style = {styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/ClassyLogoSquare.png')}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back:{
    
  },
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  tinyLogo:{
    width: 150,
    height: 150,
    marginTop: 10,
    alignItems: "center",
    marginTop: "30%",
  },
  TextInput: {},
});

export default SignInScreenFun;
