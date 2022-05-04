import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, ScrollView, View } from 'react-native';
import {Button, Card, Checkbox, TextInput, useTheme} from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";


const ClassesPTFun = () => {
   /*This is a temporary variable that holds the current authorization token to allow for connections with the database */

  /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
  const [isLoading, setLoading] = useState(true);
  /*This usestate variable is used as a flag, keeping track of the when the page has information changed and will need a reload of the data*/
  const [dummy, setDummy] = useState(false);
  /*This usestate variable is used as the json data obtained from the api calls storage location*/
  //const [data, setData] = useState([]);
  const [dataT, setDataT] = useState([]);


  const seeSelection = async() =>{
    try{
     setLoading(true);
     console.log(JSON.stringify(dataT));
     }
       catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
  }

 const sendSelection = async() =>{
   try{
    setLoading(true);
    const auth = await AsyncStorage.getItem('Auth');
    const id = await AsyncStorage.getItem('UserId');

    const response = await fetch('https://capstonedbapi.azurewebsites.net/preference-management/class-preferences/prefer-to-teach/save/'+id, {
      method: 'POST',
      /*,  Example of how headers look for if people are to take this to use on other parts of the app */ 
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //Will need the authorization to be a saved string each time we sign in
        'Authorization': auth//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
      },
        body: JSON.stringify(dataT)
      });
      const json = await response.json();
    console.log(json);
    }
      catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
 }
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
       const auth = await AsyncStorage.getItem('Auth');

       console.log('Current auth token', auth);
      const response = await fetch('https://capstonedbapi.azurewebsites.net/class-management/classes', {
        method: 'GET',
        /*,  Example of how headers look for if people are to take this to use on other parts of the app */ 
        headers: { 
          //Will need the authorization to be a saved string each time we sign in
          'Authorization': auth
        },
        });
      const json = await response.json();
      /*This mapping function allows us to tag an extra variable to the data received that tells us if the class is selected */
        setDataT((dataT) => [
          ...dataT,
          ...json.map(({class_num,dept_id, class_name,is_lab, capacity, credits}) => ({
            class_num,
            dept_id,
            class_name,
            is_lab,
            prefer_to_teach:false
          })),
        ]);
      } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  /*useEffect is a react native hook that allows us to get to using our usestate variables and allowing
  for the dynamic rendering of that data onto the screen. This useeffect for example calls our getJson method */
  useEffect(() => {
    //getAuth();
    getJson();
  }, []);

  /*This return is where the actual react part of the app is made and the data will be displayed for the user  */
  return (
    <View style = {{ flex: 1, padding: 24 }}>      
      <Button onPress = {sendSelection} mode = "contained" >Save Data</Button>
      {isLoading ? <Button loading = {true} mode = "outlined" onPress={seeSelection}> Loading</Button> : (
        <FlatList
          data = {dataT}
          keyExtractor = {({ class_num}) => (class_num) }
          renderItem = {({ item }) => (
              <Checkbox.Item label = {item.class_name} color = "darkblue" uncheckedColor = "black" status = {item.prefer_to_teach? 'checked':'unchecked'} onPress = {()=>{item.prefer_to_teach = !item.prefer_to_teach; setDummy(!dummy)}}/>
            )}
        />   
      )}
        <Button mode="contained" onPress={seeSelection} >see data </Button>

    </View>
  );
};


export default ClassesPTFun;
