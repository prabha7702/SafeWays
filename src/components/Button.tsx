import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface IButtonProps{
    title:string,
    style:any
}

function Button(props:IButtonProps) {
    return (
        <TouchableOpacity style={props.style} onPress={()=>alert("Hi")}><Text style={{...styles.buttontext,fontWeight:700}}>{props.title}</Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttontext:{
        fontSize:24,
        color:'#ffffff',
        fontWeight:700
    }
})

export default Button;