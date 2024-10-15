import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  // Safe area styling to ensure content is inside the safe area of the device
  safeArea: {
    flex: 1, // Takes up the full available height
    backgroundColor: "#000000", // Sets the background color to black
  },
  
  // General container for flex layout
  flexContainer: {
    flex: 1, // Fills the available space
  },

  // Gradient header at the top of the screen
  gradientHeader: {
    padding: 80, // Adds padding to the content inside the header
    borderBottomLeftRadius: 30, // Rounds the bottom-left corner
    borderBottomRightRadius: 30, // Rounds the bottom-right corner
  },

  // Main header text style (e.g., "LOG IN")
  headerText: {
    fontSize: 32, // Large text size for emphasis
    color: "#FFFFFF", // White text color
    fontWeight: "bold", // Bold font weight
    textAlign: "center", // Centers the text
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Subheader text style (e.g., "Please sign in to your existing account")
  subHeaderText: {
    fontSize: 13, // Smaller font size for subheading
    color: "#FFFFFF", // White text color
    textAlign: "center", // Centers the text
    marginTop: 8, // Adds margin to the top of the text
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Main container for form and other content, below the header
  container: {
    backgroundColor: "#FFFFFF", // White background for the main content
    flex: 1, // Fills the available space
    borderTopLeftRadius: 30, // Rounds the top-left corner
    borderTopRightRadius: 30, // Rounds the top-right corner
    marginTop: -20, // Slight overlap with the header for styling
    padding: 20, // Adds padding inside the container
  },

  // Input label text styling (e.g., "EMAIL", "PASSWORD")
  inputLabel: {
    fontSize: 14, // Font size for labels
    fontWeight: "600", // Semi-bold weight for the label
    marginBottom: 8, // Space below the label
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Input field styling (e.g., email, password inputs)
  input: {
    borderWidth: 1, // Adds border around the input
    borderColor: "#E5E5E5", // Light gray border color
    borderRadius: 15, // Rounds the corners of the input field
    padding: 12, // Padding inside the input field
    marginBottom: 25, // Space below the input field
    fontSize: 16, // Text size inside the input field
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Container for password input and visibility toggle (eye icon)
  passwordContainer: {
    flexDirection: "row", // Places the input and icon horizontally
    alignItems: "center", // Aligns the items vertically centered
    borderWidth: 1, // Adds border around the container
    borderColor: "#E5E5E5", // Light gray border color
    borderRadius: 10, // Rounds the corners
    paddingHorizontal: 12, // Adds horizontal padding inside
    marginBottom: 25, // Space below the container
  },

  // Password input field styling within the password container
  passwordInput: {
    flex: 1, // Expands the input to take up available space
    fontSize: 16, // Text size inside the password input
    paddingVertical: 12, // Vertical padding inside the input
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Container for "Remember Me" switch and "Forgot Password" link
  rememberForgotContainer: {
    flexDirection: "row", // Arranges the content horizontally
    justifyContent: "space-between", // Places content at the ends of the container
    alignItems: "center", // Aligns content vertically centered
    marginBottom: 35, // Space below the container
  },

  // Container for the "Remember Me" checkbox and label
  rememberMeContainer: {
    flexDirection: "row", // Places the checkbox and label side by side
    alignItems: "center", // Aligns the items vertically centered
  },

  // Text for the "Remember Me" label
  rememberMeText: {
    marginLeft: 6, // Adds space between the checkbox and text
    color: "#000000", // Black text color
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Text styling for the "Forgot Password" link
  forgotPasswordText: {
    color: "#FFA500", // Orange text color
    fontWeight: "600", // Semi-bold weight for emphasis
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // General styling for the main action button (e.g., "LOG IN" button)
  actionButton: {
    backgroundColor: "#FFA500", // Orange background color
    paddingVertical: 15, // Vertical padding inside the button
    borderRadius: 15, // Rounds the corners of the button
    marginBottom: 20, // Space below the button
  },

  // Text styling inside the action button (e.g., "LOG IN")
  actionButtonText: {
    color: "#FFFFFF", // White text color
    textAlign: "center", // Centers the text inside the button
    fontWeight: "bold", // Bold weight for emphasis
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Styling for footer text (e.g., "Don't have an account? Sign Up")
  footerText: {
    textAlign: "center", // Centers the text
    marginBottom: 15, // Space below the text
    color: "#000000", // Black text color
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Styling for links (e.g., "Sign Up" or "Resend Code" links)
  signInLink: {
    color: "#FFA500", // Orange text color for emphasis
    fontWeight: "bold", // Bold weight to make it stand out
  
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Container for "Or" separator between normal and social logins
  orSeparator: {
    flexDirection: "row", // Arranges the separator line and text horizontally
    alignItems: "center", // Aligns the content vertically
    marginVertical: 15, // Adds vertical margin for spacing
  },

  // Horizontal line for the "Or" separator
  horizontalLine: {
    flex: 1, // Fills the available width
    height: 1, // 1-pixel thick line
    backgroundColor: "#E5E5E5", // Light gray line color
  },

  // "Or" text styling in the separator
  orText: {
    marginHorizontal: 8, // Adds space around the text
    color: "#000000", // Black text color
    fontWeight: "600", // Semi-bold weight for emphasis
    fontFamily: "Montserrat", // Sets font family to Montserrat
  },

  // Container for social login buttons (Facebook, Twitter, etc.)
  socialButtonsContainer: {
    flexDirection: "row", // Arranges the social buttons horizontally
    justifyContent: "center", // Centers the buttons
    marginBottom: 20, // Adds space below the container
  },

  // Individual social button styling
  socialButton: {
    backgroundColor: "#E5E5E5", // Light gray background for each button
    borderRadius: 15, // Rounds the corners of each button
    padding: 10, // Padding inside each button
    marginHorizontal: 8, // Adds space between each button
  },

  // Styling for the social media icons inside the buttons
  socialIcon: {
    width: 30, // Width of the icon
    height: 30, // Height of the icon
  },
});
