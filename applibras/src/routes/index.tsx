import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Sinal from '../pages/Sinal';
import About from '../pages/About';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Sinal" component={Sinal} />
    <App.Screen name= "About" component={About}/>
  </App.Navigator>
);

export default AppRoutes;
