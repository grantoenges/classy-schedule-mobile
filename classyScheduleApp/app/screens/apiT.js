import React, {Component} from 'react';
import { Text, Card } from 'react-native';

export default class dpitest extends Component {
   constructor(props) {
   super(props);
   this.state = {
       dept_name : {},
    }
   }

componentDidMount() {
fetch('https://capstonedbapi.azurewebsites.net/department-management/departments')
.then(response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }
    },
    error => {
        let errmess = new Error(error.message);
        throw errmess;
    })
.then(response => response.json())
.then(dept => {
    this.setState({dept_name : dept_name });
})
.catch(error => {
    this.setState({ errMessage: error.message });
});
}
render () {
    const dept_name = this.state.dept_name;
    return (       
   <Card
      title="React native extraordinair">
      <Text>Tim</Text>
    </Card>
);
}
}