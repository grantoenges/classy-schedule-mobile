import  React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View,Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper'


const SignInScreenFun = ({navigation}) => {
    const login = () => navigation.navigate("Welcome");
    const newAccount = () => navigation.navigate("NewAccount");
    const [email, setEmail] = useState({ value: ' ', error: ' ' });
    const [password, setPassword] = useState({ value: ' ', error: ' ' });
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#ABC"
            onChangeText={(email) => setEmail({value: email, error: '' })}
        />
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#ABC"
                secureTextEntry={true}
                onChangeText={(password) => setPassword({value: password, error: '' })}
            />
        </View>
        <Button onPress={login}>Login</Button>
        <Button onPress={newAccount}>Create Account</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },

  inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
  },
  
  TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  },

  loginBtn:
  {
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#CBA",
  }
  
});


export default SignInScreenFun;