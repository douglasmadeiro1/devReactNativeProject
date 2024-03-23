import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="fadeInDown"
                    source={require('../../assets/logo.png')}
                    style={{ width: '50%', height: '100%' }}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Controle de treino e exercicios</Text>
                <Text style={styles.text}>Entre para comecar a utilizar</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}>

                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'lightgreen',
        justfyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: '5%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 28,
        marginBottom: 12,
    },
    text: {
        fontSize: 20,
        color: '#A1A1A1',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38A69D',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    }
})