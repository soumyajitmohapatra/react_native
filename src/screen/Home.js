import React from 'react';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import image from '../Asset/background.jpg';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={image}
      // style={StyleSheet.absoluteFillObject}
      blurRadius={40}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'space-evenly', flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="plus-circle" size={155} color="#fff" />}
            title=""
            onPress={() => navigation.navigate('form')}
          />
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            ADD STUDENT
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="users" size={140} color="#fff" />}
            title=""
            onPress={() => navigation.navigate('studentList')}
          />
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            STUDENT LIST
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
