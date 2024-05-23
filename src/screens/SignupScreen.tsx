import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';

function SignupScreen() {
    const Navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/City girl-amico.png')} />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input placeholder='FULL NAME' icon={require('../assets/icons/lets-icons_user.png')}/>
                    <Input placeholder='EMAIL' icon={require('../assets/icons/carbon_email.png')}/>
                    <Input placeholder='PASSWORD' icon={require('../assets/icons/solar_lock-password-outline.png')} secureTextEntry/>
                    <Input placeholder='CONFIRM PASSWORD' icon={require('../assets/icons/solar_lock-password-outline.png')} secureTextEntry/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} textStyle={{ color: '#ffffff' }} title="Sign Up" handlePress={() => Navigation.navigate('home' as never)}></Button>
                    <View style={styles.textContainer}>
                        <Text style={{ color: '#ffffff' }}>Already have an account?</Text>
                        <TouchableOpacity><Text style={{ color: '#ffffff', fontWeight: 500 }} onPress={() => Navigation.navigate('signin' as never)}>Sign In</Text></TouchableOpacity>
                    </View>
                </View>
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
        alignItems: 'center'
    },
    inputContainer: {
        width: '100%',
        flex: 2,
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
        color: '#ffffff'
    },
    buttonContainer: {
        width:'100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textContainer: {
        flexDirection: 'row',
        gap: 4
    },
    image: {
        width: 268,
        height: 268,
        marginTop: 160
    },
    imageContainer: {
        top: StatusBar.currentHeight ? StatusBar.currentHeight : 60,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 20
    }
})

export default SignupScreen;