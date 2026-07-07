import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface ICustomText {
	text?: String;
	style?: String;
}

export const CustomText = (props: ICustomText) => {
	const [fontsloaded] = useFonts({
    	'WriteMachineFont': require('../fonts/Merriweather_24pt-Italic.ttf'),
    	'CursiveFont': require('../fonts/GreatVibes-Regular.ttf')
  	});


	switch(props.style){
		case "Regular":
			return(
				<Text style = {style.RegularText}>
					{props.text}
				</Text>
			);
			break;

	// - - - - - - - - - - - - - - - - - - - - - - - -

		case "Cursive":
			return(
				<Text style = {style.CursiveText}>
					{props.text}
				</Text>
			);
			break;

	// - - - - - - - - - - - - - - - - - - - - - - - -

		case "BigCursive":
			return(
				<Text style = {style.BigCursiveText}>
					{props.text}
				</Text>
			);
			break;

	}
}

const style = StyleSheet.create({
	CursiveText: {
        fontFamily: 'CursiveFont',
        color: '#645512',
        fontSize: 24
	},
	RegularText: {
        fontFamily: 'WriteMachineFont',
        color: '#645512',
        fontSize: 24
	},
	BigCursiveText: {
        fontFamily: 'CursiveFont',
        color: '#645512',
        fontSize: 64
	},
})