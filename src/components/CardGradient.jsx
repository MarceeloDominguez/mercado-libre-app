import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CardGradient({ title }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["#a90f90", "#0c1a51"]}
      style={styles.cardGradient}
    >
      <Text style={styles.titleCardGradient}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardGradient: {
    height: 30,
    justifyContent: "center",
    marginTop: 8,
    borderRadius: 100,
  },
  titleCardGradient: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 8,
  },
});
