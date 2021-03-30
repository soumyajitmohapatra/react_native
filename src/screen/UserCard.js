import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import CARD from '../components/Card';
import ModalView from '../components/Modal';

const UserCard = ({route, navigation}) => {
  const image = {
    uri:
      'https://www.wallpapertip.com/wmimgs/81-816611_iphone-new-wallpaper-hd-2019.jpg',
  };
  const {full_name} = route.params;
  const {registration_no} = route.params;
  const {college_name} = route.params;
  const {id} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const deleteUser = () => {
    let formdata = new FormData();
    formdata.append('id', id);

    let requestOptions = {
      method: 'POST',
      redirect: 'follow',
      body: formdata,
    };

    fetch('http://0ec77bda2f7b.ngrok.io/delete.php', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .then(() => navigation.navigate('home'))
      .then(() => setModalVisible(!isModalVisible))
      .catch(error => console.log('error', error));
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={image}
        blurRadius={40}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <CARD
          key={id}
          title={full_name}
          cName={college_name}
          rNumber={registration_no}
          deleteFun={deleteUser}
          editFun={() =>
            navigation.navigate('edit', {
              full_name,
              registration_no,
              college_name,
              id,
            })
          }></CARD>
        {/* <View style={{backgroundColor: 'red', position: 'absolute'}}> */}
          <ModalView
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            message="User profile deleted successfully"
          />
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({});
