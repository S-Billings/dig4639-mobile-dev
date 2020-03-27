import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import Weather from "./Components/Weather/index.js"

class App extends React.Component{
  render(){
    return(
      <div>
        <Weather>
          
        </Weather>
      </div>
    );
  }
}

export default App;