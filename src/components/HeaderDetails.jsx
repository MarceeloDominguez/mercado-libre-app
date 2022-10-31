import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Producto</Text>
        <View style={styles.icons}>
          <Ionicons name="heart-outline" size={26} color="#333" />
          <Ionicons
            name="search-outline"
            size={25}
            color="#333"
            style={styles.icon}
          />
          <Ionicons
            name="cart-outline"
            size={26}
            color="#333"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Ionicons name="location-outline" size={18} color="#333" />
        <Text style={styles.textAddress}>
          Enviar a Marcelo Dominguez - Street 1325
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={15}
          color="#0000008c"
          style={{ textAlignVertical: "center" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCE700",
    elevation: 8,
    zIndex: 1,
  },
  upperContainer: {
    flexDirection: "row",
    paddingTop: 14,
    paddingLeft: 55,
    paddingRight: 15,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  title: {
    fontSize: 19,
    letterSpacing: 0.5,
    color: "#333",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    paddingLeft: 18,
  },
  lowerContainer: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingBottom: 12,
  },
  textAddress: {
    fontSize: 14,
    paddingHorizontal: 10,
    color: "#333",
  },
});
