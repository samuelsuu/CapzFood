import React from "react";
import { View, Text, Image, ScrollView, Button, StyleSheet } from "react-native";
import categories from "../data/CategoryData"; // Importing the dataset
import { CategoryStyles } from "../styles/CategoryStyle";

function CategoryList() {
  return (
    <View style={CategoryStyles.categorySection}>
      {/* Header for the category section */}
      <View style={CategoryStyles.categoryHeader}>
        <Text style={CategoryStyles.headerText}>All Categories</Text>
        <Button title="See All" onPress={() => {}} />
      </View>

      {/* Horizontal Scroll for category items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop through categories data to display each category */}
        {categories.map((category) => (
          <View key={category.id} style={CategoryStyles.categoryItem}>
            <Image
              source={{ uri: category.image }}
              style={CategoryStyles.categoryImage}
            />
            <Text style={CategoryStyles.categoryName}>{category.name}</Text>
            <Text style={CategoryStyles.categoryPrice}>Starting {category.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default CategoryList;
