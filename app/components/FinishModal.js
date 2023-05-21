import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    BackHandler
} from 'react-native';
import { checkmarkIcon } from "../assets/images";

type ModalProps = {
    title: String,
    text: String,
    closeModal?: Function,
    playAgain?: Function,
    closeApp?: Boolean
}

const FinishModal = (props: ModalProps) => {
    const { title, text, closeModal, playAgain, closeApp } = props;

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Image
                    style={styles.icon}
                    source={checkmarkIcon}
                />

                <View style={styles.infoView}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>

                {
                    closeApp == true ?
                        <View style={{alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100%", marginTop: "3%"}}>
                            <TouchableOpacity onPress={playAgain}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Tekrar Oyna</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                                <View style={styles.buttonView}>
                                    <Text style={styles.buttonText}>Uygulamadan Çık</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        :
                        <TouchableOpacity onPress={closeModal}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Devam</Text>
                            </View>
                        </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FinishModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalContainer: {
        backgroundColor: "white",
        width: "94%",
        height: "60%",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 12,
        margin: 8
    },
    icon: {
        width: 125,
        height: 125
    },
    infoView: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: "5%",
        width: "94%"
    },
    titleText: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: "black",
        textAlign: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#232421",
        textAlign: "left",
        lineHeight: 21,
        marginTop: "2%"
    },
    buttonView: {
        backgroundColor: "green",
        paddingVertical: "3%",
        paddingHorizontal: "5%",
        borderRadius: 32,
        borderWidth: 1,
        borderColor: "black"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        color: "white",
        textAlign: "center"
    }
});