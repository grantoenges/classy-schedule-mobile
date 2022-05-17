import React from 'react';
import { SafeAreaView} from 'react-native';
import { 
    Button, 
    Card, 
    TextInput, 
    useTheme,
    Checkbox 
} from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import styles from '../Style'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ClassInputFun = () => {
    const paperTheme = useTheme();
    /** allowing for dynamic selection in the drop down menu. */
    const [selectedLanguage, setSelectedLanguage] = useState("1");
    /** This use state is used for storage of the classes string title. */
    const [classTitle, setClassTitle] = useState();
    /** This use state is used for the storage of the classes integer number. */
    const [classNumber, setClassNum] = useState("");
    /** This use state is used for the storage of the classes integer capacity. */
    const [classCapacity, setClassCapacity] = useState();
    /** This use state is used for the storage of the classes integer credits value. */
    const [classCredits, setClassCredits] = useState("4");
    /** This use state is used to be a boolean on the selected class being a lab or not*/
    const [isLab, setIsLab] = useState(false);
    /** This usestate is used to tell if the app is currently loading or not */
    const [isLoading, setLoading] = useState(false);


    /*This methods use is to send the current class the user has input to the
    text boxes and to post that class to the database. It uses the current
    usestate variables as the values to send. If any of the values error 
    it will notify the user with an alert*/
    const sendClass = async() =>{
        try {
            setLoading(true);
            const auth = await AsyncStorage.getItem('Auth');        
            const response = await fetch('https://capstonedbapi.azurewebsites.net/class-management/classes/create',{
                method: 'POST',
                /*,  Example of how headers look for if people are to take this to use on other parts of the app */ 
                headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': auth
                },
                body:JSON.stringify( {
                    "class_num": classNumber,
                    "dept_id": selectedLanguage,
                    "class_name": classTitle,
                    "capacity": classCapacity,
                    "credits": classCredits,
                    "is_lab": isLab
                })
            });

            const json = await response.json();
            if (json.title == undefined) {
                alert("Sent to database");
            } else {
                alert(json.title);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    /* This methods purpose is to set any value it has taken in as an argument
    and validate it is a valid integer number, and if it is not it either sets
    the value to empty, or replaces the characters to make it valid. */
    const onChangeNumericInput = (value) =>{
        if (value.length === 0 || value == 'NaN'){
            return ''
        }
        let x = parseInt(value.replace(/[^0-9]/g, '')).toString();
        if (x =='NaN'){
            return '';
        }
        return(x);
    }

    return (
        <SafeAreaView style = {[styles.container,
            {backgroundColor: paperTheme.colors.background}]}>
            <Card>
                <Picker color = 'purple' 
                    style = {styles.buttonStyleT} 
                    selectedValue = {selectedLanguage}  
                    dropdownIconRippleColor = '#7F46C7' 
                    prompt = 'Pick department' 
                    onValueChange = {(itemValue, itemIndex) => 
                        setSelectedLanguage(itemValue)}>
                    <Picker.Item label = "Computer Science" value = "1" />
                    <Picker.Item label = "Statistics" value = "2"/>
                </Picker>
                <TextInput 
                    keyboardType = "numeric"
                    maxLength = {4} 
                    value = {classNumber}
                    onChangeText = {classNumber => 
                        setClassNum(onChangeNumericInput(classNumber))}  
                    label = {'Class Number'}>
                </TextInput>
                <TextInput 
                    maxLength = {30} 
                    multiline = {false} 
                    value = {classTitle} 
                    onChangeText = {(classTitle) => setClassTitle(classTitle)} 
                    label = {'Class Title'}>
                    </TextInput>
                    <TextInput 
                    keyboardType = 'numeric' 
                    maxLength = {4} 
                    value = {classCapacity} 
                    onChangeText = {(classCapacity) => 
                        setClassCapacity(onChangeNumericInput(classCapacity))} 
                    label = {'Capacity'}>
                </TextInput>
                <TextInput 
                    keyboardType = 'numeric' 
                    maxLength = {2}  
                    value = {classCredits} 
                    onChangeText = {(classCredits) => 
                        setClassCredits(onChangeNumericInput(classCredits))}
                    label = {'Credits'}>
                </TextInput>
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = {isLab? "This class is a lab" : "This class is not a lab"} 
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { isLab ? "checked" : "unchecked" }
                    onPress = {() => {
                        setIsLab(!isLab);
                    }}
                />
                    {isLoading ? <Button loading = {true} mode = "outlined"> Loading </Button> 
                    : (<Button 
                        mode = "contained" 
                        onPress = {() => sendClass()}>
                            save data 
                        </Button>)}
            </Card>
        </SafeAreaView>
    );
}

export default ClassInputFun;