import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Dashboard from '../screens/dashboard';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Inicio'
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Perfil'
                }}
            />
        </Tab.Navigator>
    )
}