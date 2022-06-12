import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Header = (props)=>{
    return(
        <View style={StyleSheet.view}>
            <Text style={StyleSheet.text}>
                React Native First App
            </Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color: '#fff'
    }
})
export default Header;