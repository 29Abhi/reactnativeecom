import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Backbutton from '../Utils/Svg/Backbutton';
import {ColorScheme} from '../Utils/Color';

const Tophead = ({title, navigation, length}) => {
  return (
    <View style={styles.topview}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Backbutton />
      </TouchableOpacity>
      <Text style={styles.text}>
        {title} ( {length} )
      </Text>
    </View>
  );
};

export default Tophead;

const styles = StyleSheet.create({
  topview: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  text: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: ColorScheme.headcolor,
  },
});
