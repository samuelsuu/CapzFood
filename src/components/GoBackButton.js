// GoBackButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Icon name="chevron-left" size={20} color="#333" /> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40, // Circle diameter
    height: 40,
    backgroundColor: '#d3d3d3', // Light gray background color
    borderRadius: 20, // Half of width/height for circle shape
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoBackButton;
