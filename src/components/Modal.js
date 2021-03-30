import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const ModalView = ({isVisible, onBackdropPress, message}) => {
  return (
    <Modal
      transparent={true}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            padding: 32,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}>
          <Text style={{fontSize: 15, fontWeight:'500'}}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
