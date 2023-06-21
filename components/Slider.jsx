import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

const ENTRIES1 = [
  {
    illustration:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Lake-Pichola.1.jpg",
  },
  {
    illustration:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/north-india-jodhpur.jpg",
  },
  {
    illustration:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/01/23/644208-chittorgarhfortpond.jpg",
  },
  {
    illustration:
      "https://www.squareyards.com/blog/wp-content/uploads/2022/04/history-of-jaisalmer-fort-1.jpg",
  },
  {
    illustration:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/09/Feature-image-Rajasthan-fort.jpg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const Slider = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 70}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: screenWidth - 70,
    height: screenWidth - 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
