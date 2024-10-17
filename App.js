
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

import React, { useState, useEffect } from "react"; // Import necessary hooks from React
import Regs from "./navigations/Regs"; // Import the 'Regs' component, presumably the main screen of your app

import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import a wrapper to enable gesture handling in React Native
import { NavigationContainer } from "@react-navigation/native"; // Import navigation container for managing app navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Import stack navigator for screen-to-screen navigation
import * as Font from "expo-font"; // Import the Expo Font library for custom font loading

// Create a Stack navigator instance
const Stack = createNativeStackNavigator();

export default function App() {
  // Define a function to load custom fonts asynchronously
  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require("./assets/font/Montserrat/static/Montserrat-Bold.ttf"), // Load 'Montserrat' font (adjust path as needed)
      Montserrat: require("./assets/font/Montserrat/static/Montserrat-Light.ttf")
    });
  };

  // State variable to track font loading status
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect hook to load fonts when the component mounts
  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true)); // After loading, set `fontsLoaded` to true
  }, []);

  // Conditionally render nothing until fonts are fully loaded
  if (!fontsLoaded) {
    return null; // Ensures app doesn't display partially loaded text
  }

  // Main app render: wraps the navigation setup in a GestureHandlerRootView
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Reg" // Route name for this screen
            component={Regs} // Specifies the component to render for this screen
            options={{ headerShown: false }} // Disables the header for a full-screen effect
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
