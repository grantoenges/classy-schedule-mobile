/*  Universal styling page, all styling on pages is located here
    Styling is adjusted by window and screen dimensions so that
    styling will look nice on multiple devices of varying sizes
*/
import React from "react";
import { StyleSheet, Dimensions, } from "react-native";

// Dimensions
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

// Context for theming
export const Context = React.createContext();

// Stylesheet 
export default StyleSheet.create({
    noPadContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 24,
    },
    TextInput: {
    },
    overlay: {
        flex: 2,
        position: "absolute",
        left: 0,
        top: 0,
        width: window.width,
        height: window.height,
        alignItems: "center",
        marginHorizontal: 0,
    },
    generalOverlay: {
        flex: 1,
        position: "absolute",
        left: 0,
        top: 0,
        width: window.width,
        height: window.height,
        marginHorizontal: 0,
    },
    generalButtonContained: {
        
    },
    generalButton: {
    },
    generalText: {
        
    },
    scrollview: {
        flex: 2,
        alignItems: "center",
        marginHorizontal: 0,
        
    },
    centerPage: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerPageMargin: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    tinyLogo: {
        width: screen.width * 0.6,
        height: screen.height * 0.25,
        marginTop: 10,
        alignItems: "center",
        marginTop: "25%",
    },
    cardStyleWelcome: {
        backgroundColor: "grey",
    },
    buttonStyle: {
        width: "100%",
        height: "100%",
        minWidth: screen.width * 0.4,
        minHeight: screen.height * 0.18,
        maxWidth: screen.width * 0.45,
        maxHeight: screen.height * 0.25,
        textAlign: "center",
        borderRadius: 20,
        borderWidth: 0.75,
        elevation: 10,
        justifyContent: "center",
    },
    textStyle: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "System",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginVertical: 9,
        marginHorizontal: 16,
    },
    modalText: {
        color: "white",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 12,
        fontFamily: "System",
        textTransform: "uppercase",
        marginHorizontal: 10,
    },
    modalStyle: {
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 0,

        alignItems: "center",
        textAlign: "center",
        backgroundColor: "rgba(52, 52, 52, 0.25)",
    },

    viewStyle: {
        flex: -1,
        flexDirection: "row",
        marginTop: 10,
    },
    cardStyle: {
        backgroundColor: "powderblue",
        margin: 10,
    },
    label: {
        color: "black",
    },
    title: {
        margin: 8,
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        flexWrap: "wrap",
    },
    buttonStyleT: {
        backgroundColor: "silver",
    },
    scheduleHeight: {
        height: screen.height * 0.82,
    },
});
