import { createStackNavigator } from 'react-navigation-stack';
import CompletedTasks from '../screens/completedTasks';

const screens = {
    CompletedTasks: {
        screen: CompletedTasks,
        navigationOptions: {
            title: 'Completed Tasks',
        }
    },
}


const CompletedTasksStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { height: 90 }
    }
});

export default CompletedTasksStack;