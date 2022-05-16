import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { Button, Card, Checkbox, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Style";

/* TimesCTFun creates useState objects for each teaching time group and each
possible teaching time slot it then creates the page view, containing title
and checkboxes for each time group and each possible teaching time slot */
const TimesCTFun = ({ navigation }) => {
    const paperTheme = useTheme();

    /* This usestate variable is used as a flag, keeping 
    track of the loading vs not loading of the data */
    const [isLoading, setLoading] = useState(true);

    /* useStates for the checkboxes for each time slot for 3 days a week */
    const [threeDay1Checked, setThreeDay1Checked] = useState(false);
    const [threeDay2Checked, setThreeDay2Checked] = useState(false);
    const [threeDay3Checked, setThreeDay3Checked] = useState(false);
    const [threeDay4Checked, setThreeDay4Checked] = useState(false);
    const [threeDay5Checked, setThreeDay5Checked] = useState(false);

    /* useStates for the checkboxes for each time slot for 2 days a week */
    const [twoDay1Checked, setTwoDay1Checked] = useState(false);
    const [twoDay2Checked, setTwoDay2Checked] = useState(false);
    const [twoDay3Checked, setTwoDay3Checked] = useState(false);
    const [twoDay4Checked, setTwoDay4Checked] = useState(false);
    const [twoDay5Checked, setTwoDay5Checked] = useState(false);
    const [twoDay6Checked, setTwoDay6Checked] = useState(false);

    /*
    sendTimesPreferences's purpose is to make a call to the API point and 
    save the data within the checkbox useState variables to update professor 
    preferences for time slots
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be 
    aware of that failure and should send that error to the console.log 
    */
    const sendTimesPreferences = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const userRole = await AsyncStorage.getItem("Role");
        const userId = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/" +
            "time-slot-preferences/can-teach/save/" + userId,
            {
            method: "POST",
            /* Request headers*/
            headers: {
                Authorization: auth, 
                "Content-Type": "application/json",
                accept: "*/*",
            },
            body: JSON.stringify([
                {
                time_slot_id: 1,
                can_teach: twoDay1Checked,
                },
                {
                time_slot_id: 2,
                can_teach: threeDay1Checked,
                },
                {
                time_slot_id: 3,
                can_teach: threeDay2Checked,
                },
                {
                time_slot_id: 4,
                can_teach: twoDay2Checked,
                },
                {
                time_slot_id: 5,
                can_teach: threeDay3Checked,
                },
                {
                time_slot_id: 6,
                can_teach: threeDay4Checked,
                },
                {
                time_slot_id: 7,
                can_teach: twoDay3Checked,
                },
                {
                time_slot_id: 8,
                can_teach: threeDay5Checked,
                },
                {
                time_slot_id: 9,
                can_teach: twoDay4Checked,
                },
                {
                time_slot_id: 10,
                can_teach: twoDay5Checked,
                },
                {
                time_slot_id: 11,
                can_teach: twoDay6Checked,
                },
            ]),
            }
        );
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    const getPreferencesJson = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/" +
            "time-slot-preferences/can-teach/" + id,
            {
            method: "GET",
            /* Request headers */
            headers: {
                Authorization: auth,
            },
            }
        );
        const json = await response.json();
        /*This mapping function allows us to tag an extra variable to the data received that tells us if the class is selected */
        if (json != undefined ) {
            if(json.status != 404){
            setTwoDay1Checked(json[0].can_teach);
            setThreeDay1Checked(json[1].can_teach);
            setThreeDay2Checked(json[2].can_teach);
            setTwoDay2Checked(json[3].can_teach);
            setThreeDay3Checked(json[4].can_teach);
            setThreeDay4Checked(json[5].can_teach);
            setTwoDay3Checked(json[6].can_teach);
            setThreeDay5Checked(json[7].can_teach);
            setTwoDay4Checked(json[8].can_teach);
            setTwoDay5Checked(json[9].can_teach);
            setTwoDay6Checked(json[10].can_teach);
            }
        }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    // This function enables the button to run with the alert
    const sendFunctionsCombined = async () => {
        sendTimesPreferences();
        alert("Preference sent!");
    };

    /* useEffect runs the required functions for the API calls 
    to collect all JSON data for the page*/
    useEffect(() => {
        getPreferencesJson();
    }, []);

    return (
        <SafeAreaView
            style = {[
            styles.container,
            { backgroundColor: paperTheme.colors.background },
        ]}
        >
            <Button mode = "contained" onPress = {() => sendFunctionsCombined()}>
                Save Data
            </Button>

            <ScrollView style= {{ backgroundColor: paperTheme.colors.background }}>
                <Card
                    style = {[
                    styles.cardStyle,
                    { backgroundColor: paperTheme.cardStyle.backgroundColor },
                ]}
                >
                <Text
                    style = {[
                    styles.textStyle,
                    { color: paperTheme.cardTextStyle.color },
                    ]}
                >
                    3 Days a Week Unable to Teach
                </Text>
                </Card>
                {isLoading ? (
                <Button loading = {true} mode = "outlined">
                    {" "}
                    Loading
                </Button>
                ) : (
                <View>
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "8:15am-9:20am"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {threeDay1Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setThreeDay1Checked(!threeDay1Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "9:35am-10:40am"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {threeDay2Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setThreeDay2Checked(!threeDay2Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "10:55am-12:00pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {threeDay3Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setThreeDay3Checked(!threeDay3Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "12:15pm-1:20pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {threeDay4Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setThreeDay4Checked(!threeDay4Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "1:35pm-2:40pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {threeDay5Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setThreeDay5Checked(!threeDay5Checked);
                        }}
                    />
                </View>
                )}

                <Card
                    style = {[
                    styles.cardStyle,
                    { backgroundColor: paperTheme.cardStyle.backgroundColor },
                ]}
                >
                <Text
                    style = {[
                    styles.textStyle,
                    { color: paperTheme.cardTextStyle.color },
                    ]}
                >
                    2 Days a Week Unable to Teach
                </Text>
                </Card>

                {isLoading ? (
                <Button loading = {true} mode = "outlined">
                    {" "}
                    Loading
                </Button>
                ) : (
                <View>
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "8:00am-9:40am"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {twoDay1Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setTwoDay1Checked(!twoDay1Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "9:55am-11:35am"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {twoDay2Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setTwoDay2Checked(!twoDay2Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "1:30pm-3:10pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {twoDay3Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setTwoDay3Checked(!twoDay3Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "3:25pm-5:00pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {twoDay4Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setTwoDay4Checked(!twoDay4Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "5:30pm-7:15pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {twoDay5Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setTwoDay5Checked(!twoDay5Checked);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle = {paperTheme.label.color}
                        label = "7:30pm-9:15pm"
                        color = {paperTheme.checkboxStyle.color}
                        uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                        status = {twoDay6Checked ? "checked" : "unchecked"}
                        onPress = {() => {
                            setTwoDay6Checked(!twoDay6Checked);
                        }}
                    />
                </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TimesCTFun;
