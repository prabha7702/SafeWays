import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface IButtonProps{
    title:string,
    style:any,
    textStyle:any,
    handlePress:any
}

function Button(props:IButtonProps) {
    return (
        <TouchableOpacity style={props.style} onPress={props.handlePress}><Text style={{...styles.buttontext,...props.textStyle}}>{props.title}</Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttontext:{
        fontSize:24,
        fontWeight:700
    }
})

export default Button;