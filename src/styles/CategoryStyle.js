/* Styling for the Category section */

import { StyleSheet } from 'react-native';

export const CategoryStyles = StyleSheet.create({
    categorySection: {
        padding: 20,
      },
      categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
      headerText: {
        fontSize: 20,
        fontWeight: "bold",
      },
      categoryItem: {
        alignItems: "center",
        marginRight: 20,
      },
      categoryImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
      },
      categoryName: {
        fontSize: 16,
        marginTop: 5,
      },
      categoryPrice: {
        fontSize: 14,
        color: "gray",
      },

});