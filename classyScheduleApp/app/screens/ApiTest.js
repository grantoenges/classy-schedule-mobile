import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import {Button, Card, Checkbox, TextInput} from 'react-native-paper'

 const Apites = () => {
  /*This usestate variable is used as a flag, keeping track of the loading vs not loading of the data*/
  const [isLoading, setLoading] = useState(true);
  const [dummy, setDummy] = React.useState(false);

  /*This usestate variable is used as the json data obtained from the api calls storage location*/
  const [data, setData] = useState([]);
  const [dataT, setDataT] = useState([

  ]);
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
      const response = await fetch('https://capstonedbapi.azurewebsites.net/department-management/departments', {
        method: 'GET',
        /*,  Example of how headers look for if people are to take this to use on other parts of the app */ 
        headers: { 
          //Will need the authorization to be a saved string each time we sign in
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2NDkxMDYwNTEsImV4cCI6MTY0OTcxMDg1MSwiaWF0IjoxNjQ5MTA2MDUxfQ.FlDyEzy_0dDG-VM5oIvvIWYI2Zo7MMUcS9KnEoiJ2_s'
        },
        });
      const json = await response.json();
        setDataT((dataT) => [
          ...dataT,
          ...json.map(({dept_id, dept_name}) => ({
            dept_id,
            dept_name,
          //
          })),
        ]);
      console.log(dataT);
      setData(json);
      } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  /*useEffect is a react native hook that allows us to get to using our usestate variables and allowing
  for the dynamic rendering of that data onto the screen. This useeffect for example calls our getJson method */
  useEffect(() => {
    getJson();
  }, []);

  /*This return is where the actual react part of the app is made and the  */
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={dataT}
          keyExtractor={({ dept_id }) => dept_id}
          renderItem={({ item }) => (
              <Checkbox.Item label={item.dept_name} color="green" uncheckedColor="black"status={item.checked? 'checked':'unchecked'} onPress={()=>{item.checked = !item.checked; setDummy(!dummy)}}/>
            )}
        />
      )}
    </View>
  );
};

/*This is the pages chouce for design of different containers. Similar syntax to CSS. Subject to drastic change. */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    cardStyle: {
      backgroundColor: "powderblue",
    },
    buttonStyle: {
      backgroundColor: "silver",
    },
    label: {
      color: "black",
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
  });

export default Apites;
