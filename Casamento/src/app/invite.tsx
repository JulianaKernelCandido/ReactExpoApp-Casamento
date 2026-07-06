import { AppBackground } from "@/components/AppBackground";
import { useFonts } from 'expo-font';
import { ScrollView, Text, View } from "react-native";

export default function InviteScreen() {
  const [fontsloaded] = useFonts({
    'WriteMachineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
    'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
  });

  return (
    <AppBackground>
      <ScrollView>
        <View>
          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'CursiveFont',
            fontSize: 60,
          }}>Confirmação{"\n"}de Presença</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 20,
            marginTop: -10
          }}>_____________</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 18,
            marginTop: 30
          }}>Por favor confirme sua presença até</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 30,
            marginTop: 5
          }}>30/08/2026</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 20,
          }}>____________________________</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'CursiveFont',
            fontSize: 40,
            marginTop: 20
          }}> - Contatos - </Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 18,
          }}>Carol: (45) 9-9994-2608</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 18,
          }}>Dai: (44) 9-9713-6212</Text>

          <Text style={{
            color: '#645512',
            textAlign: 'center',
            fontFamily: 'WriteMachineFont',
            fontSize: 14,
            marginTop: 30
          }}>Esperamos você para celebrarmos juntos esse dia tão especial!</Text>
        </View>
      </ScrollView>
    </AppBackground >
  );
}

