import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { signOut, getAuth } from 'firebase/auth';
import TabRoutes from './tab.routes';
import { initializeApp } from 'firebase/app';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import firebaseConfig from '../services/firebase-config';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const handleSignOut = () => {
        setLoadingAuth(true);
        signOut(auth)
            .then(() => {
                console.log('Deslogado com sucesso!')
                navigation.navigate('SignIn')
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
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="Dash"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerlabel: 'inicio'
                }}
            />
            <Drawer.Screen
                name="Log-Out"
                component={handleSignOut}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="log-out" color={color} size={size} />,
                    drawerlabel: 'inicio'
                }}
            />
        </Drawer.Navigator>
    )
}