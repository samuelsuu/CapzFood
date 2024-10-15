import React, { useState } from "react"; // Importing React and useState hook for state management
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Image,  // Importing essential React Native components for building the UI
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Importing LinearGradient for gradient backgrounds
import { useNavigation } from "@react-navigation/native"; // For navigation between screens
import { Ionicons } from "@expo/vector-icons"; // Using Ionicons for icon support
import { styles } from '../src/styles/Styles'; // Import external stylesheet

function Signin() {
    const navigation = useNavigation(); // Initialize navigation hook to move between screens
  // State hooks for managing user input, password visibility, and "Remember Me" toggle
  const [usernameOrEmail, setUsernameOrEmail] = useState(""); // User's email or username
  const [password, setPassword] = useState(""); // User's password
  const [rememberMe, setRememberMe] = useState(false); // Remember Me toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Password visibility toggle

  // Placeholder function for social login (Facebook)
  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
  };

  // Placeholder function for social login (Twitter)
  const handleTwitterLogin = () => {
    console.log("Login with Twitter");
  };

  // Placeholder function for app login
  const handleAppLogin = () => {
    console.log("Login with App");
  };

  // Function to handle the login process (triggered when user clicks 'Log In')
  const handleSignIn = () => {
    console.log("Handle Sign-In");
  };

  return (
    // SafeAreaView ensures the content is properly aligned within the safe area of the device
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.flexContainer}>
        {/* Header section with a gradient background */}
        <LinearGradient
          colors={["#000000", "#1c1c1c"]} // Gradient colors for the header
          style={styles.gradientHeader}
        >
          {/* Main header text (LOG IN) */}
          <Text style={styles.headerText}>LOG IN</Text>
          {/* Sub-header text (Please sign in to your existing account) */}
          <Text style={styles.subHeaderText}>Please sign in to your existing account</Text>
        </LinearGradient>

        {/* Main container for the login form */}
        <View style={styles.container}>
          {/* Email input label */}
          <Text style={styles.inputLabel}>EMAIL</Text>
          {/* Email input field */}
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={usernameOrEmail}
            onChangeText={setUsernameOrEmail} // Updates the state with user input
          />

          {/* Password input label */}
          <Text style={styles.inputLabel}>PASSWORD</Text>

          {/* Password input with a toggle button for visibility */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              secureTextEntry={!isPasswordVisible} // Conditionally hides or shows password text
              onChangeText={setPassword} // Updates the password state
            />
            {/* Icon button to toggle password visibility */}
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)} // Toggles visibility state
            >
              {/* Eye icon that changes depending on the visibility state */}
              <Ionicons
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {/* "Remember Me" toggle and "Forgot Password" link */}
          <View style={styles.rememberForgotContainer}>
            {/* "Remember Me" section with a switch toggle */}
            <View style={styles.rememberMeContainer}>
              <Switch
                value={rememberMe} // Current state of the switch
                onValueChange={setRememberMe} // Updates the "rememberMe" state when toggled
                thumbColor={rememberMe ? "#FFA500" : "#E5E5E5"} // Switch color when active or inactive
                trackColor={{ false: "#E5E5E5", true: "#FFA500" }}
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>

            {/* Forgot Password link */}
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login button */}
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.8}
            onPress={handleSignIn} // Trigger the sign-in function
          >
            <Text style={styles.actionButtonText}>LOG IN</Text>
          </TouchableOpacity>

          {/* Sign-up text and link */}
        
          <Text style={styles.footerText}>
          Don't have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
              <Text style={styles.signInLink}>Sign Up</Text>
            </TouchableOpacity>
          </Text>


          {/* "Or" separator between login and social login options */}
          <View style={styles.orSeparator}>
            <View style={styles.horizontalLine} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.horizontalLine} />
          </View>

          {/* Social login buttons for Facebook, Twitter, and App */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
              <Image
                source={require("../assets/socialicons/facebook.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleTwitterLogin}>
              <Image
                source={require("../assets/socialicons/x.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleAppLogin}>
              <Image
                source={require("../assets/socialicons/ios.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signin;
