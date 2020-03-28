import React from "react";
import {View, Text} from "react-native";
import "./index.css";

class Weather extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            periods:[]
        };
    }
    componetDidMount(){
        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast").then(res=>res.json()).then((result)=>{
            let periods = result.props.periods;
            
            this.setState({
                periods: periods
            });

        })
        .catch((error)=>{console.log(error)});
    }
    render(){
        return(
        <View>{
            this.state.periods.map((value,index)=>{
                return <View key={index}>
                    <Text>
                        Temperature{value.temperature}{value.temperatureUnit}
                    </Text>
                    <Text>{value.detailedForecast}</Text>


                </View>;
            })
            }</View>
        );
    }
}
export default Weather;