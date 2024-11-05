import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from '../styles/Styles'; // Importing general styles


function Registration() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    console.log("User signed up!");
    navigation.navigate("Verification");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View style={{ flex: 1 }}>
        <LinearGradient colors={["#000000", "#1c1c1c"]} style={styles.gradientHeader}>
          <Text style={styles.headerText}>Sign Up</Text>
          <Text style={styles.subHeaderText}>Please sign up to get started</Text>
        </LinearGradient>

        <View style={styles.container}>
          <Text style={styles.inputLabel}>NAME</Text>
          <TextInput style={styles.input} placeholder="Your Name" value={name} onChangeText={setName} />

          <Text style={styles.inputLabel}>EMAIL</Text>
          <TextInput style={styles.input} placeholder="example@gmail.com" value={email} onChangeText={setEmail}  keyboardType="email-address" />

          <Text style={styles.inputLabel}>PASSWORD</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              secureTextEntry={!isPasswordVisible}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>RE-TYPE PASSWORD</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              value={confirmPassword}
              secureTextEntry={!isConfirmPasswordVisible}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
              <Ionicons name={isConfirmPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.actionButton} onPress={handleSignUp}>
            <Text style={styles.actionButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.signInLink}>Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Registration;