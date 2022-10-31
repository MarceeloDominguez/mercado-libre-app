import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderDetails from "../components/HeaderDetails";
import ButtonPressable from "../components/ButtonPressable";
import PurchaseInformation from "../components/PurchaseInformation";

const WIDTH = Dimensions.get("window").width * 0.9;
const HEIGHT = Dimensions.get("window").height;

export default function Details({ route }) {
  const { item } = route.params;
  const { name, image, price, discount, previousPrice, wayToPay } = item;

  return (
    <View style={styles.container}>
      <HeaderDetails />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.nameProduct}>{name}</Text>
        <View style={styles.containerImage}>
          <Image
            source={image}
            style={styles.imageProduct}
            resizeMode="contain"
          />
          <Ionicons
            name="share-social-outline"
            size={20}
            color="#333"
            style={styles.iconShare}
          />
        </View>
        {previousPrice && (
          <Text style={styles.previousPrice}>$ {previousPrice}</Text>
        )}
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {price}</Text>
          {discount && <Text style={styles.discount}>{discount}% OFF</Text>}
        </View>
        <View style={styles.containerWayToPay}>
          <Text style={styles.textEn}>en</Text>
          <Text style={styles.wayToPay}>6x $ {wayToPay} sin interés</Text>
        </View>
        <View style={styles.containerButton}>
          <Text style={styles.titleButton}>¡Última disponible!</Text>
          <ButtonPressable
            title="Comprar ahora"
            backgroundColor="#3483fa"
            color="#fff"
          />
          <ButtonPressable
            title="Agregar al carrito"
            backgroundColor="#4189e626"
            color="#3483fa"
          />
        </View>
        <PurchaseInformation
          nameIcon="reload-outline"
          title="Devolución gratis."
          subTitle="Tenés 30 días desde que lo recibís."
        />
        <PurchaseInformation
          nameIcon="shield-checkmark-outline"
          title="Compra Protegida."
          subTitle="Recibí el producto que esperabas o te devolvemos tu dinero."
        />
        <PurchaseInformation
          nameIcon="trophy-outline"
          title="Mercado Puntos."
          subTitle="Sumás 100 puntos."
        />
        <PurchaseInformation
          nameIcon="medal-outline"
          subTitle="12 meses de garantía de fábrica."
        />
        <View style={styles.containerFavorite}>
          <View style={styles.containerButtonFavorite}>
            <Ionicons name="heart-outline" size={26} color="#3483fa" />
            <Text style={styles.textButtonFavorite}>Agregar a favoritos</Text>
          </View>
          <View style={styles.containerButtonFavorite}>
            <Ionicons name="share-social-outline" size={24} color="#3483fa" />
            <Text style={styles.textButtonFavorite}>Compartir</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  nameProduct: {
    paddingHorizontal: 18,
    fontSize: 17,
    color: "#333",
    letterSpacing: 0.5,
    lineHeight: 20,
    marginTop: 22,
    marginBottom: 10,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageProduct: {
    width: WIDTH,
    height: HEIGHT / 3,
  },
  iconShare: {
    padding: 10,
    backgroundColor: "#EDE4E0",
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 20,
  },
  previousPrice: {
    fontSize: 15,
    paddingLeft: 18,
    marginTop: 15,
    textDecorationLine: "line-through",
    color: "rgba(0,0,0,.55)",
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    paddingLeft: 18,
    fontSize: 32,
    color: "#333",
  },
  discount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00a650",
    paddingLeft: 4,
  },
  containerButton: {
    marginVertical: 18,
    paddingHorizontal: 18,
  },
  titleButton: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  containerWayToPay: {
    paddingLeft: 16,
    flexDirection: "row",
    marginTop: 4,
  },
  wayToPay: {
    color: "#00a650",
    paddingLeft: 4,
    fontSize: 16,
    letterSpacing: 0.3,
  },
  textEn: {
    textAlignVertical: "bottom",
    color: "#333",
  },
  containerFavorite: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 24,
  },
  containerButtonFavorite: {
    flexDirection: "row",
    alignItems: "center",
  },
  textButtonFavorite: {
    paddingLeft: 10,
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#3483fa",
  },
});
