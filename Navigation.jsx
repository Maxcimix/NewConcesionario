import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home';
import Notifications from './src/Screens/Notifications';
import Catalog from './src/Screens/Catalog';
import Login from './src/Screens/Login';
import Icon from 'react-native-vector-icons/Ionicons';
import FirebaseState from './context/firebase/firebaseState';
import VentaState from './context/ventas/ventaState';

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      //Al Iniciar el App ingrese al Home
      initialRouteName="Home"
      ScreenOptions={{
        tabBarActiveTinitColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" size={size} color="color" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{tabBarLabel: 'NOTIFICACION'}}
      />
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{tabBarLabel: 'CATALOGO'}}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{tabBarLabel: 'LOGIN'}}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <FirebaseState>
      <VentaState>
        <NavigationContainer>
          <TabGroup />
        </NavigationContainer>
      </VentaState>
    </FirebaseState>
  );
}
