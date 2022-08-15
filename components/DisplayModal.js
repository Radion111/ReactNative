
import React from 'react'
import { Modal, View, Image, Text, StyleSheet,Button,TouchableHighlight} from 'react-native';

export default function DisplayModal ({display}) {


const Auditfunc=()=>{
  display=false;
  alert("Должно было сработать ")
}
   
    return(
    
      <Modal visible={display} animationType = "slide" height="300px" style={styles.container}>
        <View>
          <TouchableHighlight onPress={Auditfunc} underlayColor="white">
            <View style={styles.plusobgortka}>
              <Text style={styles.plus}>+</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Modal>

      )
}


const styles = StyleSheet.create({
  container:{
    height:"300px",
    backgroundColor:"green",
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusobgortka: {
    width: 70,
    height: 70,
    backgroundColor: '#163ac3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop:30,
  },
  
  plus: {
    fontSize: '30px',
    color: 'white',
  },
})


