import { createStackNavigator, createTabNavigator } from 'react-navigation';
import { Login, Register, ToDoTasks, DoneTasks } from '../screens/Screens';
import { Platform } from 'react-native';


const taskListTabNavigator = createTabNavigator({
    pageToDoTasks: { screen: ToDoTasks, title: 'To Do' },
    pageDoneTasks: { screen: DoneTasks, title: 'Done' }
});


export default Routes = createStackNavigator(
    {
        pageLogin: { screen: Login },
        pageRegister: { screen: Register },
        pageTasksList: {
            screen: taskListTabNavigator,
            navigationOptions: {
                ...Platform.select({
                    ios: {
                        title: 'Task List'
                    },
                    android: {
                        header: null
                    }
                })
            }
        }
    },
    {
        headerMode: 'screen'
    }
);