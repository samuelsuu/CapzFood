import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstScreen from '../screens/onboarding/FirstScreen';
import SecondScreen from '../screens/onboarding/SecondScreen';
import ThirdScreen from '../screens/onboarding/ThirdScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Onboarding

const styles = StyleSheet.create({})