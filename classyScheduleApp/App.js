import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  console.log(require('./assets/favicon.png'))
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello!</Text>
      <Image style={styles.tinyLogo}source={require('./assets/favicon.png')}/>
      <Image style ={styles.logo} source={{uri: 'https://picsum.photos/200/300',}}/>
      <Text>Hello from Andrew!</Text>
      <Text>--------------------</Text>
      <Text>Hello from Zak!</Text>
      <Text>Hello from Brendan!</Text>
      <UserTextInput>
      </UserTextInput>
      <PassTextInput>
      </PassTextInput>
    </SafeAreaView>
  );
}

const UserTextInput = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
    </SafeAreaView>
  );
};

const PassTextInput = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Password"
      />
    </SafeAreaView>
  );
};

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  login: {
    margin: 24,
    fontSize: 16,
    fontWeight: 'normal',
  },
});
