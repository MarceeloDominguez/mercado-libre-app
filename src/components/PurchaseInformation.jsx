import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PurchaseInformation({ nameIcon, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={nameIcon}
        size={20}
        color="#0000008c"
        style={{ paddingRight: 6 }}
      />
      <Text style={styles.textDescription}>
        <Text style={{ color: "#3483fa" }}>{title}</Text>
        {title ? " " : ""}
        {subTitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
  },
  textDescription: {
    color: "#0000008c",
    fontSize: 15,
    paddingRight: 16,
    letterSpacing: 0.5,
  },
});
