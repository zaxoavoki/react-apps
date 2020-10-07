import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CButton = (props) => {
	const combined = Object.assign({}, defaultStyles.btn, props.style);
	return (
		<View
			style={Object.assign(
				combined,
				props.outline ? styles.outline_btn : styles.btn,
			)}>
			<Text
				style={props.outline ? styles.outline_btnText : styles.btnText}>
				{props.title || 'Button'}
			</Text>
		</View>
	);
};

const defaultStyles = StyleSheet.create({
	btn: {
		padding: 18,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		marginBottom: 10,
		flex: 1,
	},
});

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#b388eb',
	},
	outline_btn: {
		backgroundColor: 'transparent',
		borderColor: '#b388eb',
		borderWidth: 1,
	},
	outline_btnText: {
		color: '#b388eb',
		fontFamily: 'Poppins-Regular',
	},
	btnText: {
		color: '#fff',
		fontFamily: 'Poppins-Regular',
	},
});

export default CButton;
