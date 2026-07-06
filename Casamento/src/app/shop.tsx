import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppBackground } from '@/components/AppBackground';
import { useFonts } from 'expo-font';
import GiftList from '@/components/GiftFrame';



export default function ShopScreen() {
  const [fontsloaded] = useFonts({
    'WriteMachineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
    'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
  });

  return (
    <AppBackground>
      <Text style={{
        textAlign: 'center',
        fontFamily: 'CursiveFont',
        fontSize: 50,
        color: '#645512',
        marginBottom: 0
      }}>
        Lista de Presentes
      </Text>

      <Text style={{
        textAlign: 'center',
        fontFamily: 'WriteMachineFont',
        fontSize: 14,
        color: '#645512',
        marginBottom: 8
      }}>
        Á quem desejar fazer o envio direto as noivas:
      </Text>

      <Text style={{
        textAlign: 'center',
        fontFamily: 'WriteMachineFont',
        fontSize: 14,
        color: '#645512',
        
      }}>
        Rua Eduardo Romero, 70, jardim Anápolis{"\n"}Cep: 85905-182
      </Text>

      <Text style={{
        textAlign: 'center',
        fontFamily: 'WriteMachineFont',
        fontSize: 14,
        color: '#645512',
        marginBottom: 1
      }}>
        ___________________________
      </Text>

      <GiftList></GiftList>
    </AppBackground>
  );
}
