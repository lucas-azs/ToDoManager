import { createAppContainer } from 'react-navigation';
import { Login, Register } from '../screens/Screens';
import { createStackNavigator } from 'react-navigation-stack'

export default Routes = createAppContainer(createStackNavigator(
    {
        pageLogin: { screen: Login },
        pageRegister: { screen: Register }
    }, {
    headerMode: 'screen'
}
));