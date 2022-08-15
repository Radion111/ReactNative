
import * as React from 'react';
import { Text, View, StyleSheet ,ScrollView } from 'react-native';
import Constants from 'expo-constants';

import {MaterialCommunityIcons} from '@expo/vector-icons';
// You can import from local files

// add files MainComponent.
import MainComponent  from "./components/MainComponent"
// or any pure javascript modules available in npmd
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container }>
 <ScrollView>
     
       
       <MainComponent/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    backgroundColor: 'black',
  
    padding: 8,
  },
  
});
