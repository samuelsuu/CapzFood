import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/styles/Styles';
import Onboarding from './src/navigations/Onboarding';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    const hideSplashScreen = async () => {
      // Simulate some loading task or app initialization
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Hide the splash screen after the app is ready
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
