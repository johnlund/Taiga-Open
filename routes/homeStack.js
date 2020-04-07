import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ServerLogin from '../screens/serverLogin';
import LoginScreen from '../screens/loginScreen';
import ProjectsScreen from '../screens/projectsScreen';

const screens = {
    ServerLogin: {
        screen: ServerLogin
    },
    LoginScreen: {
        screen: LoginScreen
    },
    ProjectsScreen: {
        screen: ProjectsScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);