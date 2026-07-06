import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GiftList() {
    const [gifts, setGifts] = useState([]);

    const router = useRouter()

    const [fontsloaded] = useFonts({
        'WriteMachineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
        'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
    });


    useEffect(() => {
        fetch('https://sheetdb.io/api/v1/pinhdap8zb2ot')
            .then(response => response.json())
            .then(data => {
                setGifts(data);

            })
            .catch(err => console.error("Erro ao buscar dados:", err));
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        <View>
            <TouchableOpacity onPress={() => router.push({
                pathname: '/shopItem',
                params: {
                    image: item.image,
                    name: item.title,
                    price: item.preco,
                    url: item.url,
                    id: item.id
                }
            })}>
                <View style={style.itemBox}>
                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 25 }} />
                    <View style={style.textBox}>
                        <Text style={{ width: 190, height: 50, color: '#645512', fontFamily: 'WriteMachineFont', fontSize: 13 }}>{item.title}</Text>
                        <Text style={{ marginTop: 5, color: '#a58b16', fontFamily: 'WriteMachineFont', fontSize: 18 }}>{item.preco}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={gifts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}


const style = StyleSheet.create({
    itemBox: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: "#d5f1d6",
        borderRadius: 30,
        width: 320,
        height: 110,
        marginTop: 10,
        marginBottom: 10
    },
    textBox: {
        padding: 5,
        marginLeft: 10
    },
})
