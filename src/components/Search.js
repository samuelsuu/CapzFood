// Search.js
import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Searchstyle';

const Search = ({ searchQuery, onSearchChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={onSearchChange}
          placeholderTextColor="#888" 
        />
      </View>
    </View>
  );
};

export default Search;
