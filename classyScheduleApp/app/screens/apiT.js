import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

/*Please dont roast me for this page its a tester page*/

const ApiList = () => { 
    const [data, setData] = useState([]);
    const [boxes, setBoxes] = useState([]);
    /*This is the */ 
    const getJson = async () => {
        try {
         const response = await fetch('https://capstonedbapi.azurewebsites.net/department-management/departments', {
           method: 'GET'
            // mock data
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
       setBoxes({checkboxes: data.map(x => {
          x['value'] = false;
          return x;
        }),
      });
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
        <View >
          <Text>
            {JSON.stringify(data)}
          </Text>
          {boxes > 0 &&
            boxes.map(checkbox => (
              <View>
                <Text>{checkbox.label}</Text>
                <CheckBox
                  onValueChange={value =>
                    setBoxes(state => {
                      const index = boxes.findIndex(
                        x => x.dept_name === checkbox.dept_name
                      );
                      return {
                        checkboxes: [
                          boxes.slice(0, index),
                          { id: checkbox.id, label: checkbox.label, value },
                          boxes.slice(index+1),
                        ],
                      };
                    })
                  }
                  value={checkbox.value}
                  key={checkbox.dept_name}
                />
              </View>
            ))}
        </View>
      );
    }


export default ApiList;