import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';

function SigninScreen() {
    const Navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/City girl-amico-Login.png')} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input placeholder='EMAIL' icon={require('../assets/icons/carbon_email.png')}/>
                    <Input placeholder='PASSWORD' icon={require('../assets/icons/solar_lock-password-outline.png')} secureTextEntry/>
                    <TouchableOpacity style={styles.forgot}><Text style={{ color: '#ffffff', fontWeight: 500 }} onPress={() => Navigation.navigate('signup' as never)}>Forget Password?</Text></TouchableOpacity>
                </View>
                <Button style={styles.button} textStyle={{ color: '#ffffff' }} title="Sign In" handlePress={() => Navigation.navigate('signup' as never)}></Button>
                <Text style={{ color: '#ffffff' }}>Start Your Daily Commute Safe & Secure</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 200
    },
    formContainer: {
        backgroundColor: '#719567F5',
        width: '100%',
        flex: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputContainer: {
        width: '100%',
        // flex: 1,
        gap: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        // top: -92,
        backgroundColor: '#66805FE0',
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: '#ffffff',
        marginTop:-60
    },
    image: {
        width: 268,
        height: 268,
        marginTop: 168
    },
    imageContainer: {
        top: StatusBar.currentHeight ? StatusBar.currentHeight : 60,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 20
    },
    forgot: { 
        alignSelf: 'flex-start', 
        marginLeft: '8%', 
        marginTop: -12 
    }
})

export default SigninScreen;