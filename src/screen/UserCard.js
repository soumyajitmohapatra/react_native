import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import CARD from '../components/Card';
import ModalView from '../components/Modal';
import image from '../Asset/background.jpg';
import MoreDetails from '../components/MoreDetails';

const UserCard = ({route, navigation}) => {
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

    fetch('http://71f5335ef15e.ngrok.io/delete.php', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .then(() => navigation.navigate('home'))
      .then(() => setModalVisible(!isModalVisible))
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <ImageBackground
        source={image}
        blurRadius={40}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View style={{flex: 1}}>
          <View style={{flex: 0.7}}>
            <CARD
              key={id}
              title={full_name}
              cName={college_name}
              rNumber={registration_no}
              deleteFun={deleteUser}
              editFun={() =>
                navigation.navigate('editForm', {
                  full_name,
                  registration_no,
                  college_name,
                  id,
                })
              }
            />
          </View>
          <View style={{marginBottom: 100}}>
            <MoreDetails
              registration_no={registration_no}
              id={registration_no}
            />
          </View>
        </View>
      </ImageBackground>
      <ModalView
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        message="User profile deleted successfully"
      />
    </>
  );
};

export default UserCard;

const styles = StyleSheet.create({});
