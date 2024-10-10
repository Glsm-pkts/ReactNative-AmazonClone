
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='ProductScreen' component={ProductScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default Router

