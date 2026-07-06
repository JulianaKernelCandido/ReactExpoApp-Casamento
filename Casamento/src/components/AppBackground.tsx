import React from "react";
import { StyleSheet, View } from "react-native";
import { AppDock } from "./AppDock";

interface IAppBackground {
    children?: React.ReactNode
}

export const AppBackground = (props: IAppBackground) => {
    return(
        <View style = { StyleAppBackground.Background }>
            <AppDock></AppDock>
            <View style = {StyleAppBackground.Sheet }>
                {props.children}
            </View>
        </View>
    );
}

const StyleAppBackground = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: "#c3f1be"
    },
    Sheet: {
        alignItems: 'center',
        borderLeftWidth: 6,
        borderColor: '#645512',
        padding: 20,
        flex: 1,
        borderTopEndRadius : 50,
        borderTopStartRadius : 50,
        backgroundColor: "#eeffef"
    }
})