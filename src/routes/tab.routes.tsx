import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconHome } from '../assets/icons/IconHome';
import { IconHomeActive } from '../assets/icons/IconHomeActive';
import { IconTransacao } from '../assets/icons/IconTransacao';
import { IconTransacaoActive } from '../assets/icons/IconTransacaoActive';
import { IconConfiguracao } from '../assets/icons/IconConfiguracao';
import { IconConfiguracaoActive } from '../assets/icons/IconConfiguracaoActive';

import { Home } from '../screens/Tab/Home/Home';
import { Transacoes } from '../screens/Tab/Transacoes/Transacoes';
import { Configuracao } from '../screens/Tab/Configuracao/Configuracao';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    paddingTop: 9,
                    paddingBottom: 9,
                    backgroundColor: '#FFF',

                    borderRadius: 35,
                    marginHorizontal: 10,
                    marginBottom: 10,
                },
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <IconHomeActive /> : <IconHome />
                    }
                }}
            />

            <Screen
                name='Transacoes'
                component={Transacoes}
                options={{
                    tabBarLabel: 'Transações',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <IconTransacaoActive /> : <IconTransacao />
                    }
                }}
            />

            <Screen
                name='Configuracao'
                component={Configuracao}
                options={{
                    tabBarLabel: 'Configuração',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <IconConfiguracaoActive /> : <IconConfiguracao />
                    }
                }}
            />
        </Navigator>
    )
}
