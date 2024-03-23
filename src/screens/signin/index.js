import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth';
import firebaseConfig from '../../services/firebase-config';
import DrawerRoutes from '../../routes/drawer.routes'

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const handleSignIn = () => {
        setLoadingAuth(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('logado com sucesso!')
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('Dashboard')
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
            .finally(() => {
                setLoadingAuth(false);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.homeButtonContainer}>
                <TouchableOpacity
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Pagina inicial</Text>
                </TouchableOpacity>
            </View>
            <Animatable.View animation="fadeIn" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo!</Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput onChangeText={(text) => setEmail(text)} placeholder='Digite o email' style={styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput onChangeText={(text) => setPassword(text)} placeholder='Digite a senha' style={styles.input}
                />
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    {loadingAuth ? (
                        <ActivityIndicator
                            size={24}
                            color={'#FFF'}
                        />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('UserRegister')}>
                    <Text style={styles.buttonRegisterText}>Criar nova conta</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    containerHeader: {
        marginTop: '14%',
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

