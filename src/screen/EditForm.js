import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Button, Input} from 'react-native-elements';

const EditForm = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [regdNo, setRegdNo] = useState(null);
  const [college, setCollege] = useState('');

  const {full_name} = route.params;
  const {registration_no} = route.params;
  const {college_name} = route.params;
  const {id} = route.params;

  useEffect(() => {
    setName(full_name);
    setCollege(college_name);
    setRegdNo(registration_no);
  }, []);

  const insertData = () => {
    if (!name || !regdNo || !college) {
      Alert.alert('Required field is missing');
    } else {
      setTimeout(() => setLoading(true), 1000);
      let formdata = new FormData();
      formdata.append('full_name', name);
      formdata.append('registration_no', regdNo);
      formdata.append('college_name', college);
      formdata.append('id', id);

      let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('/edit.php', requestOptions)
        .then(response => response.text())
        .then(() => Alert.alert('Profile Updated Successfully'))
        .then(() => navigation.navigate('Data'))
        .catch(error => Alert.alert('error', error));
    }
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.baseText}>
              Update your <Text style={styles.innerText}>DETAILS</Text>
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
            title="Update"
            containerStyle={{width: 400}}
            buttonStyle={{
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#2A118F',
            }}
            onPress={insertData}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
