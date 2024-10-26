import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import restaurants from "../data/RestaurantData"; // Importing the dataset
import { Restaurantstyles } from "../styles/RestaurantStyle"; //Importing Restaurant Styles

function RestaurantList() {
  return (
    <View style={Restaurantstyles.restaurantSection}>
      {/* Header for the restaurant section */}
      <View style={Restaurantstyles.restaurantHeader}>
        <Text style={Restaurantstyles.headerText}>Open Restaurants</Text>
        <Button title="See All>" onPress={() => {}} />
      </View>

      {/* Loop through restaurants data to display each restaurant */}
      <ScrollView>
        {restaurants.map((restaurants) => (
          <View key={restaurants.id} style={Restaurantstyles.restaurantItem}>
            {/* Display restaurant image */}
            <Image
              source={{ uri: restaurants.image }}
              style={Restaurantstyles.restaurantImage}
            />

            {/* Display restaurant details */}
            <View style={Restaurantstyles.restaurantInfo}>
              <Text style={Restaurantstyles.restaurantName}>{restaurants.name}</Text>
              <Text style={Restaurantstyles.restaurantSubtitle}>{restaurants.subtitle}</Text>

              {/* Additional details: rating, delivery, and time */}
              <View style={Restaurantstyles.restaurantDetails}>
                <Text>{restaurants.rating} ★</Text>
                <Text>{restaurants.delivery}</Text>
                <Text>{restaurants.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default RestaurantList;