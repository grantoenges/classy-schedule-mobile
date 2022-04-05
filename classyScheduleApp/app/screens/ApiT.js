import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, ScrollView, View, StyleSheet } from 'react-native';
import {Button, Card, Checkbox, TextInput} from 'react-native-paper'
//import Apites from './apiTest';


 const ApiList = () => {
  global.auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s';

  /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
  const [isLoading, setLoading] = useState(true);
  const [dummy, setDummy] = useState(false);
  //const [auth, setAuth] = useState('');

  


  /*This usestate variable is used as the json data obtained from the api calls storage location*/
  const [data, setData] = useState([]);
  const [dataT, setDataT] = useState([]);


  const getAuth = async () => {
    try {
      setLoading(true);
     const response = await fetch('https://capstonedbapi.azurewebsites.net/Users/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'test',
        password: 'test'
      })
    });
     const json = await response.json();
     console.log(json.token);
     //setAuth(json.token);
     //console.log(dataT);
     //setData(json);
     } catch (error) {
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
      const response = await fetch('https://capstonedbapi.azurewebsites.net/class-management/classes', {
        method: 'GET',
        /*,  Example of how headers look for if people are to take this to use on other parts of the app */ 
        headers: { 
          //Will need the authorization to be a saved string each time we sign in
          'Authorization': auth//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
        },
        });
      const json = await response.json();
      //console.log(json);

        setDataT((dataT) => [
          ...dataT,
          ...json.map(({class_num,dept_id, class_name, capacity, credits}) => ({
            class_num,
            dept_id,
            class_name,
            checked:false
          //
          })),
        ]);
      //console.log(dataT);
      //setData(json);
      } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  /*useEffect is a react native hook that allows us to get to using our usestate variables and allowing
  for the dynamic rendering of that data onto the screen. This useeffect for example calls our getJson method */
  useEffect(() => {
    getAuth();
    getJson();
  }, []);

  /*This return is where the actual react part of the app is made and the  */
  return (
    <View style={{ flex: 1, padding: 24 }}>      
      <Button onPress={()=>{console.log('hh')}} mode="contained" >Save Data</Button>
      {isLoading ? <Button loading ={true} mode="outlined"> Loading</Button> : (
        <FlatList
          data={dataT}
          keyExtractor={({ class_num }) => class_num}
          renderItem={({ item }) => (
              <Checkbox.Item label={item.class_name} color="darkblue" uncheckedColor="black"status={item.checked? 'checked':'unchecked'} onPress={()=>{item.checked = !item.checked; setDummy(!dummy)}}/>
            )}
        />   
      )}
    </View>
  );
};

export default ApiList;

