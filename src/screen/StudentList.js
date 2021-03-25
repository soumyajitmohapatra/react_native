import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Item = ({title, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>
      User profile: <Text style={{color: '#000'}}>{title}</Text>
    </Text>
  </TouchableOpacity>
);

const StudentList = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch('http://2fa6a3337d7d.ngrok.io/read.php', requestOptions)
        .then(res => res.json())
        .then(result => setData(result));
    }
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <>
      <Item
        title={` ${item.full_name} `}
        item={item}
        onPress={() => navigation.navigate('Data', item)}
        keyExtractor={selectedId}
      />
    </>
  );

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2A118F',
  },
});
