import { AppBackground } from "@/components/AppBackground";
import { useFonts } from 'expo-font';
import { Text } from "react-native";

export default function DogScreen() {

  const space = 30;

  const [fontsloaded] = useFonts({
    'WriteMachineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
    'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
  });

  return (
    <AppBackground>
      <Text style={{
        fontFamily: 'CursiveFont',
        color: '#645512',
        fontSize: 50,
        marginBottom: -20,
        textAlign: 'center'
      }}>
        Um Pedido{"\n"}Com Amor
      </Text>
      <Text style={{
        fontFamily: 'WriteMachineFont',
        color: '#645512',
        fontSize: 20,
        marginBottom: 40,
        textAlign: 'center'
      }}>
        _____________________
      </Text>

      <Text style={{
        fontFamily: 'WriteMachineFont',
        color: '#645512',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: space
      }}>
        Se puder, traga 1kg de ração para cachorro 🐶
      </Text>

      <Text style={{
        fontFamily: 'WriteMachineFont',
        color: '#645512',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: space
      }}>
        Vamos doar tudo para pessoas que cuidam com carinho de caẽs abandonados
      </Text>

      <Text style={{
        fontFamily: 'WriteMachineFont',
        color: '#645512',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: space
      }}>
        Juntos, vamos espalhar ainda mais amor nesse dia tão especial!
      </Text>

      <Text style={{
        fontFamily: 'WriteMachineFont',
        color: '#645512',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center'
      }}>
        _____________________
      </Text>
      <Text style={{
        fontFamily: 'CursiveFont',
        color: '#645512',
        fontSize: 60,
        textAlign: 'center'
      }}>
        Carol & Dai
      </Text>

    </AppBackground>
  );
}

