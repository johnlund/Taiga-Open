import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeStack from "./homeStack";
import About from "../screens/about";
import CompletedTasks from "../screens/completedTasks";
import { Icon } from "react-native-elements";
import IconMI from "react-native-vector-icons/MaterialIcons";

IconMI.loadFont();

const CompletedTasksNav = createStackNavigator({
  CompletedTasks: {
    screen: CompletedTasks,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Completed Tasks",
        headerStyle: {
          backgroundColor: "#eee",
        },
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
});

const AboutNav = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "About",
        headerStyle: {
          backgroundColor: "#eee",
        },
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
});

const RootDrawerNavigator = createDrawerNavigator(
  {
    Tasks: {
      screen: HomeStack,
    },
    CompletedTasks: {
      screen: CompletedTasksNav,
    },
    About: {
      screen: AboutNav,
    },
  },
  {
    drawerPosition: "right",
  }
);

export default createAppContainer(RootDrawerNavigator);
