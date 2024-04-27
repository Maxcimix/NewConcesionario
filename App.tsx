import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {NativeBaseProvider} from 'native-base';
import { Provider as ReactPaperProvider } from 'react-native-paper';

import Catalog from './src/Screens/Catalog';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Notifications from './src/Screens/Notifications';
import NuevaOrden from './src/Screens/NuevaOrden';

import FirebaseState from './context/firebase/firebaseState';
import VentaState from './context/ventas/ventaState';


const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <ReactPaperProvider>
        <FirebaseState>
          <VentaState>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#ffda00',
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  }
                }}
              >
                <Stack.Screen
                  name='Catalogo' component={Catalog}
                  options={{ title: 'Catalog' }}
                />
                <Stack.Screen
                  name='Home' component={Home}
                  options={{ title: 'Home' }}
                />
                <Stack.Screen
                  name='Login' component={Login}
                  options={{ title: 'Login' }}
                />
                <Stack.Screen
                  name='Notifications' component={Notifications}
                  options={{ title: 'Notifications' }}
                />
                <Stack.Screen
                  name='NuevaOrden' component={NuevaOrden}
                  options={{ title: 'NuevaOrden' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </VentaState>
        </FirebaseState>
      </ReactPaperProvider>
    </>
  )
}

export default App
