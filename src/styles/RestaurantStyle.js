/* Styling for the restaurant section */

import { StyleSheet } from 'react-native';

export const Restaurantstyles = StyleSheet.create({

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
});