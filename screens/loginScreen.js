import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function LoginScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ProjectsScreen");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>User Login</Text>
      <View>
        <View>
          <TextInput style={globalStyles.input} placeholder="Username" />
          <TextInput style={globalStyles.input} placeholder="Password" />
          <View style={globalStyles.button}>
            <Button title="Submit" color="black" onPress={pressHandler} />
          </View>
        </View>
      </View>
    </View>
  );
}
