import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import ServerLogin from "./screens/serverLogin";
import Navigator from "./routes/mainStack";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
