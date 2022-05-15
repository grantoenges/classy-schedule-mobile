import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    Text,
    ScrollView,
    View,
} from "react-native";
import { 
    Button,
    Card,
    Checkbox,
    TextInput,
    useTheme,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ClassesPTFun = () => {
    const paperTheme = useTheme();

    /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
    const [isLoading, setLoading] = useState(true);
    /*This usestate variable is used as a flag, keeping track of the when the page has information changed and will need a reload of the data*/
    const [dummy, setDummy] = useState(false);
    /*This usestate variable is used as the json data obtained from the api calls storage location*/
    const [pref, setPref] = useState([]);
    const [dataT, setDataT] = useState([]);

    const sendSelection = async () => {
        try {
        setLoading(true);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/class-preferences/prefer-to-teach/save/" +
            id,
            {
            method: "POST",
            /*,  Example of how headers look for if people are to take this to use on other parts of the app */
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: auth, //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
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

    const getPreferencesJson = async () => {
        try {
        setLoading(true);
        setPref([]);
        const auth = await AsyncStorage.getItem("Auth");
        const id = await AsyncStorage.getItem("UserId");

        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/preference-management/class-preferences/prefer-to-teach/" +
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
        console.log("JOSN IS" + json.length);
        if (json.length != undefined) {
            setPref((pref) => [
            ...pref,
            ...json.map(({ class_id, prefer_to_teach }) => ({
                class_id,
                prefer_to_teach,
            })),
            ]);
        }
        //console.log(json);
        } catch (error) {
        setPref([]);

        console.error(error);
        } finally {
        setLoading(false);
        }
    };
    /*
    getJson's purpose is to make a call to the API point and set our usestate variable to the data that 
    should be returned while also updating the isLoading variable to reflect the loading status 
        ------------------
        Inputs: None
        Outputs: None (But the data variable should be set to the json from the API)
        -------------------
    If for some reason the API call fails then the try catch block should be aware of that failure and 
    should send that error to the console.log 
    */
    const getJson = async () => {
        try {
        setLoading(true);
        setDataT([]);
        const auth = await AsyncStorage.getItem("Auth");

        console.log("Current auth token", auth);
        const response = await fetch(
            "https://capstonedbapi.azurewebsites.net/class-management/classes",
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
                prefer_to_teach: false, //pref.find(element => (element.class_id == 8))
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
    const allTrues = async () => {
        setLoading(true);

        var arr = [];
        if (pref.length != undefined) {
        pref.map((item) => {
            if (item.prefer_to_teach == true) {
            console.log("adding" + item.class_id);
            arr.push(item.class_id);
            }
        });
        }
        getTF(arr);
    };
    const getTF = (id) => {
        // loop over the todos list and find the provided id.
        let ns = dataT.map((item) => {
        if (id.includes(item.class_id)) {
            return { ...item, prefer_to_teach: true }; //gets everything that was already in item, and updates "done"
        }
        return item; // else return unmodified item
        });
        setDataT(ns);
        setLoading(false);
    };
    /*useEffect is a react native hook that allows us to get to using our usestate variables and allowing
    for the dynamic rendering of that data onto the screen. This useeffect for example calls our getJson method */
    useEffect(() => {
        getPreferencesJson();
        getJson();
        //allTrues();
    }, []);

    /*This return is where the actual react part of the app is made and the data will be displayed for the user  */
    return (
        <SafeAreaView
            style = {[
            styles.noPadContainer,
            { backgroundColor: paperTheme.colors.background },
        ]}
        >
        <Button onPress = {sendSelection} mode="contained">
            Save Data
        </Button>
        {isLoading ? (
            <Button loading={true} mode="outlined">
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
