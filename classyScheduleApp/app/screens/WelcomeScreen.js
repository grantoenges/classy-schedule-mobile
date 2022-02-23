import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper'

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
        <Card>
            <Card.Title title= "Home"/>

        </Card>
    </SafeAreaView>
 );
}


export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#212121',
    textAlign:'center'
  },
  button: {
    width:300,
    borderRadius: 25,
    backgroundColor:'#FCE4EC',
    marginVertical: 10,
    paddingVertical:16

  }
});