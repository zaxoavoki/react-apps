import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CButton from './CButton';
import CInput from './CInput';

const SignUp = (props) => {
	return (
		<>
			<StatusBar barStyle="default" backgroundColor="#b388be" />
			<ScrollView style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>lo?er</Text>
					<Text style={styles.subtitle}>Create account</Text>
				</View>

				<CInput label="Name:" value="John Doe" />
				<CInput label="Email:" value="john_doe@gmail.com" />
				<CInput label="Password" value="********" />

				<View style={styles.checkBox}>
					<CheckBox
						disabled={false}
						value={true}
						onValueChange={(newValue) => {}}
					/>
					<Text style={styles.secondary}>
						I agree with terms and privacy
					</Text>
				</View>

				<CButton title="Sign up" outline={false} style={styles.btn} />
				<View style={styles.additionalButtons}>
					<CButton
						outline={true}
						title="Sign in"
						style={{marginRight: 5}}
					/>
					<CButton
						outline={true}
						title="Google OAuth"
						style={{marginLeft: 5}}
					/>
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Poppins-Thin',
		fontSize: 60,
		marginBottom: -10,
		color: '#b388eb',
	},
	subtitle: {
		fontFamily: 'Poppins-Light',
		fontSize: 25,
		color: '#f7aef8',
	},
	additionalButtons: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch',
	},
	checkBox: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	secondary: {
		fontFamily: 'Popping-Regular',
		fontSize: 13,
		color: '#979797',
		paddingBottom: 1,
	},
});

export default SignUp;
