import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import Onboarding from "./Onboarding";
import Regs from "./Regs";
import HomeDrawer from "./HomeDrawer";
import { Text } from "react-native";
import RestaurantDetail from "../screens/RestaurantDetail";

const Stack = createNativeStackNavigator();

const appNavigation = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      MontserratBold: require("../../assets/font/Montserrat/static/Montserrat-Bold.ttf"),
    });
  };

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // Fallback while fonts are loading
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reg"
            component={Regs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeDrawer"
            component={HomeDrawer}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="RestaurantDetail"
            component={RestaurantDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default appNavigation;
