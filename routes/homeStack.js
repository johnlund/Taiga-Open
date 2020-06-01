import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { Icon } from "react-native-elements";
import ServerLogin from "../screens/serverLogin";
import LoginScreen from "../screens/loginScreen";
import ProjectsScreen from "../screens/projectsScreen";
import React from "react";
import IconMI from "react-native-vector-icons/MaterialIcons";

IconMI.loadFont();

const screens = {
  ServerLogin: {
    screen: ServerLogin,
    navigationOptions: {
      title: "Server Login",
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: "User Login",
    },
  },
  ProjectsScreen: {
    screen: ProjectsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Tasks",
        headerRight: () => (
          <Icon
            name="menu"
            size={40}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     alignItems: "flex-start",
//   },
// });

export default HomeStack;
