import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';
import {SCREEN_WIDTH} from '../Utils/Common';

const Card = ({img, color}) => {
  return (
    <View style={[styles.outerview, {backgroundColor: color}]}>
      <Avatar size={100} source={img} rounded />
      <View>
        <Text style={styles.firsttext}>Get</Text>
        <Text style={styles.firsttext2}>50% OFF</Text>
        <Text style={styles.firsttext3}>On firt 03 Order</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  outerview: {
    width: SCREEN_WIDTH - 150,
    padding: 15,
    borderRadius: 16,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  firsttext: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '300',
    fontSize: 20,
    color: 'white',
  },
  firsttext2: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '800',
    fontSize: 26,
    color: 'white',
  },
  firsttext3: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
    fontSize: 13,
    color: 'white',
  },
});
