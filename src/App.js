import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView} from 'react-native';

/// Navigation
import AppNavigator from './navigation/AppNavigator';

const BoldAndBeautiful = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default BoldAndBeautiful;
