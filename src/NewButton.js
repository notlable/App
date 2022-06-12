import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

const NewButton =(props)=>{
    return(
        <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#0f0' },
          styles.button,
          {...props.style}
        ]}
        // Jeden
        onLongPress={props.onPressFunction}
        delayLongPress={300}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      >
        <Text style={styles.text}>
          {/* Dwa */}
          {props.title}
        </Text>
      </Pressable>
    )
}

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
    button:{
      width:150,
      height: 50,
      alignItems: 'center',
    },
  });
export default NewButton;