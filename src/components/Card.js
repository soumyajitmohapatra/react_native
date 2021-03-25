import React, {Children, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Avatar, Button, Icon} from 'react-native-elements';

const CARD = ({title, rNumber, cName, children, child}) => {
  return (
    <View>
      <Card>
        <Card.Title>User's Profile: {title}</Card.Title>
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
            titleStyle={{color: '#1B1B1B', fontSize: 60}}
            avatarStyle={{backgroundColor: 'rgba(0,0,0,0.2)'}}
            activeOpacity={0.7}
          />
          <View>
            <Text style={styles.baseText}>
              Name: <Text style={styles.innerText}>{title}</Text>
            </Text>
            <Text style={styles.baseText}>
              Registration Number:{' '}
              <Text style={styles.innerText}>{rNumber}</Text>
            </Text>
            <Text style={styles.baseText}>
              College Name: <Text style={styles.innerText}>{cName}</Text>
            </Text>
          </View>
        </View>
        <View>{children}</View>
        <View>{child}</View>
      </Card>
    </View>
  );
};

export default CARD;

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  innerText: {
    color: 'red',
  },
});
