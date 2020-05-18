import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
        }
    },
}


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { height: 90 }
    }
});

export default AboutStack;