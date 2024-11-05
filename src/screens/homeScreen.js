import React from "react";
import { View, } from "react-native";
import RestaurantList from "../components/RestaurantList";
import CategoryList from "../components/CategoryList";
import { ScrollView } from "react-native-gesture-handler";
import Search from "../components/Search";

const HomeScreen = () => {
  return (
    <ScrollView
    vertical
    showsVerticalScrollIndicator = {false}
    >
<Search />
      {/* Category Section */}
      <CategoryList />

    {/* Restaurant Section */}
    <RestaurantList />
    </ScrollView>
  )
}

export default HomeScreen