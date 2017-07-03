mport React, { Component } from 'react';
import {
	Text,
	View,
	processColor
} from 'react-native';

var Browser=require('react-native-browser');

class Webmail extends Component{
	render(){
		return(
			<View>
				Browser.open('https://webmail.iitg.ernet.in/src/login.php');
			</View>
		);	
	}
}

export default Webmail;
