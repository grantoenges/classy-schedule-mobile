import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} 
        onPress={() => this.props.navigation.navigate({ routeName: 'SignInScreen'})}>
          <Text style={styles.buttonText}>SignInScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate({ routeName: 'NewAccountScreen'})}>
          <Text style={styles.buttonText}>NewAccountScreen</Text>
        </TouchableOpacity>
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