import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Questions from "../components/questions";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Answer Questions Because I Had to Make Them</Text>
        <h4>All answers are anonymous</h4>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
