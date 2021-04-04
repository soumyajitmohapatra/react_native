import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

/// Screen
import MainForm from '../screen/MainForm';
import UserCard from '../screen/UserCard';
import StudentList from '../screen/StudentList';
import EditForm from '../screen/EditForm';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#1687a7',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="home"
        options={{
          headerTransparent: true,
          title: '',
          headerStyle: {},
        }}
        component={Home}
      />
      <Stack.Screen
        name="form"
        options={{title: 'Form'}}
        component={MainForm}
      />
      <Stack.Screen
        name="userCard"
        options={{title: 'User'}}
        component={UserCard}
      />
      <Stack.Screen
        name="studentList"
        options={{title: 'Table'}}
        component={StudentList}
      />
      <Stack.Screen
        name="editForm"
        options={{title: 'Edit'}}
        component={EditForm}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
