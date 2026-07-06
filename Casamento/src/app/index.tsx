import { AppBackground } from "@/components/AppBackground";
import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [fontsloaded] = useFonts({
    'WriteMaczineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
    'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
  });

  return (
    <AppBackground>
      <ScrollView>
        <View style={style.container}>

          <Text style={{
            marginTop: 12,
            fontFamily: 'CursiveFont',
            color: '#645512',
            fontSize: 64
          }}>Carol & Dai </Text>

          <Text style={{
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            fontSize: 20,
            marginTop: -10
          }}>
            ________________</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            marginTop: 20,
          }}> É com grande alegria que convidamos você para celebrar a nossa união</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',

            color: '#645512',
            fontSize: 20,
            marginTop: 20,
          }}>07 de Novembro de 2026</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            fontSize: 18,
            marginTop: -16
          }}>______</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',

            color: '#645512',
            fontSize: 16,
            marginTop: -2,
          }}>As 17h30</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            fontSize: 18,
            marginTop: -18
          }}>______</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'CursiveFont',
            color: '#645512',
            fontSize: 40,
            marginTop: 20
          }}>- Local -</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            fontSize: 20,
          }}>Assermuto</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'CursiveFont',
            color: '#645512',
            fontSize: 20,
            marginTop: -16
          }}>_______</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            marginTop: 4
          }}>Av. Nossa Senhora de Fátima</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            marginTop: 4
          }}>Jardim Anápolis - Toledo/PR</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            marginTop: 20,
            fontSize: 20
          }}>____________________________</Text>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            color: '#645512',
            marginTop: 30
          }}>Após a cerimônia, os convidados serão
            Recebidos no salão do mesmo local, onde brindaremos
            e celebraremos nosso amor e nossa união com muita
            festa e animação

          </Text>
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
})