import * as React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper'
import AppNavigator from './app/appNavigator';

function App() {
  return (
    <PaperProvider>
      <AppNavigator></AppNavigator>
    </PaperProvider>
  );
}

export default App;
