import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Import stack navigator for screen-to-screen navigation
import Signin from "../auth/Signin"; // Import the Signin screen component
import Registration from "../auth/Registration"; // Import the Registration screen component
import ForgotPassword from "../components/ForgotPassword"; // Import the ForgotPassword screen component
import Verification from "../components/Verification"; // Import the Verification screen component

// Create a Stack navigator instance for managing navigation within this component
const Stack = createNativeStackNavigator();

function Regs() {
  // Return the stack navigator with each screen defined
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin" // Route name for the Signin screen
        component={Signin} // Specify the component to render for this screen
        options={{ headerShown: false }} // Hide the header to make it full-screen
      />

      <Stack.Screen
        name="Registration" // Route name for the Registration screen
        component={Registration} // Specify the component to render for this screen
        options={{ headerShown: false }} // Hide the header to make it full-screen
      />

      <Stack.Screen
        name="Verification" // Route name for the Verification screen
        component={Verification} // Specify the component to render for this screen
        options={{ headerShown: false }} // Hide the header to make it full-screen
      />

      <Stack.Screen
        name="ForgotPassword" // Route name for the ForgotPassword screen
        component={ForgotPassword} // Specify the component to render for this screen
        options={{ headerShown: false }} // Hide the header to make it full-screen
      />
    </Stack.Navigator>
  );
}

export default Regs; // Export the Regs component as the default export