import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        
        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#ABC"
            onChangeText={(email) => setEmail(email)}
        />
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#ABC"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>

        <TouchableOpacity>
            <Text>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
            <Text>Login</Text>
        </TouchableOpacity>
    </View>
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
        backgroundColor: "#FEDCBA",
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
