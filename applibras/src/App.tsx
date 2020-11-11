import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";

import Routes from './routes';

const App: React.FC = () => { 

  useEffect(() => (
      RNBootSplash.hide({ duration: 250 })
  ), []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#007BF9" />
      <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}

export default App;
