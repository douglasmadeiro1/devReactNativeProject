import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/welcome'
import SignIn from '../screens/signin'
import UserRegister from '../screens/userRegister'
import Dashboard from '../screens/dashboard'
import Profile from '../screens/profile'
import DrawerRoutes from './drawer.routes'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="UserRegister"
                component={UserRegister}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Dashboard"
                component={DrawerRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}