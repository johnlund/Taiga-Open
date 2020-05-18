import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <MaterialIcons
        name="menu"
        size={40}
        onPress={openMenu}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    //width: width - width * 0.33,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // backgroundColor: 'red'
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    color: "#333",
    letterSpacing: 2,
    flex: 1,
  },
  icon: {
    textAlign: "right",
    flex: 1,
  },
});
