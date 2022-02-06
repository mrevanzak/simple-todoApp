import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.navigation}>
      <Ionicons name="ios-skull-outline" size={24} color="#f8f8f2" />
      <Ionicons name="ios-rocket-outline" size={24} color="#f8f8f2" />
      <Ionicons name="ios-rose-outline" size={24} color="#f8f8f2" />
      <Ionicons name="ios-sad-outline" size={24} color="#f8f8f2" />
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#44475a",
  },
});
