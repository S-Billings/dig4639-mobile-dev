import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';

class App extends React.Component{
  render(){
    return(
      <View>
      <Card title = "Forecast"></Card>
      <Text>This is a card!</Text>
    </View>
    );
  }
}