import React, {Children, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Avatar, Button, Icon} from 'react-native-elements';

const CARD = ({title, rNumber, cName, deleteFun, editFun}) => {
  return (
    <View style={{flex: 1, top: 10}}>
      <Card containerStyle={{ borderRadius: 30}}>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar
            rounded
            size="xlarge"
            title={title.substring(0, 2)}
            titleStyle={{
              color: '#1B1B1B',
              fontSize: 60,
              textTransform: 'uppercase',
            }}
            avatarStyle={{backgroundColor: 'rgba(0,0,0,0.2)'}}
            activeOpacity={0.7}
          />
          <View>
            <Text style={styles.baseText}>
              Name: <Text style={styles.innerText}>{title}</Text>
            </Text>
            <Text style={styles.baseText}>
              Registration Number:
              <Text style={styles.innerText}> {rNumber}</Text>
            </Text>
            <Text style={styles.baseText}>
              College Name: <Text style={styles.innerText}>{cName}</Text>
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Button
            onPress={editFun}
            title="Edit"
            color="#841584"
            containerStyle={{flex: 0.5}}
            buttonStyle={{
              borderRadius: 15,
            }}
            accessibilityLabel="Edit"
          />
          <Button
            onPress={deleteFun}
            title="Delete"
            color="#841584"
            containerStyle={{flex: 0.5, marginLeft: 5}}
            buttonStyle={{
              backgroundColor: '#eb4034',
              borderRadius: 15,
            }}
            accessibilityLabel="Delete"
          />
        </View>
      </Card>
    </View>
  );
};

export default CARD;

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  innerText: {
    color: 'red',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
