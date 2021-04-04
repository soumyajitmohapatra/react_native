import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Button, Input} from 'react-native-elements';
import ModalView from '../components/Modal';

const MainForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [regdNo, setRegdNo] = useState(null);
  const [college, setCollege] = useState('');
  const [loading, setLoading] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [msg, setMsg] = useState('');

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName('');
      setRegdNo(null);
      setLoading(false);
      setCollege('');
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);

  const insertData = () => {
    if (!name || !regdNo || !college) {
      setMsg('Required field missing');
      setModalVisible(!isModalVisible);
    } else {
      setMsg('User profile added successfully');
      setTimeout(() => setLoading(true), 1000);
      let formdata = new FormData();
      formdata.append('full_name', name);
      formdata.append('registration_no', regdNo);
      formdata.append('college_name', college);

      let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('http://71f5335ef15e.ngrok.io/insert.php', requestOptions)
        .then(response => response.text())
        .then(() => {
          setName('');
          setCollege('');
          setRegdNo(null);
          setLoading(false);
        })
        .then(() => setModalVisible(!isModalVisible))
        .catch(error => Alert.alert('error', error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.baseText}>
          Please enter your <Text style={styles.innerText}>DETAILS</Text>
        </Text>
      </View>
      <View style={styles.form_wrapper}>
        <Input
          label="Name"
          labelStyle={{color: '#000', fontSize: 16}}
          placeholder="Enter your name"
          inputContainerStyle={{width: '100%'}}
          inputStyle={{width: '100%'}}
          defaultValue={name}
          maxLength={20}
          onChangeText={n => setName(n)}
        />
        <Input
          label="Registration Number"
          labelStyle={{color: '#000', fontSize: 16}}
          placeholder="Enter your Registration Number"
          inputContainerStyle={{width: '100%'}}
          inputStyle={{width: '100%'}}
          defaultValue={regdNo}
          keyboardType="number-pad"
          maxLength={5}
          onChangeText={r => setRegdNo(r)}
        />
        <Input
          label="College Name"
          labelStyle={{color: '#000', fontSize: 16}}
          placeholder="Enter your college name"
          inputContainerStyle={{width: '100%'}}
          inputStyle={{width: '100%'}}
          defaultValue={college}
          maxLength={20}
          onChangeText={c => setCollege(c)}
        />
      </View>
      <Button
        loading={loading}
        title="Submit"
        containerStyle={{width: 400}}
        buttonStyle={{
          width: '100%',
          borderRadius: 15,
          // backgroundColor: '#2A118F',
          shadowRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 100,
            height: 100,
          },
          shadowOpacity: 10,
          elevation: 210,
        }}
        onPress={insertData}
      />
      <Button
        title="Show Students"
        type="clear"
        containerStyle={{width: 200, marginLeft: 250, marginTop: 30}}
        buttonStyle={{
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('studentList')}
      />
      <ModalView
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        message={msg}
      />
    </View>
  );
};

export default MainForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f5f5',
    height: '100%',
  },
  title: {
    marginTop: 20,
  },
  form_wrapper: {
    width: '98%',
    marginTop: 50,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  innerText: {
    color: 'red',
  },
});
