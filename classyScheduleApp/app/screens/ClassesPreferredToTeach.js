import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    FlatList,
} from "react-native";
import { 
    Button,
    Checkbox,
    useTheme,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Style";


const ClassesPTFun = () => {
    const paperTheme = useTheme();

    /*This usestate variable is used as a flag, keeping track of the loading
    vs not loading of the data*/
    const [isLoading, setLoading] = useState(true);
    /*This usestate variable is used as a flag, keeping track of the when the page 
    has information changed and will need a reload of the data*/
    const [dummy, setDummy] = useState(false);
    /*This usestate variable is used as the json data obtained from the api calls 
    storage location*/
    const [pref, setPref] = useState([]);
    /*This usestate variable is used as the storage data that will be 
    sent to the database for each classes boolean on can teach or not*/
    const [dataT, setDataT] = useState([]);

    /* This const's purpose is to send the current user selections to the 
    database. It will take in no arguments and will not return anything.*/
    const sendSelection = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/" +
            "class-preferences/prefer-to-teach/save/" + id,
            {
            method: "POST",
            /*,  Example of how headers look for if people are to take 
            this to use on other parts of the app */
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: auth, 
            },
            body: JSON.stringify(dataT),
            }
        );
        const json = await response.json();
        alert(json);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };
    /* Gets preferences from database as a json and stores them in the set pref usestate */
    const getPreferencesJson = async () => {
        try {
        setLoading(true);
        setPref([]);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/" + 
            "class-preferences/prefer-to-teach/" + id,
            {
            method: "GET",
            headers: {
                Authorization: auth,
            },
            }
        );

        const json = await response.json();
        /*This mapping function allows us to tag an extra variable to the 
        data received that tells us if the class is selected */
        if (json.length != undefined) {
            setPref((pref) => [
            ...pref,
            ...json.map(({ class_id, prefer_to_teach }) => ({
                class_id,
                prefer_to_teach,
            })),
            ]);
        }
        } catch (error) {
        setPref([]);
        console.error(error);
        } finally {
        setLoading(false);
        }
    };
    /*
    getJson's purpose is to make a call to the API point and set
    our usestate variable to the data that should be returned while 
    also updating the isLoading variable to reflect the loading status 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be
    aware of that failure and should send that error to the console.log 
    */
    const getJson = async () => {
        try {
        setLoading(true);
        setDataT([]);
        const auth = await AsyncStorage.getItem("Auth");
        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/class-management/classes",
            {
            method: "GET",
            headers: {
                Authorization: auth,
            },
            }
        );

        const json = await response.json();
        /* This mapping function allows us to tag an extra variable to the
        data received that tells us if the class is selected */
        if (json.length != undefined) {
            setDataT((dataT) => [
            ...dataT,
            ...json.map(
                ({
                class_id,
                class_num,
                dept_id,
                class_name,
                is_lab,
                capacity,
                credits,
                }) => ({
                class_id,
                class_num,
                dept_id,
                class_name,
                is_lab,
                prefer_to_teach: false, 
                })
            ),
            ]);
        }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    /* This method will look at the current db's saved preferences
    for classes and will make an array of the id's for those classes */
    const allTrues = async () => {
        setLoading(true);
        var arr = [];
        if (pref.length != undefined) {
        pref.map((item) => {
            if (item.prefer_to_teach == true) {
            arr.push(item.class_id);
            }
        });
        }
        getTF(arr);
    };

    /* This method will look at the passed in list of class_id's
    for classes and will set the current true falses for the usestate
    to match the list grabbed from the database */
    const getTF = (id) => {
        // loop over the todos list and find the provided id.
        let ns = dataT.map((item) => {
        if (id.includes(item.class_id)) {
            // gets everything that was already in item, and updates "done"
            return { ...item, prefer_to_teach: true }; 
        }
        return item; // else return unmodified item
        });
        setDataT(ns);
        setLoading(false);
    };
    
    /*useEffect is a react native hook that allows us to get to using our 
    usestate variables and allowing for the dynamic rendering of that data
    onto the screen. This useeffect for example calls our getJson method */
    useEffect(() => {
        getPreferencesJson();
        getJson();
    }, []);

    /* This return is where the actual react part of the app is made and the
    data will be displayed for the user */
    return (
        <SafeAreaView
            style = {[
            styles.container,
            { backgroundColor: paperTheme.colors.background },
        ]}
        >
        <Button onPress = {sendSelection} mode = "contained">
            Save Data
        </Button>
        {isLoading ? (
            <Button loading = {true} mode = "outlined">
                {" "}
                Loading
            </Button>
        ) : (
            <FlatList
                data = {dataT}
                keyExtractor = {({ class_id }) => class_id}
                renderItem = {({ item }) => (
                    <Checkbox.Item
                    labelStyle = {{ color: paperTheme.checkboxStyle.textColor }}
                    label = {item.class_name}
                    color = {paperTheme.checkboxStyle.color}
                    uncheckedColor = {paperTheme.checkboxStyle.uncheckedColor}
                    status = {item.prefer_to_teach ? "checked" : "unchecked"}
                    onPress = {() => {
                        item.prefer_to_teach = !item.prefer_to_teach;
                        setDummy(!dummy);
                    }}
                    />
                )}
            />
        )}
        <Button mode = "contained" onPress = {allTrues}>
            see current saved preferences{" "}
        </Button>
        </SafeAreaView>
    );
};

export default ClassesPTFun;
