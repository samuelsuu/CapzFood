/* Styling for both RestaurantList and RestaurantDetail screens */

import { StyleSheet } from 'react-native';

export const Restaurantstyles = StyleSheet.create({
  // Styles for the restaurant list section
  restaurantSection: {
    padding: 20,
  },
  restaurantHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  restaurantItem: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
  restaurantImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantSubtitle: {
    fontSize: 16,
    color: "gray",
  },
  restaurantDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  // Styles for the restaurant detail screen
  detailContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  detailImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  detailName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailSubtitle: {
    fontSize: 18,
    color: "gray",
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  detailInfo: {
    fontSize: 16,
    marginTop: 4,
  },
});
