import { App, Login, Register, ToDoTasks, DoneTasks, Task } from '../screens/Screens';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native';

//https://blog.rocketseat.com.br/react-navigation-react-native/

const taskListTabNavigator = createBottomTabNavigator({
    pageToDoTasks: { screen: ToDoTasks, title: 'To Do' },
    pageDoneTasks: { screen: DoneTasks, title: 'Done' }
});


export default Routes = createAppContainer (createStackNavigator(
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

    { headerMode: 'screen' }

)
);