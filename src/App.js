import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
  ToastAndroid,
  Image,
  ImageBackground,
} from 'react-native';
import NewButton from './NewButton';
import Header from './Header';

 
const App = () => {
 
  const [name, SetName] = useState('');
  const [submit,setSubmit] = useState(false);

  const onPressHandler = ()=>{
    if(name.length >3){
      setSubmit(!submit);
    }else{
      // Alert.alert('Warning!', 'The name must be longer than 3 characters')
      ToastAndroid.show('The name must be longer than 3 characters', ToastAndroid.LONG)
    }
  }
 
  return (
    <ImageBackground style={styles.body}
    source={{uri:'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg'}}>
      
      <Header/>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='write name'
        onChangeText={(value) => SetName(value)}
        // secureTextEntry
        // placeholder='e.g. John'
        // multiline
        // keyboardType='numeric'
        // maxLength={6}
        // value={'Tojest text'}
        // editable={false}
         // disabled
      />
      {/* <TouchableOpacity
      style={styles.button}
      onPress={onPressHandler}
      >
        <Text style={styles.text}>
          {submit ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}

        {/* <TouchableHighlight
      style={styles.button}
      onPress={onPressHandler}
      underlayColor = {'#ddd'}
      >
        <Text style={styles.text}>
          {submit ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight> */}
     
     
      <NewButton title={submit ? "Clear" :
      "Submit"} onPressFunction={onPressHandler}
        style={{}}
      />
      {
      submit ? <Header style={styles.body}>
      <Text style={styles.text}>
        You are registered as {name}</Text>
        <Image
        // source={{uri:'https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg'}}
        source={require('./assets/done.png')}
        style={styles.image}
        resizeMode={'stretch'}
        /> 
        </Header> :
        <Image
        source={require('./assets/error.png')}
        style={styles.image}
        resizeMode={'stretch'}
        />
      }
    </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  button:{
    width:150,
    height: 50,
    alignItems: 'center',
  },
  image:{
    width:100,
    height: 100,
    margin:10,
  },
});
 
export default App;