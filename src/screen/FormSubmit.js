import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import CARD from '../components/Card';

const FormSubmit = ({route, navigation}) => {
  const {full_name} = route.params;
  const {registration_no} = route.params;
  const {college_name} = route.params;
  const {id} = route.params;

  const deleteUser = () => {
    let formdata = new FormData();
    formdata.append('id', id);

    let requestOptions = {
      method: 'POST',
      redirect: 'follow',
      body: formdata,
    };

    fetch('http://2fa6a3337d7d.ngrok.io/delete.php', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .then(() => Alert.alert('User profile delete successfull'))
      .then(() => navigation.navigate('Home'))
      .catch(error => console.log('error', error));
  };

  return (
    <View>
      <CARD
        key={id}
        title={full_name}
        cName={college_name}
        rNumber={registration_no}>
        <Button
          containerStyle={{width: 400, marginButton: 20}}
          buttonStyle={{
            borderRadius: 50,
            backgroundColor: '#2A118F',
          }}
          key={id}
          title="Edit"
          onPress={() =>
            navigation.navigate('edit', {
              full_name,
              registration_no,
              college_name,
              id,
            })
          }
        />
        <Button
          title="delete"
          buttonStyle={{
            width: '100%',
            borderRadius: 10,
          }}
          onPress={deleteUser}
        />
      </CARD>
    </View>
  );
};

export default FormSubmit;

const styles = StyleSheet.create({});
