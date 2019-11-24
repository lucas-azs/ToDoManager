import { App, Login, Register, ToDoTasks, DoneTasks, Task } from '../screens/Screens';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'



const taskListTabNavigator = createBottomTabNavigator ({
    pageToDoTasks: { screen: ToDoTasks, title: 'To Do' },
    pageDoneTasks: { screen: DoneTasks, title: 'Done' }
});


export default Routes = createAppContainer(
    
    createStackNavigator(
    {
        pageApp: { screen: App },
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
        },
        pageTask: { screen: Task }
    },
    {
        headerMode: 'screen'
    })
);