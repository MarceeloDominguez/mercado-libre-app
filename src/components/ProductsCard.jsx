import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductsCard({ data, titleHeader, titleFooter }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.containerHeaderCard}>
            <Text style={styles.titleHeaderComponent}>{titleHeader}</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.containerFooterCard}>
            <Text style={styles.titleFooterConponent}>{titleFooter}</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              color="#3483fa"
              style={{ textAlignVertical: "center" }}
            />
          </View>
        }
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                {
                  borderBottomWidth: index === 2 || index === 3 ? 0 : 0.5,
                  borderRightWidth: index === 0 || index === 2 ? 0.5 : 0,
                },
                styles.cardContainer,
              ]}
            >
              <View style={styles.containerImage}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.imageProduct}
                />
              </View>
              <View style={styles.containerPrice}>
                <Text style={styles.priceProduct}>$ {item.price}</Text>
                {item.discount && (
                  <Text style={styles.discount}>{item.discount}% OFF</Text>
                )}
              </View>
              <Text style={styles.nameProduct} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.shipping}>{item.shipping}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 6,
  },
  containerHeaderCard: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
  },
  titleHeaderComponent: {
    fontWeight: "bold",
    letterSpacing: 0.5,
    fontSize: 15,
    color: "#333",
  },
  containerFooterCard: {
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    height: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleFooterConponent: {
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#3483fa",
  },
  cardContainer: {
    backgroundColor: "#fff",
    flex: 1,
    borderBottomColor: "#ccc",
    borderRightColor: "#ccc",
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceProduct: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  discount: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#00a650",
  },
  nameProduct: {
    fontSize: 12,
    letterSpacing: 0.5,
    paddingHorizontal: 10,
    lineHeight: 18,
    color: "#333",
    paddingBottom: 10,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageProduct: {
    width: 100,
    height: 100,
  },
  shipping: {
    paddingLeft: 10,
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#00a650",
  },
});
