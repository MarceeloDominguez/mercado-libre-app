import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonPressable({ title, backgroundColor, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <Text style={[styles.textButton, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
