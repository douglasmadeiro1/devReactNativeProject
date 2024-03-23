import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../services/firebase-config';
import { signOut, getAuth } from 'firebase/auth';

export default function Profile() {
    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Tela de configuracao do perfil</Text>
            </View>
            <View style={styles.container}>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'lightblue',
    },
    containerHeader: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38A69D',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    buttonRegisterText: {
        color: '#A1A1A1'
    },
    homeButtonContainer: {
        alignContent: 'left',
        paddingStart: '5%',
        marginTop: '5%'
    },
    homeButton: {
        width: '20%',
    },
})