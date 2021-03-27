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

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [regdNo, setRegdNo] = useState(null);
  const [college, setCollege] = useState('');
  const [loading, setLoading] = useState(false);

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
      Alert.alert('Required field is missing');
    } else {
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

      fetch('http://a848b36f2553.ngrok.io/insert.php', requestOptions)
        .then(response => response.text())
        .then(() => Alert.alert('Registered Successfully'))
        .then(() => {
          setName('');
          setCollege('');
          setRegdNo(null);
          setLoading(false);
        })
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
          maxLength={15}
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
          maxLength={15}
          onChangeText={c => setCollege(c)}
        />
      </View>
      <Button
        loading={loading}
        title="Submit"
        containerStyle={{width: 400}}
        buttonStyle={{
          width: '100%',
          borderRadius: 10,
          backgroundColor: '#2A118F',
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
        onPress={() => navigation.navigate('student')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f6f5f5',
    height: '100%',
  },
  title: {
    marginTop: 40,
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
