import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {useEffect,useState} from "react";






export default function Header({ar}) {
let data =new Date();
let today=data.getDate();
let toMounth=data.toLocaleString('eng', { month: 'long' })
let toYear=data.getFullYear();

  return (
    <View style={styles.container}>
    <Text style={styles.data}>{toMounth} {today }, {toYear}</Text>
     <Text style={styles.datacolor}>incomplited   {ar.length} complited</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,   
    marginLeft:20,
  },
  datacolor:{
    fontSize:20,
    color:"gray",
  },
  data:{
   color:"white",
   fontSize:28,
   fontWeight:"bold",
  },
});
