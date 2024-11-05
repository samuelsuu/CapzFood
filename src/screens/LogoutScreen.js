import React from 'react';
import { View, Text, Button } from 'react-native';

function LogoutScreen({ navigation }) {
  const handleLogout = () => {
    // Perform logout logic (clear tokens, redirect, etc.)
    alert("Logged out!");
    navigation.navigate("Signin"); // Navigate to the home screen or login screen after logout
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default LogoutScreen;
