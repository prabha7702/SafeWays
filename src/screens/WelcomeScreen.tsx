import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
    const Navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.imageBG} source={require('../assets/Ellipse.png')}>
                    <Image style={styles.image} source={require('../assets/Womens Equality Day-amico.png')} />
                </ImageBackground>
            </View>
            <View style={{ top:-80,gap: 12 }}>
                <Text style={styles.title}>SAFEWAY</Text>
                <Text style={styles.subtitle}>Start Your Daily Commute Safe & Secure</Text>
            </View>
            <Button style={styles.button} title="Get Started" handlePress={() => Navigation.navigate('signup' as never)} textStyle={{ color: '#000000' }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 200
    },
    title: {
        fontWeight: '700',
        fontSize: 36,
        textAlign: 'center'
    },
    subtitle: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center'
    },
    button: {
        top: -92,
        backgroundColor: '#D9D9D966',
        height: 64,
        width: '64%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    image: {
        width: 268,
        height: 268
    },
    imageBG:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height:420
    },
    imageContainer: {
        top: StatusBar.currentHeight ? StatusBar.currentHeight: 60, 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WelcomeScreen;