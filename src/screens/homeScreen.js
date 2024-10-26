import React from "react";
import { View, } from "react-native";
import RestaurantList from "../components/RestaurantList";
import CategoryList from "../components/CategoryList";

const HomeScreen = () => {
  return (
    <View>

      {/* Category Section */}
      <CategoryList />

    {/* Restaurant Section */}
    <RestaurantList />
    </View>
  )
}

export default HomeScreen