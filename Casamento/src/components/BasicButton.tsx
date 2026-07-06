import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IBasicButton {
    children?: React.ReactNode;
    screen?: String;
    text?: String;
}

export const BasicButton = (props: IBasicButton) => {
    const router = useRouter()


   


    return (
        <TouchableOpacity
            onPress={() => router.navigate(props.screen as never)}>
            <View style={style.background}>
                {props.children}
            </View>
            <Text
                style = {style.bottomText}
            >{props.text}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    background: {

        borderLeftWidth: 4,
        borderColor: '#645512',
        marginHorizontal: 10,
        width: 54,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eeffef"
    },
    text: {
        fontFamily: 'WriteMachineFont',
        fontSize: 14,
        color: '#645512',
    },
    bottomText: {
        marginTop: 1,
        color: '#645512',
        fontWeight: 'bold',
        fontFamily: 'WriteMachineFont',
        textAlign: 'center',
        fontSize: 12
    }

})