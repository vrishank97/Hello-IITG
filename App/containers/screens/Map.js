import React, { Component } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';

var map_source="../.../assets/img/iitg_map.png";

class Map extends Component{
	render(){
		return (
			<Image source={require(map_source)});
	}
}

export default Map;