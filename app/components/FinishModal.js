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
                <View>
                    <Text>{title}</Text>
                    <Text>{text}</Text>
                </View>

                <TouchableOpacity onPress={closeModal}>
                    <View>
                        <Text>Devam</Text>
                    </View>
                </TouchableOpacity>
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
        height: "40%",
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
    text: {

    }
});