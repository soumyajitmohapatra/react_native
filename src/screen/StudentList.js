import React, {useState, useEffect, useRef} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  Animated,
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const StudentList = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch('http://a848b36f2553.ngrok.io/read.php', requestOptions)
        .then(res => res.json())
        .then(result => setData(result));
    }
    fetchData();
  }, []);

  
  const image = {
    uri:
      'https://www.wallpapertip.com/wmimgs/81-816611_iphone-new-wallpaper-hd-2019.jpg',
  };

  const spacing = 20;
  const ItemSize = 70 + spacing * 3;
  // const scrollY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timing);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#227093" />
      ) : (
        <ImageBackground
          source={image}
          // style={StyleSheet.absoluteFillObject}
          blurRadius={40}
          style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            {data.length == 0 ? (
              <View
                style={{
                  backgroundColor: '#fff',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 50, color: 'red'}}>
                  4<Text style={{color: '#000'}}>0</Text>4
                </Text>
                <Text style={{fontSize: 20}}>No Record Found</Text>
              </View>
            ) : (
              <FlatList
                // onScroll={Animated.event(
                //   [{nativeEvent: {contenOffset: {y: scrollY}}}],
                //   {useNativeDriver: true},
                // )}
                data={data}
                contentContainerStyle={{
                  padding: spacing,
                  paddingTop: StatusBar.currentHeight || 42,
                }}
                renderItem={({item, index}) => {
                  // const range = [-1, 0, ItemSize * index, ItemSize * (index + 2)];
                  // const scale = scrollY.interpolate({
                  //   range,
                  //   outRange: [1, 1, 1, 0],
                  // });

                  return (
                    <TouchableHighlight
                      onPress={() => navigation.navigate('Data', item)}
                      activeOpacity={0.8}
                      underlayColor="transparent"
                      containerStyle={{backgroundColor: 'transparent'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: spacing,
                          marginBottom: spacing,
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          borderRadius: 30,
                          shadowRadius: 20,
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 10,
                            height: 10,
                          },
                          shadowOpacity: 1,
                          shadowRadius: 3,
                          elevation: 210,
                          // transform: [{scale}],
                        }}>
                        <Avatar
                          rounded
                          size="large"
                          title={item.full_name.substring(0, 2)}
                          titleStyle={{
                            color: '#000',
                            fontSize: 30,
                            textTransform: 'uppercase',
                          }}
                          containerStyle={{
                            marginRight: spacing / 2,

                            box: {
                              margin: 10,
                              flex: 1,
                              backgroundColor: 'transparent',
                              borderColor: 'white',
                              borderWidth: 30,
                              overflow: 'hidden',
                              shadowColor: 'black',
                              shadowRadius: 10,
                              shadowOpacity: 1,
                            },
                          }}
                          avatarStyle={{
                            backgroundColor: 'rgba(255,255,255,0.4)',
                          }}
                          activeOpacity={0.4}
                        />
                        <View
                          style={{
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center',
                            width: '80%',
                          }}>
                          <View>
                            <Text
                              style={{
                                fontSize: 22,
                                fontWeight: '700',
                                color: '#227093',
                              }}>
                              {item.full_name}
                            </Text>
                            <Text style={{fontSize: 18, opacity: 0.7}}>
                              {item.college_name}
                            </Text>
                            <Text style={{fontSize: 14, opacity: 0.8}}>
                              {item.registration_no}
                            </Text>
                          </View>
                          <View style={{}}>
                            <Icon.Button
                              height={60}
                              color="#000"
                              name="arrow-circle-right"
                              backgroundColor="transparent"
                              onPress={() =>
                                navigation.navigate('Data', item)
                              }></Icon.Button>
                          </View>
                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                }}
              />
            )}
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2A118F',
  },
});
