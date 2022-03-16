import React, {Component} from 'react';
import { Text, Card } from 'react-native';

export default class Apitest extends Component {
   constructor(props) {
   super(props);
   this.state = {
       user : {},
       errMessage : ''
    }
   }

componentDidMount() {
fetch({/*Enter URL here?*/ })
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
.then(leaders => {
    this.setState({user : user });
})
.catch(error => {
    this.setState({ errMessage: error.message });
});
}
render () {
    const {lastName, firstName} = this.state.user;
    return (       
   <Card
      title="React native extraordinair">
      <Text>{/*${firstName} ${lastName}/>*/} Tim</Text>
    </Card>
);
}
}