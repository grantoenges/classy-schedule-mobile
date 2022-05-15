import React from "react";
import { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Alert,
    ScrollView,
} from "react-native";
import { Button, Card, Checkbox, Text, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../Style";

// DaysPrefFun creates useState objects for each possible day of the week
// it then creates the page view, containing title and checkboxes for each day of the week
const DaysPrefFun = ({ navigation }) => {
    const paperTheme = useTheme();

    /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
    const [isLoading, setLoading] = useState(true);
    const [dummy, setDummy] = React.useState(false);

    /*This usestate variable is used as the json data obtained from the api calls storage location*/
    const [data, setData] = useState([]);
    const [dataT, setDataT] = useState([]);

    const [mondayChecked, setMondayChecked] = useState(false);
    const [tuesdayChecked, setTuesdayChecked] = useState(false);
    const [wednesdayChecked, setWednesdayChecked] = useState(false);
    const [thursdayChecked, setThursdayChecked] = useState(false);
    const [fridayChecked, setFridayChecked] = useState(false);

    const [morningChecked, setMorningChecked] = useState(false);
    const [afternoonChecked, setAfternoonChecked] = useState(false);
    const [eveningChecked, setEveningChecked] = useState(false);

    /*
    sendTimeOfDayPreferences's purpose is to make a call to the API point and set our usestate variable to the data that 
    should be returned while also updating the isLoading variable to reflect the loading status 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be aware of that failure and 
    should send that error to the console.log 
    */
    const sendTimeOfDayPreferences = async () => {
        try {
        setLoading(true);
        setDataT([]);
        const auth = await AsyncStorage.getItem("Auth");
        const userRole = await AsyncStorage.getItem("Role");
        const userId = await AsyncStorage.getItem("UserId");

        console.log("Current auth token", auth);
        console.log("Current userId", userId);
        console.log("Current userRole", userRole);
        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/time-of-day-preferences/save/" +
            userId,
            {
            method: "POST",
            /*,  Example of how headers look for if people are to take this to use on other parts of the app */
            headers: {
                //Will need the authorization to be a saved string each time we sign in
                Authorization: auth, //AUTH._W//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
                "Content-Type": "application/json",
                accept: "*/*",
            },
            body: JSON.stringify({
                prefer_morning: morningChecked,
                prefer_afternoon: afternoonChecked,
                prefer_evening: eveningChecked,
            }),
            }
        );
        //const json = await response.json();
        /*This mapping function allows us to tag an extra variable to the data received that tells us if the class is selected 
        setDataT((dataT) => [
            ...dataT,
            ...json.map(
            ({ class_num, dept_id, class_name, capacity, credits }) => ({
                class_num,
                dept_id,
                class_name,
                checked: false,
            })
            ),
        ]);*/
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    function sendPreferences() {
        sendPreferencesDOW();
        sendTimeOfDayPreferences();
        alert("Sent to database!");
    }

    /*
    sendPreferences's purpose is to make a call to the API point and set our usestate variable to the data that 
    should be returned while also updating the isLoading variable to reflect the loading status 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be aware of that failure and 
    should send that error to the console.log 
    */
    const sendPreferencesDOW = async () => {
        try {
        setLoading(true);
        setDataT([]);
        const auth = await AsyncStorage.getItem("Auth");
        const userRole = await AsyncStorage.getItem("Role");
        const userId = await AsyncStorage.getItem("UserId");

        console.log("Current auth token", auth);
        console.log("Current userId", userId);
        console.log("Current userRole", userRole);
        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/day-of-week-preferences/save/" +
            userId,
            {
            method: "POST",
            /*,  Example of how headers look for if people are to take this to use on other parts of the app */
            headers: {
                //Will need the authorization to be a saved string each time we sign in
                Authorization: auth, //AUTH._W//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prefer_monday: mondayChecked,
                prefer_tuesday: tuesdayChecked,
                prefer_wednesday: wednesdayChecked,
                prefer_thursday: thursdayChecked,
                prefer_friday: fridayChecked,
            }),
            }
        );
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    const getTODPreferences = async () => {
        try {
        setLoading(true);
        //setPref([]);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/time-of-day-preferences/" +
            id,
            {
            method: "GET",
            /*,  Example of how headers look for if people are to take this to use on other parts of the app */
            headers: {
                //Will need the authorization to be a saved string each time we sign in
                Authorization: auth,
            },
            }
        );

        const json = await response.json();
        /*This mapping function allows us to tag an extra variable to the data received that tells us if the class is selected */
        if (json != undefined) {
            setMorningChecked(json.prefer_morning);
            setAfternoonChecked(json.prefer_afternoon);
            setEveningChecked(json.prefer_evening);
        }
        //console.log(json);
        } catch (error) {
        //setPref([]);

        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    const getPreferencesJson = async () => {
        try {
        setLoading(true);
        //setPref([]);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/day-of-week-preferences/" +
            id,
            {
            method: "GET",
            /*,  Example of how headers look for if people are to take this to use on other parts of the app */
            headers: {
                //Will need the authorization to be a saved string each time we sign in
                Authorization: auth,
            },
            }
        );

        const json = await response.json();
        /*This mapping function allows us to tag an extra variable to the data received that tells us if the class is selected */
        if (json != undefined) {
            setMondayChecked(json.prefer_monday);
            setTuesdayChecked(json.prefer_tuesday);
            setWednesdayChecked(json.prefer_wednesday);
            setThursdayChecked(json.prefer_thursday);
            setFridayChecked(json.prefer_friday);
        }
        //console.log(json);
        } catch (error) {
        //setPref([]);

        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        getPreferencesJson();
        getTODPreferences();
    }, []);

    return (
        <SafeAreaView
        style = {[
            styles.noPadcontainer,
            { backgroundColor: paperTheme.colors.background },
        ]}
        >
        <Button mode = "contained" onPress = {() => sendPreferences()}>
            Save Data
        </Button>
        <ScrollView>
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
                Days Preferred to Teach
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
                label = "Monday"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {mondayChecked ? "checked" : "unchecked"}
                onPress = {() => {
                    setMondayChecked(!mondayChecked);
                }}
                />
                <Checkbox.Item
                labelStyle = {paperTheme.label.color}
                label = "Tuesday"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {tuesdayChecked ? "checked" : "unchecked"}
                onPress={() => {
                    setTuesdayChecked(!tuesdayChecked);
                }}
                />
                <Checkbox.Item
                labelStyle = {paperTheme.label.color}
                label = "Wednesday"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {wednesdayChecked ? "checked" : "unchecked"}
                onPress={() => {
                    setWednesdayChecked(!wednesdayChecked);
                }}
                />
                <Checkbox.Item
                labelStyle = {paperTheme.label.color}
                label = "Thursday"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {thursdayChecked ? "checked" : "unchecked"}
                onPress = {() => {
                    setThursdayChecked(!thursdayChecked);
                }}
                />
                <Checkbox.Item
                labelStyle = {paperTheme.label.color}
                label = "Friday"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {fridayChecked ? "checked" : "unchecked"}
                onPress = {() => {
                    setFridayChecked(!fridayChecked);
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
                Days Preferred to Teach
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
                label = "Morning"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {morningChecked ? "checked" : "unchecked"}
                onPress = {() => {
                    setMorningChecked(!morningChecked);
                }}
                />
                <Checkbox.Item
                labelStyle = {paperTheme.label.color}
                label = "Afternoon"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {afternoonChecked ? "checked" : "unchecked"}
                onPress = {() => {
                    setAfternoonChecked(!afternoonChecked);
                }}
                />
                <Checkbox.Item
                labelStyle = {paperTheme.label.color}
                label = "Evening"
                color = {paperTheme.checkboxStyle.color}
                uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                status = {eveningChecked ? "checked" : "unchecked"}
                onPress = {() => {
                    setEveningChecked(!eveningChecked);
                }}
                />
            </View>
            )}
        </ScrollView>
        </SafeAreaView>
    );
};

export default DaysPrefFun;
