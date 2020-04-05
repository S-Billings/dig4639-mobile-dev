import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

class FlatListQuestions extends Component{
    userPoints=0;
    render(){
        return(
            <View style={styles.container}>
                data={[
                    {key: "Are you enjoying yourself yet??"}, 
                    <Button
                        onPress = {this.userPoints +1}
                        title = "Yes"
                        />,
                    <Button
                        onPress = {this.userPoints -1}
                        title = "No"
                        />,
                    {key: "Can you touch your tongue on your elbow?"},
                    <Button
                        onPress = {this.userPoints +1}
                        title = "Yes"
                        />,
                    <Button
                        onPress = {this.userPoints -1}
                        title = "No"
                        />,
                    {key: "What is your favorite type of Fruit?"},
                    <Button 
                        onPress ={this.userPoints +1}
                        title ="Pear"
                    />,
                    <Button
                        onPress = {this.userPoints +2}
                        title = "Orange">
                    </Button>,

                    <Button
                        onPress = {this.userPoints +3}
                        title= "Cherry">

                    </Button>,
                    <Button
                        onPress={this.userPoints+4}
                        title="Apple"></Button>,
                    <Button
                    onPress={this.userPoints+5}
                    title="Peach"></Button>,

                    {key: "Are you a early bird or a night owl?"},
                    <Button 
                    onPress={this.userPoints+1}
                    title="Early Bird"/>,
                    <Button
                    onPress= {this.userPoints+1}
                    title="Night owl"></Button>,

                    {key: "Did you have water today?"},
                    <Button
                        onPress = {this.userPoint +1}
                        title = "Yes"
                        />,
                    <Button
                        onPress = {this.userPoint -1}
                        title = "No"
                        />,

                    {key: "Have you had a meal today?"},
                    <Button
                        onPress = {this.userPoint +1}
                        title = "Yes"
                        />,
                    <Button
                        onPress = {this.userPoint -1}
                        title = "No"
                        />,
                    {key: "How long can you hold your breath?"},

                        <Button 
                        onPress={this.this.userPoint +5}
                        title=">3 minutes"/>,
                        <Button 
                        onPress={this.this.userPoint +8}
                        title="<5 minutes"/>,
                        <Button 
                        onPress={this.this.userPoint +0}
                        title="<8 minutes"/>,
                        <Button 
                        onPress={this.this.userPoint +2}
                        title=">10 seconds"/>,
                        
                    {key: "Do you play video games?"},
                    {key: "Do you know why Rachel took her off the mf schedule?"},
                    {key: "Have you tried that whipped coffee?"},
                    

                ]}
                renderItem={
                    ({item,index})=> <Text style={styles.item}>{index+1}.{item.key}</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 5 ,
        margin: 10,
        border: 10.5 ,
        borderStyle: hidden,
        backgroundColor: rgb(106, 90, 205),

    },

    item:{
        padding: 5,
        fontStyle: monospace,
        fontFamily: Courier,
        color: rgb(255,255,240),

    }
})

export default FlatListQuestions;