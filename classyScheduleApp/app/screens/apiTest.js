import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

 const Apites = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getJson = async () => {
     try {
      const response = await fetch('https://capstonedbapi.azurewebsites.net/department-management/departments', {
        method: 'GET'
        /*,  Example of how headers look
        headers: {
            'Access-Control-Allow-Origin': '*',
            'accept': 'text/plain',
            'Content-Type': 'application/json'
        },*/
        
    });
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getJson();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.dept_name}</Text>
          )}
        />
      )}
    </View>
  );
};

export default Apites;