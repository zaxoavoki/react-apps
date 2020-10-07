import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CInput = (props) => {
	return (
		<View>
			<Text style={styles.inputLabel}>{props.label}</Text>
			<TextInput
				style={styles.input}
				onChangeText={(text) => console.log(text)}
				value={props.value}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputLabel: {
		color: '#C9C9C9',
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
	},
	input: {
		backgroundColor: '#F3F3F3',
		borderRadius: 6,
		borderWidth: 0,
		marginBottom: 15,
		paddingLeft: 15,
		paddingRight: 15,
		fontFamily: 'Poppins-Regular',
		color: '#4f4f4f',
	},
});

export default CInput;
