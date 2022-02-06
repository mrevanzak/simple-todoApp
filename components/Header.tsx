import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 20, color: "white" }}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#282a36",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
