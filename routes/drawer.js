import  { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CompletedTasksStack from './completedTaskStack';

const RootDrawerNavigator = createDrawerNavigator({
    Tasks: {
        screen: HomeStack,
    },
    CompletedTasks: {
        screen: CompletedTasksStack,
    },
    About: {
        screen: AboutStack,
    },
},
{
    drawerPosition: 'right',
});

export default createAppContainer(RootDrawerNavigator);