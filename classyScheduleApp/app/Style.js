import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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
        width: 150,
        height: 150,
        marginTop: 10,
        alignItems: "center",
        marginTop: "30%",
    },
    cardStyleWelcome: {
        backgroundColor: "grey",
    },
    buttonStyle: {
        width: "100%",
        height: "100%",
        minWidth: 150,
        minHeight: 150,
        maxWidth:175,
        maxHeight: 175,
        textAlign: "center",
        backgroundColor: "#6200ed",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        elevation: 20,
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
    },
    label: {
    color: "black",
    },
    title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    },
    buttonStyleT:{
        backgroundColor :"silver"
    },
});


  