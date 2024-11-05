import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/homeScreen";
import LogoutScreen from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
  // Example: Number of messages (you can replace this with dynamic data)
  const messageCount = 3;

  return (
    <Drawer.Navigator
      initialRouteName="Home"

      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={24} color="blue" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => alert("Message Icon Pressed")} style={{ position: 'relative', marginRight: 15 }}>
            <Ionicons name="mail" size={24} color="blue" />
            {messageCount > 0 && (
              <View style={{
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'black',
                borderRadius: 8,
                width: 16,
                height: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ color: 'white', fontSize: 12 }}>{messageCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        ),


        drawerStyle: {
          backgroundColor: '#3a3a3a', // Change the background color of the drawer
          width: 200, // Optionally adjust drawer width
        },
        drawerLabelStyle: {
          color: '#ffffff', // Customize text color
          fontSize: 16, // Customize text size
          fontWeight: 'bold', // Customize text style
        },

      })}

      
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          drawerLabel: 'Home', // Custom label for Home
        }}
      />
      <Drawer.Screen 
        name="Logout" 
        component={LogoutScreen} 
        options={{
          drawerLabel: 'Logout', // Custom label for Logout
        }}
      />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
