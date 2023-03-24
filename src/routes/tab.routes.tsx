import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../screens/Tab/Home/Home';
import { Transacoes } from '../screens/Tab/Transacoes/Transacoes';

import theme from '../styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.COLORS.GRAY_BLUE,
                tabBarActiveTintColor: theme.COLORS.BLUE,
                tabBarStyle: {
                    height: 70,
                    paddingTop: 9,
                    paddingBottom: 9,
                    backgroundColor: '#FFF',
                }
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'card' : 'card-outline'}
                            size={30}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name='Transacoes'
                component={Transacoes}
                options={{
                    tabBarLabel: 'Transações',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'card' : 'card-outline'}
                            size={30}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
