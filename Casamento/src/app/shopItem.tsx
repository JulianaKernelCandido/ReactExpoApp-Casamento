import { AppBackground } from "@/components/AppBackground";
import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ShopItemScreen() {

    const [fontsloaded] = useFonts({
        'WriteMachineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
        'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
    });
    const { image, price, name, url, id } = useLocalSearchParams();

    return (
        <AppBackground>
            <ScrollView>
                <View
                    style={style.itemImageFrame}
                >
                    <Image
                        style={style.itemImage}
                        source={image.toString()}
                    />
                </View>
                <Text
                    style={style.itemName}
                >{name}</Text>
                <Text
                    style={style.itemPrice}
                >{price}</Text>
                <View
                    style={style.itemIdFrame}
                >
                    <Text
                        style={style.itemId}
                    >{id}</Text>
                </View>
                <View style={style.buttonFrame}>
                    <TouchableOpacity onPress={() => Linking.openURL(url.toString())}>
                        <View
                            style={style.button}
                        >

                            <Text
                                style={style.buttonText}
                            >Abrir na Shopee</Text>

                        </View>
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontFamily: 'WriteMachineFont',
                            color: '#645512',
                            fontSize: 22,
                            marginBottom: 10
                        }}
                    >_________________________</Text>

                    <Text
                        style={{
                            fontFamily: 'WriteMachineFont',
                            color: '#645512',
                            fontSize: 14,
                            textAlign: 'center'
                        }}
                    >Após a compra do produto, confirme sua compra por meio de uma mensagem com o número informado no canto superior esquerdo da foto do item</Text>

                    <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/qr/CCYHIXZ5XLNVC1")}>
                        <View
                            style={style.button}
                        >

                            <Text
                                style={style.buttonText}
                            >Confirmar Compra</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AppBackground>
    );
}

const style = StyleSheet.create({
    itemImageFrame: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImage: {
        marginTop: 5,
        width: 300,
        height: 300,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#645512',
    },
    itemName: {
        textAlign: 'center',
        marginTop: 10,
        color: '#645512',
        fontFamily: 'WriteMachineFont',
        fontSize: 18,
    },
    itemPrice: {
        marginTop: 10,
        fontFamily: 'WriteMachineFont',
        fontSize: 30,
        textAlign: 'center',
        color: '#a58b16'
    },
    itemId: {
        fontFamily: 'WriteMachineFont',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    itemIdFrame: {
        borderRadius: 100,
        width: 55,
        height: 55,
        backgroundColor: '#645512',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    button: {
        marginTop: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#645512',
        borderRadius: 100
    },
    buttonText: {
        fontFamily: 'WriteMachineFont',

        color: '#ffffff'
    },
    buttonFrame: {
        alignItems: 'center',

    }
})