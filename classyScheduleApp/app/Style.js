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
        width: screen.width*.5,
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
    margin: 6,
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


