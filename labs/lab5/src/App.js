import React from 'react';
// import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import Weather from "./Components/Weather";

class App extends React.Component{
  render(){
    return(
      <div>
        <Card>
          <Weather>

          </Weather>
        </Card>
      </div>
    );
  }
}

export default App;