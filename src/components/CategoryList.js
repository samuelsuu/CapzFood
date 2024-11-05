import React, { useRef } from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import categories from "../data/CategoryData"; // Importing the dataset
import { CategoryStyles } from "../styles/CategoryStyle";

function CategoryList() {
  const scrollViewRef = useRef(null); // Create a ref for ScrollView

  const handleSeeAll = () => {
    // Check if the ref is set and scroll to the end
    scrollViewRef.current?.scrollTo({ x: 200, animated: true }); // Adjust the x value to how much you want to scroll
  };

  return (
    <View style={CategoryStyles.categorySection}>
      {/* Header for the category section */}
      <View style={CategoryStyles.categoryHeader}>
        <Text style={CategoryStyles.headerText}>All Categories</Text>
        <Button title="See All" onPress={handleSeeAll} />
      </View>

      {/* Horizontal Scroll for category items */}
      <ScrollView
        ref={scrollViewRef} // Attach the ref here
        horizontal
        // showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
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

export default CategoryList;
