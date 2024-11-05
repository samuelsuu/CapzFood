import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // For the gradient background
import { useNavigation } from "@react-navigation/native"; // Navigation between screens
import { styles } from '../styles/Styles'; // Import external styles

function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    console.log("Send code to:", email);
    // Add navigation to next screen if required
    // navigation.navigate("NextScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View style={{ flex: 1 }}>
        <LinearGradient colors={["#000000", "#1c1c1c"]} style={styles.gradientHeader}>
          <Text style={styles.headerText}>Forgot Password</Text>
          <Text style={styles.subHeaderText}>
            Please sign in to your existing account
          </Text>
        </LinearGradient>

        <View style={styles.container}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.actionButton} onPress={handleSendCode}>
            <Text style={styles.actionButtonText}>Send Code</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Remember your password?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.signInLink}>Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ForgotPassword;