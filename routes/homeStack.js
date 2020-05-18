import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ServerLogin from "../screens/serverLogin";
import LoginScreen from "../screens/loginScreen";
import ProjectsScreen from "../screens/projectsScreen";
import Header from "../components/header";
import React from "react";

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
        // headerTitle can be a function as a value which can return a component. 'title' can not. 'title' can only return a string
        headerTitle: "Tasks",
        headerRight: () => (
          <MaterialIcons
            name="menu"
            size={40}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        // headerRight: () => {
        //   <MaterialIcons name="menu" size={40} onPress={openMenu} />;
        // },
        // header: ({ scene, previous, navigation }) => {
        //   const { options } = scene.descriptor;
        //   const title = "Tasks";
        //   return (
        //     <Header
        //       title={title}
        //       // leftButton={
        //       //   previous ? (
        //       //     <MyBackButton onPress={navigation.goBack} />
        //       //   ) : undefined
        //       // }
        //       style={styles.header}
        //     />
        //   );
        // },
      };
    },
  },
};

const openMenu = (navigation) => {
  navigation.openDrawer();
};

const styles = StyleSheet.create({
  header: {
    //width: width - width * 0.33,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // backgroundColor: 'red'
  },
});

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

export default HomeStack;
