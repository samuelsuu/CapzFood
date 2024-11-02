import React, { useRef } from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import restaurants from "../data/RestaurantData"; // Importing the dataset
import { Restaurantstyles } from "../styles/RestaurantStyle"; // Importing Restaurant Styles

function RestaurantList() {
  const scrollViewRef = useRef(null); // Create a ref for ScrollView
  const scrollPosition = useRef(0); // Track current scroll position

  const handleSeeAll = () => {
    // Increase the scroll position by a fixed amount (e.g., 200)
    scrollPosition.current += 200; // Adjust this value as needed

    // Scroll vertically by setting the y offset
    scrollViewRef.current?.scrollTo({ y: scrollPosition.current, animated: true });
  };

  return (
    <View style={Restaurantstyles.restaurantSection}>
      {/* Header for the restaurant section */}
      <View style={Restaurantstyles.restaurantHeader}>
        <Text style={Restaurantstyles.headerText}>Open Restaurants</Text>
        <Button title="See All" onPress={handleSeeAll} />
      </View>

      {/* Vertical Scroll for restaurant items */}
      <ScrollView
        ref={scrollViewRef} // Attach the ref here
        showsVerticalScrollIndicator={false}
      >
        {/* Loop through restaurants data to display each restaurant */}
        {restaurants.map((restaurant) => (
          <View key={restaurant.id} style={Restaurantstyles.restaurantItem}>
            {/* Display restaurant image */}
            <Image
              source={{ uri: restaurant.image }}
              style={Restaurantstyles.restaurantImage}
            />

            {/* Display restaurant details */}
            <View style={Restaurantstyles.restaurantInfo}>
              <Text style={Restaurantstyles.restaurantName}>{restaurant.name}</Text>
              <Text style={Restaurantstyles.restaurantSubtitle}>{restaurant.subtitle}</Text>

              {/* Additional details: rating, delivery, and time */}
              <View style={Restaurantstyles.restaurantDetails}>
                <Text>{restaurant.rating} ★</Text>
                <Text>{restaurant.delivery}</Text>
                <Text>{restaurant.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default RestaurantList;
