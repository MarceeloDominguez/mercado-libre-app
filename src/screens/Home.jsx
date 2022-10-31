import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import Carousel from "react-native-reanimated-carousel";
import { carouselImage } from "../constants/carouselImage";
import { LinearGradient } from "expo-linear-gradient";
import ProductsCard from "../components/ProductsCard";
import { ofertas } from "../constants/ofertas";
import { moreProducts } from "../constants/moreProducts";

const { width } = Dimensions.get("window");

export default function Home() {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#FCE700" barStyle="dark-content" />
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          loop
          width={width}
          height={width * 0.4}
          autoPlay={true}
          defaultIndex={1}
          mode="parallax"
          style={styles.carouselContainer}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 30,
            parallaxAdjacentItemScale: 0.9,
          }}
          data={carouselImage}
          scrollAnimationDuration={2500}
          renderItem={({ item }) => (
            <View>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.itemContainer}
              />
            </View>
          )}
        />

        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#FCE700", "transparent"]}
          style={styles.viewGradient}
        />

        <View style={{ flex: 1, paddingBottom: 100 }}>
          <ProductsCard
            data={ofertas}
            titleHeader="Ofertas"
            titleFooter="Ver todas"
          />
          <ProductsCard
            data={moreProducts}
            titleHeader="También puede Interesarte"
            titleFooter="Ver más"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  itemContainer: {
    width: width,
    height: width * 0.4,
    borderRadius: 10,
  },
  carouselContainer: {
    zIndex: 1,
  },
  viewGradient: {
    height: 150,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
