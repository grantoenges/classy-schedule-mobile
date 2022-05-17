import React from "react";
import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Pressable,
} from "react-native";
import {Modal, useTheme } from "react-native-paper";
import styles from "../Style";

/** This method is what displays the screen for this page
 * Inputs: Navigation class (allowing for the page to navigate to other pages)
 * Outputs: An array of buttons that allow for the user to press them and move to other screens
 */
const PreferenceFun = ({ navigation }) => {
    const ClassesCT = () => navigation.navigate("Classes Can Teach");
    const ClassesPT = () => navigation.navigate("Classes Preferred To Teach");
    const TimesCT = () => navigation.navigate("Times Unable To Teach");
    const DaysPT = () => navigation.navigate("Days Preferred To Teach");

    // Use state constants for modal visibility
    const [classCTModal, setModalCT] = useState(false);
    const [classPTModal, setModalPT] = useState(false);
    const [timesCTModal, setModalTime] = useState(false);
    const [daysPTModal, setModalDays] = useState(false);

    // Theming
    const paperTheme = useTheme();
    let buttonColor = paperTheme.buttonStyle;

    return (
        <SafeAreaView
            style = {[
            styles.container,
            { backgroundColor: paperTheme.colors.background },
        ]}
        >
        <View style = {styles.overlay}>
            <View style = {styles.viewStyle}>
            {/* Classes Can Teach */}
            <TouchableOpacity
                activeOpacity = {0.8}
                style = {[
                styles.buttonStyle,
                {
                    backgroundColor: buttonColor.color,
                    borderColor: buttonColor.borderColor,
                },
                ]}
                onPress = {ClassesCT}
                onLongPress = {() => setModalCT(true)}
            >
                <Text style = {[styles.textStyle, { color: buttonColor.textColor }]}>
                    Classes Can Teach
                </Text>
                <Modal
                    contentContainerStyle = {styles.modalStyle}
                    animationType = "slide"
                    transparent = {true}
                    visible = {classCTModal}
                    onDismiss = {() => {
                        setModalCT(!classCTModal);
                    }}
                >
                <Pressable
                    style = {styles.modalStyle}
                    onPress = {() => setModalCT(!classCTModal)}
                >
                    <Text style = {styles.modalText}>
                        Brings the user to the classes can teach page where they can
                        select the classes they can teach.
                    </Text>
                </Pressable>
                </Modal>
            </TouchableOpacity>
            {/* Classes Preferred to Teach */}
            <TouchableOpacity
                mode = "contained"
                style = {[
                styles.buttonStyle,
                {
                    backgroundColor: buttonColor.color,
                    borderColor: buttonColor.borderColor,
                },
                ]}
                activeOpacity = {0.8}
                onPress = {ClassesPT}
                onLongPress = {() => setModalPT(true)}
            >
                <Text style = {[styles.textStyle, { color: buttonColor.textColor }]}>
                    Classes Preferred To Teach
                </Text>
                <Modal
                    contentContainerStyle={styles.modalStyle}
                    animationType="slide"
                    transparent={true}
                    visible={classPTModal}
                    onDismiss={() => {
                        setModalPT(!classPTModal);
                    }}
                >
                <Pressable
                    style = {styles.modalStyle}
                    onPress = {() => setModalPT(!classPTModal)}
                >
                    <Text style = {styles.modalText}>
                        Brings user to the classess preferred to teach page where they
                        can select the classes they prefer to teach.
                    </Text>
                </Pressable>
                </Modal>
            </TouchableOpacity>
            </View>
            <View style = {styles.viewStyle}>
            {/* Times Unable To Teach */}
            <TouchableOpacity
                mode = "contained"
                activeOpacity = {0.8}
                style = {[
                styles.buttonStyle,
                {
                    backgroundColor: buttonColor.color,
                    borderColor: buttonColor.borderColor,
                },
                ]}
                onPress = {TimesCT}
                onLongPress = {() => setModalTime(true)}
            >
                <Text style = {[styles.textStyle, { color: buttonColor.textColor }]}>
                    Times Unable To Teach
                </Text>
                <Modal
                    contentContainerStyle = {styles.modalStyle}
                    animationType = "slide"
                    transparent = {true}
                    visible = {timesCTModal}
                    onDismiss = {() => {
                        setModalTime(!timesCTModal);
                    }}
                >
                <Pressable
                    style = {styles.modalStyle}
                    onPress = {() => setModalTime(!timesCTModal)}
                >
                    <Text style = {styles.modalText}>
                        Brings the user to the times unable to teach page where they
                        can select the times they are unable to teach.
                    </Text>
                </Pressable>
                </Modal>
            </TouchableOpacity>
            {/* Days Preferred to Teach */}
            <TouchableOpacity
                mode = "contained"
                style = {[
                styles.buttonStyle,
                {
                    backgroundColor: buttonColor.color,
                    borderColor: buttonColor.borderColor,
                },
                ]}
                activeOpacity = {0.8}
                onPress = {DaysPT}
                onLongPress = {() => setModalDays(true)}
            >
                <Text style = {[styles.textStyle, { color: buttonColor.textColor }]}>
                    Days Preferred To Teach
                </Text>
                <Modal
                    contentContainerStyle = {styles.modalStyle}
                    animationType = "slide"
                    transparent = {true}
                    visible = {daysPTModal}
                    onDismiss = {() => {
                        setModalDays(!daysPTModal);
                    }}
                >
                <Pressable
                    style = {styles.modalStyle}
                    onPress = {() => setModalDays(!daysPTModal)}
                >
                    <Text style={styles.modalText}>
                        Brings the user to the days preferred to teach page where they
                        can select the days they prefer to teach.
                    </Text>
                </Pressable>
                </Modal>
            </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};

export default PreferenceFun;
