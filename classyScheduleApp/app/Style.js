/*  Universal styling page, all styling on pages is located here
    Styling is adjusted by window and screen dimensions so that
    styling will look nice on multiple devices of varying sizes
*/
import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        
    },
    scrollview: {
        flex: 2,
        alignItems:"center",
        marginHorizontal: 0,
        //paddingBottom: bottomNavigatorBarHeight
    },
    centerPage: {
        justifyContent: "center",
        alignItems:"center"
    },
    centerPageMargin: {
        justifyContent: "center",
        alignItems:"center",
        marginTop: 40,
        
    },
    tinyLogo:{
        width: screen.width*.6,
        height: screen.height*.25,
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
        minWidth: screen.width*.4,
        minHeight: screen.height*.18,
        maxWidth: screen.width*.45,
        maxHeight: screen.height*.25,
        textAlign: "center",
        backgroundColor: "#6200ed",
        //backgroundColor: "#7F46C7",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        elevation: 10,
        justifyContent: "center",
        
    },
    textStyle: {
        
        //color: "#6200ed",
        color: "white",
        justifyContent: "center",
        alignItems:"center",
        textAlign: "center",
        fontWeight: '500',
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
        alignItems:"flex-start",
        textAlign: "center",
        fontWeight: '500',
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
        
        alignItems:"center",
        textAlign: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.25)',
    
    },
    
    viewStyle: {
        flex:-1,
        flexDirection:"row",
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
    buttonStyleT:{
        backgroundColor :"silver"
    },
    scheduleHeight: {
        height: screen.height * .82
    }
});


