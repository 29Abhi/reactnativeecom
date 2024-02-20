import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome';

const Star = ({star, review}) => {
  const rating = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;
    return (
      <View key={index}>
        {star >= index + 1 ? (
          <Icon1 name="star" size={20} color="#F9B023" />
        ) : star >= number ? (
          <Icon2 name="star-o" size={20} color="#F9B023" />
        ) : (
          <Icon3 name="star-half-empty" size={20} color="#F9B023" />
        )}
      </View>
    );
  });
  return (
    <View style={styles.star}>
      {rating}
      <Text style={styles.font}>{review}</Text>
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  star: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 10,
    marginLeft: 15,
  },
  font: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: 'grey',
    marginLeft: 10,
  },
});
