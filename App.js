import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/styles/Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to this experince WebCApz Student</Text>
      <Text>Make sure you study the code base before starting</Text>
      <Text>Please make sure you seperate the style in another js file</Text>
      <Text>Thanks From your Instructor Samuel</Text>
      <StatusBar style="auto" />
    </View>
  );
}
