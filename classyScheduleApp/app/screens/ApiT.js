import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import {Button, Card, Checkbox, TextInput} from 'react-native-paper'


const API_URL = "https://jsonplaceholder.typicode.com/users";
const ApiList = () => {
  const [testCheck, setstat400Checked] = React.useState(false);
  const [dummy, setDummy] = React.useState(false);

    const[data, setState] = useState([
                { id: "hey"+"you", key: 'test0', checked: false },
                { id: "hey"+"dummy", key: 'test1', checked: true },
                { id: "work", key: 'test2', checked: false },
                { id: "hard", key: 'test3', checked: true },
                { id: "dummy", key: 'test4', checked: false },
            ]);
    
            //console.log(data);
            function onCheckChanged(id){
              //Not needed I dont think
          }
        
        return (
        <View style={{ flex: 1, padding: 24 }}>
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
             renderItem={({ item }) => (
              <Checkbox.Item label={item.key} color="green" uncheckedColor="blue" status={item.checked? 'checked':'unchecked'} onPress={()=>{item.checked = !item.checked; setDummy(!dummy)}}/>
            )}
            extraData={({ item }) => ( item.checked)}

          />
          <Checkbox.Item label="Test Button(outside of list)" color="black" uncheckedColor="black" status={testCheck ? "checked" : "unchecked"}  onPress={() => {
            setstat400Checked(!testCheck);
          }}/>
      </View>
        );
};

export default ApiList;
