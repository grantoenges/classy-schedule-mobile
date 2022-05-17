import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { Button, Card, Checkbox, Text, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Style";

/* DaysPrefFun creates useState objects for each possible day of the week
and time of day, it then creates the page view, containing title and checkboxes 
for each day of the week and time of day */
const DaysPrefFun = ({ navigation }) => {
    const paperTheme = useTheme();

    /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
    const [isLoading, setLoading] = useState(true);

    /* useStates for days of week and times of day*/
    const [mondayChecked, setMondayChecked] = useState(false);
    const [tuesdayChecked, setTuesdayChecked] = useState(false);
    const [wednesdayChecked, setWednesdayChecked] = useState(false);
    const [thursdayChecked, setThursdayChecked] = useState(false);
    const [fridayChecked, setFridayChecked] = useState(false);

    const [morningChecked, setMorningChecked] = useState(false);
    const [afternoonChecked, setAfternoonChecked] = useState(false);
    const [eveningChecked, setEveningChecked] = useState(false);

    /*
    sendTimeOfDayPreferences's purpose is to make a call to the API point and 
    save the data within the checkbox useState variables to update professor 
    preferences for time of day 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be 
    aware of that failure and should send that error to the console.log 
    */
    const sendTimeOfDayPreferences = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const userId = await AsyncStorage.getItem("UserId");
        const response = await fetch (
            "https://capstonedbapi.azurewebsites.net/preference-management/time-of-day-preferences/save/"+ userId,
            {
            method: "POST",
            /*  Request headers */
            headers: {
                Authorization: auth,
                "Content-Type": "application/json",
                accept: "*/*",
            },
            /* Building the JSON from checkboxes */
            body: JSON.stringify({
                prefer_morning: morningChecked,
                prefer_afternoon: afternoonChecked,
                prefer_evening: eveningChecked,
            }),
            }
        );
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
    sendPreferencesDOW's purpose is to make a call to the API point and 
    save the data within the checkbox useState variables to update professor 
    preferences for day of week
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be 
    aware of that failure and should send that error to the console.log 
    */
    const sendPreferencesDOW = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const userRole = await AsyncStorage.getItem("Role");
        const userId = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/" +
            "day-of-week-preferences/save/" + userId,
            {
            method: "POST",
            /*  Request Headers */
            headers: {
                Authorization: auth,
                "Content-Type": "application/json",
            },
            /* Building the JSON from checkboxes */
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

    /*
    getTODPreferences's purpose is to make a call to the API point and set our usestate 
    variable to the data that should be returned while also updating the isLoading 
    variable to reflect the loading status 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be aware of that 
    failure and should send that error to the console.log 
    */
    const getTODPreferences = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/" +
            "time-of-day-preferences/" + id,
            {
            method: "GET",
            /*,  Request headers */
            headers: {
                Authorization: auth,
            },
            }
        );

        const json = await response.json();
        if (json != undefined) { //If there are preferences already saved for professor
            setMorningChecked(json.prefer_morning);
            setAfternoonChecked(json.prefer_afternoon);
            setEveningChecked(json.prefer_evening);
        }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    /*
    getPreferencesJson's purpose is to make a call to the API point and set our usestate 
    variable to the data that should be returned while also updating the isLoading 
    variable to reflect the loading status 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be aware of that 
    failure and should send that error to the console.log 
    */
    const getPreferencesJson = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch (
            "https://capstonedbapi.azurewebsites.net/preference-management/" +
            "day-of-week-preferences/" + id,
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
        if (json != undefined) {
            setMondayChecked(json.prefer_monday);
            setTuesdayChecked(json.prefer_tuesday);
            setWednesdayChecked(json.prefer_wednesday);
            setThursdayChecked(json.prefer_thursday);
            setFridayChecked(json.prefer_friday);
        }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    /* useEffect runs the required functions for the API calls 
    to collect all JSON data for the page*/
    useEffect(() => {
        getPreferencesJson();
        getTODPreferences();
    }, []);

    return (
        <SafeAreaView
            style = {[
            styles.container,
            { backgroundColor: paperTheme.colors.background },
        ]}
        >
        <Button mode = "contained" onPress = {() => sendPreferences()}>
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
                    labelStyle = { paperTheme.label.color }
                    label = "Monday"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { mondayChecked ? "checked" : "unchecked" }
                    onPress = {() => {
                        setMondayChecked(!mondayChecked);
                    }}
                />
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Tuesday"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { tuesdayChecked ? "checked" : "unchecked" }
                    onPress={() => {
                        setTuesdayChecked(!tuesdayChecked);
                    }}
                />
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Wednesday"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { wednesdayChecked ? "checked" : "unchecked" }
                    onPress={() => {
                        setWednesdayChecked(!wednesdayChecked);
                    }}
                />
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Thursday"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { thursdayChecked ? "checked" : "unchecked" }
                    onPress = {() => {
                        setThursdayChecked(!thursdayChecked);
                    }}
                />
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Friday"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { fridayChecked ? "checked" : "unchecked" }
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
                Time of day preferences
            </Text>
            </Card>
            {isLoading ? (
            <Button loading = { true } mode = "outlined">
                {" "}
                Loading
            </Button>
            ) : (
            <View style= {{ backgroundColor: paperTheme.colors.background }}>
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Morning"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { morningChecked ? "checked" : "unchecked" }
                    onPress = {() => {
                        setMorningChecked(!morningChecked);
                    }}
                />
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Afternoon"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { afternoonChecked ? "checked" : "unchecked" }
                    onPress = {() => {
                        setAfternoonChecked(!afternoonChecked);
                    }}
                />
                <Checkbox.Item
                    labelStyle = { paperTheme.label.color }
                    label = "Evening"
                    color = { paperTheme.checkboxStyle.color }
                    uncheckedColor = { paperTheme.checkboxStyle.uncheckedColor }
                    status = { eveningChecked ? "checked" : "unchecked" }
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