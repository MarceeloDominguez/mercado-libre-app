import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ButtonMP({ title }) {
  return (
    <View style={styles.buttonMercadoPago}>
      <View style={styles.containerLogoMP}>
        <Image
          source={require("../../assets/mercado-pago.png")}
          style={styles.logoMP}
          resizeMode="contain"
        />
        <Text style={styles.titleButtonMP}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={18} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonMercadoPago: {
    marginHorizontal: 10,
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 40,
    borderRadius: 100,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  containerLogoMP: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoMP: {
    width: 26,
    height: 26,
  },
  titleButtonMP: {
    fontSize: 15,
    paddingLeft: 15,
  },
});
