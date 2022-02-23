import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class NewAccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I am the NewAccountScreen screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:16,
    fontWeight:'500',
    color:'#212121',
    textAlign:'center'
  }
});