import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

function WelcomeScreen(props:any) {
    return (
        <View style={styles.container}>
            <View style={{top:-40,gap:12}}>
                <Text style={styles.title}>SAFEWAY</Text>
                <Text style={styles.subtitle}>Start Your Daily Commute Safe & Secure</Text>
            </View>
            <Button style={styles.button} title="Get Started"></Button>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'linear-gradient(179.97deg, #79B669 61.04%, rgba(121, 182, 105, 0.91) 99.97%)',
        flex:1,
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'center',
        gap:200
    },
    title:{
        fontWeight:'700',
        fontSize:36,
        color:'#ffffff',
        textAlign:'center'
    },
    subtitle:{
        fontWeight:'700',
        fontSize:16,
        color:'#ffffff',
        textAlign:'center'
    },
    button:{
        top:-60,
        backgroundColor: '#D9D9D966',
        height:64,
        width:263,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    }
    
})

export default WelcomeScreen;