/**
 * lo?er application based on React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {Link, NativeRouter, Route} from 'react-router-native';

const App: () => React$Node = () => {
	return (
		<NativeRouter>
			<View>
				<View>
					<Link to="/" underlayColor="#f0f4f7">
						<Text>Home</Text>
					</Link>
					<Link to="/sign_up" underlayColor="#f0f4f7">
						<Text>Sign up</Text>
					</Link>
				</View>

				<Route exact path="/" component={Home} />
				<Route path="/sign_up" component={SignUp} />
			</View>
		</NativeRouter>
	);
};

export default App;
