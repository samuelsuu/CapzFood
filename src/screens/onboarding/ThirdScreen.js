import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: "10%" }}>
        <Image style={{ width: "75%", height:"61%", margin: "auto" }}
          source={require("../../../assets/Onboarding-04.png")}
        />
        <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: -60 }}>
          Free delivery offers
        </Text>
      </View>

      <Text style={styles.text}>
        Get all your loved foods in one once place, you just place the order we do the rest
      </Text>

      <View style={styles.circle}>
        <Icon name="circle-thin" color={"#FF7622"} size={20} />
        <Icon name="circle-thin" color={"#FF7622"} size={20} />
        <Icon name="circle" color={"#FF7622"} size={20} />
      </View>

      <TouchableOpacity style={styles.but} onPress={() => navigation.navigate("Reg")}>
        <Text style={{ textAlign: "center", color: "white"}}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Reg")}>
        <Text style={{ textAlign: "center", marginTop: "5%", color: "grey"  }}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdScreen

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      // backgroundColor: "#151B29",
      height: "100%",
      
    },
  
    text: {
      color: "grey",
      marginTop: "10%",
      paddingHorizontal: "10%",
      textAlign: "center"
    },
  
    circle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
      marginTop: 70,
    },
  
    but: {
      backgroundColor: "#FF7622",
      marginTop: "15%",
      padding: "3%",
      marginHorizontal: "10%",
    }
  });
  