import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import HomeAcesso from '../screens/home/HomeAcesso'
import Login from '../screens/controleUsuario/Login'
import EmpreedixTitulo from '../components/empreendix/EmpreendixTitulo';

const Tab = createBottomTabNavigator();

export default function TabRoutesPublica() {
    return (
        <Tab.Navigator screenOptions={{ headerTitle: () => <EmpreedixTitulo />, headerTitleAlign: 'center' }} initialRouteName='Home'>
            <Tab.Screen
                name="Home"
                component={HomeAcesso}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='log-in' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}

