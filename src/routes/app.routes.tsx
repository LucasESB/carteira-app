import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from './tab.routes';
import { ReceitaDespesa } from '../screens/ReceitaDespesa/ReceitaDespesa';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName='TabRoutes'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name='TabRoutes' component={TabRoutes} />
            <Screen name='ReceitaDespesa' component={ReceitaDespesa} />
        </Navigator>
    )
}