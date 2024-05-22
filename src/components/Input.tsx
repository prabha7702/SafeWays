import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Image } from 'react-native';

function Input(props:any) {
    return (
        <View style={styles.container}>
            <Image
            source={props.icon}
            style={styles.icon}
          />
            <TextInput style={styles.input} {...props} placeholderTextColor='#ffffff'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#66805FF5',
        width:'88%',
        height:48,
        borderRadius:12,
        color:'#ffffff',
        paddingLeft:52,
    },
    icon:{
        height:20,
        width:20,
        left:36,
        zIndex:1
    }
})

export default Input;