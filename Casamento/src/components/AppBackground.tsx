import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppDock } from "./AppDock";
import { CustomText } from "./CustomText";

interface IAppBackground {
    children?: React.ReactNode
}

export const AppBackground = (props: IAppBackground) => {
    return(
        <View style = { StyleAppBackground.Background }>

            <View style = { StyleAppBackground.Sheet }>

                <View style = { StyleAppBackground.WhiteSheet }>
                    {props.children}
                </View>

                <View style = { StyleAppBackground.Label }>
                    <CustomText
                        text = {"Carol & Dai"}
                        style = {"Borel"}
                    />
                </View>

            </View>

        </View>
    );
}

const StyleAppBackground = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: "#B0D5A2"
    },
    Sheet: {
        margin: 10,
        flex: 1,
        borderRadius: 25,
        backgroundColor: "#D1E9C8"
    },
    WhiteSheet: {
        padding: 6,
        margin: 10,
        flex: 1,
        borderRadius: 15,
        backgroundColor: "#FFFFFF"
    },
    Label: {
        alignItems: 'center'
    }
})