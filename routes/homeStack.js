import { createStackNavigator } from 'react-navigation-stack';
import ServerLogin from '../screens/serverLogin';
import LoginScreen from '../screens/loginScreen';
import ProjectsScreen from '../screens/projectsScreen';
import Header from '../components/header';
import React from 'react';

const screens = {
    ServerLogin: {
        screen: ServerLogin,
        navigationOptions: {
            title: 'Server Login'
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'User Login',
        }
    },
    ProjectsScreen: {
        screen: ProjectsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                // headerTitle can be a function as a value which can return a component. 'title' can not. 'title' can only return a string
                headerTitle: () => <Header navigation={navigation} title='Tasks' />,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { height: 90, backgroundColor: '#eee' },
    }
});

export default HomeStack;