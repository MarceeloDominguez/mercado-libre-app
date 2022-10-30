import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.search}>
          <Ionicons name="search-outline" size={18} color="#898AA6" />
          <Text style={styles.placeholder}>Buscar en Mercado Libre</Text>
        </View>
        <Ionicons
          name="cart-outline"
          size={26}
          color="#000"
          style={{ textAlignVertical: "center" }}
        />
      </View>
      <View style={styles.lowerContainer}>
        <Ionicons name="location-outline" size={18} color="#1B2430" />
        <Text style={styles.textAddress}>
          Enviar a Marcelo Dominguez - Street 1325
        </Text>
        <Ionicons name="chevron-forward-outline" size={18} color="#898AA6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCE700",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  lowerContainer: {
    flexDirection: "row",
    paddingBottom: 14,
    paddingTop: 4,
    paddingHorizontal: 16,
    textAlignVertical: "center",
  },
  placeholder: {
    letterSpacing: 0.5,
    color: "#898AA6",
    paddingLeft: 4,
  },
  search: {
    backgroundColor: "#fff",
    flex: 1,
    height: 36,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    marginVertical: 10,
    marginLeft: 40,
    marginRight: 10,
  },
  textAddress: {
    letterSpacing: 0.5,
    fontSize: 14,
    paddingHorizontal: 10,
    color: "#1B2430",
  },
});
