import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
import AppNavigator from "./app/AppNavigator";

/*This method is technically the default starting page for the app 
 ours is made in such a way that the default page is used as a container 
 that holds onto the paper provider, the style import that is used
 to make the app look nice along with the app navigator that allows
 for different app pages to be navigated to.
*/
function App() {
  return (
    <PaperProvider>
      <AppNavigator></AppNavigator>
    </PaperProvider>
  );
}
export default App;
