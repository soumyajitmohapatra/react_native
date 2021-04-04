import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

const BioForm = ({isVisible, onBackdropPress, registration_no, f, m, a, id}) => {
  const [fName, setFName] = useState('');
  const [mName, setMName] = useState('');
  const [age, setAge] = useState(null);

  useEffect(() => {
    setFName(f);
    setMName(m);
    setAge(a);
  }, []);
  const insertData = () => {
    let formdata = new FormData();
    formdata.append('registration_no', registration_no);
    formdata.append('fName', fName);
    formdata.append('mName', mName);
    formdata.append('age', age);

    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://71f5335ef15e.ngrok.io/insertBio.php', requestOptions)
      .then(response => response.text())
      .catch(error => Alert.alert('error', error));
  };

  return (
    <Modal
      transparent={true}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      key={id}>
        
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
          <View>
            <Input
              label="Father's Name"
              labelStyle={{color: '#000', fontSize: 16}}
              placeholder="Enter father's name"
              inputContainerStyle={{width: '100%'}}
              inputStyle={{width: '100%'}}
              defaultValue={fName}
              maxLength={20}
              onChangeText={n => setFName(n)}
            />
            <Input
              label="Mother's Name"
              labelStyle={{color: '#000', fontSize: 16}}
              placeholder="Enter mother's name"
              inputContainerStyle={{width: '100%'}}
              inputStyle={{width: '100%'}}
              defaultValue={mName}
              maxLength={20}
              onChangeText={r => setMName(r)}
            />
            <Input
              label="Age"
              labelStyle={{color: '#000', fontSize: 16}}
              placeholder="Enter age"
              inputContainerStyle={{width: '100%'}}
              inputStyle={{width: '100%'}}
              defaultValue={age}
              keyboardType="number-pad"
              maxLength={3}
              onChangeText={c => setAge(c)}
            />
            <Button title="Submit" onPress={insertData} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BioForm;
