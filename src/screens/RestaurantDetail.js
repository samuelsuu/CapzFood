import { Text, View, Image } from 'react-native'
import React from 'react'
import { Restaurantstyles } from '../styles/RestaurantStyle';

function RestaurantDetail({ route }) {
    const { restaurant } = route.params;
  return (
    <View style={Restaurantstyles.detailContainer}>
    <Image source={{ uri: restaurant.image }} style={Restaurantstyles.detailImage} />
    <Text style={Restaurantstyles.detailName}>{restaurant.name}</Text>
    <Text style={Restaurantstyles.detailSubtitle}>{restaurant.subtitle}</Text>
    <Text style={Restaurantstyles.detailDescription}>{restaurant.description}</Text>
    <Text style={Restaurantstyles.detailInfo}>Rating: {restaurant.rating} ★</Text>
    <Text style={Restaurantstyles.detailInfo}>Delivery: {restaurant.delivery}</Text>
    <Text style={Restaurantstyles.detailInfo}>Time: {restaurant.time}</Text>
  </View>
  )
}

export default RestaurantDetail

