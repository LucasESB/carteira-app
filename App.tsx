import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';
import theme from './src/styles/theme';

import { useFonts, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="dark" translucent backgroundColor='transparent' />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
