import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const AppNavigation = function() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default AppNavigation;