// Import necessary libraries and components from React and React Native
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"; // Import core components from React Native
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient for creating gradient backgrounds
import { useNavigation } from "@react-navigation/native"; // Import useNavigation for navigation between screens
import { styles } from "../styles/Styles";

// Main functional component for the Verification screen
function Verification() {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object for screen navigation
  const [verificationCode, setVerificationCode] = useState(""); // State to hold the verification code input by the user

  // Function to handle the verification code submission
  const handleVerifyCode = () => {
    console.log("Verification code entered:", verificationCode); // Placeholder for code verification logic
    // navigation.navigate("NextScreen"); // Uncomment this when ready to navigate to the next screen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View style={{ flex: 1 }}>
        {/* Heading Section with Gradient Background */}
        <LinearGradient
          colors={["#000000", "#1c1c1c"]} // Linear gradient from black to a slightly lighter shade of black
          style={styles.gradientHeader}
        >
          <Text style={styles.headerText}>Verification</Text>
          <Text style={styles.subHeaderText}>
            Enter the 4-digit code sent to your email
          </Text>
        </LinearGradient>

        {/* White Container for the input and buttons */}
        <View style={styles.container}>
          <Text style={styles.inputLabel}>Verification Code</Text>
          <TextInput
            style={styles.codeInput}
            placeholder="Enter Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            maxLength={4}
          />
          <TouchableOpacity style={styles.actionButton} onPress={handleVerifyCode}>
            <Text style={styles.actionButtonText}>Verify Code</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Didn't receive the code?{" "}
            <TouchableOpacity onPress={() => console.log("Resend Code")}>
              <Text style={styles.resendLink}>Resend Code</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Verification;