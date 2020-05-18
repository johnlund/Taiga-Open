import { createStackNavigator } from 'react-navigation-stack';
import ServerLogin from '../screens/serverLogin';
import LoginScreen from '../screens/loginScreen';
import ProjectsScreen from '../screens/projectsScreen';

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
        navigationOptions: {
            title: 'Tasks'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { height: 90 }
    }
});

export default HomeStack;