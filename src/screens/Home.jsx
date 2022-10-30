import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from "react-native";
import Header from "../components/Header";
import Carousel from "react-native-reanimated-carousel";
import { carouselImage } from "../constants/carouselImage";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FCE700" barStyle="dark-content" />
      <Header />

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
        renderItem={({ item, index }) => (
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

      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    transform: [{ translateY: 90 }],
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
