import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ColorScheme} from '../Utils/Color';

const Button = ({title, color, textcolor, width, dataitem, onPress}) => {
  const handlePress = () => {
    // Call the onPress callback with the dataitem when the button is pressed
    return onPress(dataitem);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.btnview,
        color
          ? {
              backgroundColor: color,
              borderColor: ColorScheme.color1,
              borderWidth: 1,
            }
          : null,
        width ? {width: width} : null,
      ]}>
      <Text style={[styles.text, textcolor ? {color: textcolor} : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnview: {
    width: '90%',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorScheme.color1,
    marginTop: 20,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
});
