import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log(require('./assets/favicon.png'))
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello!</Text>
      <Image style={styles.tinyLogo}source={require('./assets/favicon.png')}/>
      <Image style ={styles.logo} source={{uri: 'https://picsum.photos/200/300',}}/>
      <Text>Hello from Andrew!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 300,
  },
});
