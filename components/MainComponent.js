import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button,
  Modal,
  TextInput,SafeAreaView
} from 'react-native';
import { useEffect, useState } from 'react';

// модальное окно
import DisplayModal from './DisplayModal';

// импорт хедера
import Header from './HEader';

export default function MainComponent() {
  // первые данные

const [maintText,SetmainText]=useState("");

const [descText,SetdescText]=useState("");

  const [myarray, Setmyarray] = useState([
    {
      name: 'you need do home work',
      opuc: 'HW',
      id: (Math.random() * 10).toString(36),
      Classname: false,
    },
    {
      name: 'Working on Js and React ',
      opuc: 'HW',
      id: (Math.random() * 10).toString(36),
      Classname: false,
    },
    {
      name: 'Working on Js and React ',
      opuc: 'HW',
      id: (Math.random() * 10).toString(36),
      Classname: false,
    },
  ]);
  //  Добавления флага для массива
  let userData = {
    name: maintText,
    opuc: descText,
    id: (Math.random() * 10).toString(36),
    Classname: false,
  };
  const auditData=()=>{
   
  }
  // Добавления елемента react native
  const Adding = () => {
        SetdescText("");
        SetmainText("");
    return Setmyarray([...myarray, userData]);
  };
  // Удаления елемента react native
  const Delete = (idenfication) => {
    return Setmyarray([...myarray.filter((item) => item.id !== idenfication)]);
  };
  // изменения класа в react native
  const ChangeInfo = () => {
    alert('Изменили названия');
  };
 


  // Переменая для всплития
  // Добавляем вспливающую модалку при клике на кнопку
  const [flag, setflag] = useState(false);
  const Auditfunc = () => {
    // Должно было сработать
    setflag(true);
  };

  return (
    <View style={styles.main}>
      <View>
       <Text> Dark theme</Text>
      </View>
      <Header ar={myarray} />
    
      <View style={styles.flexitem}>

       <View>
          <SafeAreaView>

            <TextInput
            style={styles.input}
            placeholder="Main information"
            keyboardType="text"
            autoCorrect={true}
            onChangeText={SetmainText}
            value={maintText}
            />

            <TextInput
              style={styles.input}
              placeholder="Description information"
              keyboardType="text"
              autoCorrect={true}
              onChangeText={SetdescText}
              value={descText}
            />

          </SafeAreaView>
       </View>

      
       <View>
          <TouchableHighlight onPress={Adding} underlayColor="black">
            <View style={styles.plusobgortka}>
              <Text style={styles.plus}>+</Text>
            </View>
          </TouchableHighlight>
       </View>
      
    </View>
    
      <View style={styles.array}>
        {myarray.map((item) => (
          <View style={styles.blocin} key={item.id}>
            <TouchableHighlight
              onPress={() => {
                ChangeInfo();
              }}
              underlayColor="black">
              <View>
                <Text style={styles.name}> {item.name} </Text>
                <Text style={styles.opuc}> {item.opuc} </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                Delete(item.id);
              }}
              underlayColor="black">
              <View style={styles.mnogut}>
                <Text style={styles.umnogenia}>×</Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
      <View>
      
        <DisplayModal display={flag} />
      </View>
    

  

    </View>
  );
}

const styles = StyleSheet.create({

  flexitem:{
    marginTop:40,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  // Input
  input:{
    borderRadius:10,
    height: 40,
    margin: 12,
    color:"black",
    width:240,
    backgroundColor:"white",
    borderWidth: 1,
    padding: 10,

  },




  // ITems
  blocin: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    padding: 3,
  },
  opuc: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'gray',
    padding: 3,
  },

  main: {
    marginTop: 15,
    marginLeft: 20,
  },

  // icon: {
  //   color:"#075be3",
  //   fontSize:36,
  //   fontWeight:"light",
  //   borderRadius:14,
  //   textAlign:"center",
  // },

  // заметки для Умножения
  mnogut: {
    width: 50,
    height: 50,
    backgroundColor: '#3d3636',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  umnogenia: {
    fontSize: '28px',
    color: 'white',
  },
  // Заметки для плюса
  plusobgortka: {
    width: 70,
    height: 70,
    backgroundColor: '#163ac3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  plus: {
    fontSize: '30px',
    color: 'white',
  },
});
