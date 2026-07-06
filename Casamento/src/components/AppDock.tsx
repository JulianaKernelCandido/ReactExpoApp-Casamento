import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { BasicButton } from "./BasicButton";


export const AppDock = () => {
    return (
        <View style={style.buttons}>
            <BasicButton screen={"/"} text={"Convite"}>
                <Image style={style.image} source={require("../../assets/images/icons/house.svg")} />
            </BasicButton>

            <BasicButton screen={"invite"} text={"Confirmação"}>
                <Image style={style.image} source={require("../../assets/images/icons/invite.svg")} />
            </BasicButton>

            <BasicButton screen={"dog"} text={"Doação"}>
                <Image style={style.image} source={require("../../assets/images/icons/dog.svg")} />
            </BasicButton>

            <BasicButton screen={"shop"} text={"Sugestões"}>
                <Image style={style.image} source={require("../../assets/images/icons/shop.svg")} />
            </BasicButton>


        </View>

    );
}

const style = StyleSheet.create({
    buttons: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 34,
        height: 34,
    }
})
