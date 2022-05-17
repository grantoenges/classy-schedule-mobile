import * as React from "react";
import {
    Provider as PaperProvider,
    DarkTheme,
    DefaultTheme,
} from "react-native-paper";
import AppNavigator from "./app/AppNavigator";
import { Context } from "./app/Style";
/*
This method is technically the default starting page for the app 
ours is made in such a way that the default page is used as a container 
that holds onto the paper provider, the style import that is used
to make the app look nice along with the app navigator that allows
for different app pages to be navigated to.
*/
function App() {
    // Dark Theme useState
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    // Dark Theme
    const darkStyle = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            background: "#1a1a1a",
        },
        buttonStyle: {
            color: "#332940",
            borderColor: "#696969",
            textColor: "#a1a1a1",
        },
        headerStyle: {
            color: "#52307c",
            textColor: "grey",
        },
        textStyle: {
            color: "grey",
        },
        label: {
            color: "white",
        },
        cardStyle: {
            backgroundColor: "#332940",
            margin: 10,
        },
        cardTextStyle: {
            color: "white",
        },
        checkboxStyle: {
            uncheckedColor: "#a1a1a1",
            color: "#CBC3E3",
            textColor: "lightgray",
        }
    };

    // Light Theme
    const lightStyle = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            backgrounds: "#fafafa",
        },
        buttonStyle: {
            color: "#6200ed",
            borderColor: "white",
            textColor: "white",
        },
        headerStyle: {
            color: "#E1D9D1",
            textColor: "black",
        },
        textStyle: {
            color: "black",
        },
        label: {
            color: "black",
        },
        cardStyle: {
            backgroundColor: "#6200ed",
            margin: 10,
        },
        cardTextStyle: {
            color: "white",
        },
        checkboxStyle: {
            uncheckedColor: "black",
            color: "darkblue",
            textColor: "black",
        }
    };

    // Togglability of theming within the app
    const theme = isDarkTheme ? darkStyle : lightStyle;
    const context = React.useMemo(
        () => ({
            toggleTheme: () => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
            },
        }),[]);
    return (
        <PaperProvider theme = {theme}>
            <Context.Provider value = {context}>
                <AppNavigator></AppNavigator>
            </Context.Provider>
        </PaperProvider>
    );
}
export default App;
