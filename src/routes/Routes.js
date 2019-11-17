import { createAppContainer, createStackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { Login, Register } from '../screens/Screens';

//VERIFICAR PORQUE NÃO FUNCIONA

export default Routes = createAppContainer(createStackNavigator(
    {
        pageLogin: { screen: Login },
        pageRegister: { screen: Register }
    }, {
    headerMode: 'screen'
}
));