import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

/// Screen
import HomeScreen from '../screen/HomeScreen';
import FormSubmit from '../screen/FormSubmit';
import StudentList from '../screen/StudentList';
import EditForm from '../screen/EditForm';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#2A118F',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Data"
        options={{title: 'User'}}
        component={FormSubmit}
      />
      <Stack.Screen
        name="student"
        options={{title: 'Table'}}
        component={StudentList}
      />
      <Stack.Screen
        name="edit"
        options={{title: 'edit'}}
        component={EditForm}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
