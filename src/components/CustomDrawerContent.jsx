import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CardGradient from "./CardGradient";
import ButtonMP from "./ButtonMP";
import { itemDrawer } from "../constants/itemDrawer";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerHeader}>
        <View style={styles.upperHeader}>
          <View style={styles.containerAvatar}>
            <Image
              source={require("../../assets/avatar-app.png")}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>

          <View style={styles.containerName}>
            <Text style={styles.name}>Hola Marcelo</Text>
            <View style={styles.containerSubTitle}>
              <Text>Nivel 1 - Mercado Puntos</Text>
              <Ionicons name="chevron-forward-outline" size={18} color="#333" />
            </View>

            <CardGradient title="Suscribite al nivel 6" />
          </View>
        </View>

        <ButtonMP title="Mercado Pago" />
      </View>

      {itemDrawer.map((item, index) => (
        <DrawerItem
          key={index}
          label={item.label}
          onPress={() => props.navigation.navigate("Home")}
          icon={({ color, focused }) => <Ionicons name={item.icon} size={18} />}
        />
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    paddingTop: 0,
  },
  containerHeader: {
    backgroundColor: "#FCE700",
  },
  containerAvatar: {
    height: 40,
    width: 40,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 20,
    marginRight: 8,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#333",
  },
  upperHeader: {
    flexDirection: "row",
    paddingHorizontal: 18,
  },
  containerName: {
    flex: 1,
    marginTop: 10,
  },
  name: {
    fontSize: 12,
    color: "#0000008c",
  },
  containerSubTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
