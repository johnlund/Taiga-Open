import  { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CompletedTasksStack from './completedTaskStack';

const RootDrawerNavigator = createDrawerNavigator({
    Projects: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    CompletedTasks: {
        screen: CompletedTasksStack,
    }
});

export default createAppContainer(RootDrawerNavigator);