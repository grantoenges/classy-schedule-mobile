import React from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native'


function WelcomeScreen(props) {
    return (
    <View style={styles.background}>
        <Text>Testing</Text>
        <ImageBackground
            style={styles.image}
            source={require("../assets/icon.png")}>
        </ImageBackground>
        <ImageBackground
            style={styles.image}
            source={require("../assets/favicon.png")}>
        </ImageBackground>
      </View>
    
    );
}

const styles = StyleSheet.create({
    background:{
        flex : 1,
        backgroundColor : '#fff',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    image:{
        width:100,
        height:100,
    }
})

export default WelcomeScreen;
