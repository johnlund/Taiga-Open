import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../components/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                // headerTitle can be a function as a value which can return a component. 'title' can not. 'title' can only return a string
                headerTitle: () => <Header navigation={navigation} title='About' />,
            }
        }
    },
}


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { height: 90, backgroundColor: '#eee' },
    }
});

export default AboutStack;