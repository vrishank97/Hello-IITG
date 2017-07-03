import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Webmail')}
          title="Webmail"
        />
        <Button
          onPress={() => navigate('TimeTable')}
          title="Time Table"
        />
        <Button
          onPress={() => navigate('CampusMap')}
          title="Campus Map"
        />
        <Button
          onPress={() => navigate('BusTiming')}
          title="Bus Timing"
        />
      </View>
    );
  }

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Hello IITG',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});