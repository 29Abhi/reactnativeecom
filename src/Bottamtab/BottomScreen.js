import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Bottoamtabnavigation from './Bottoamtabnavigation';
import CommonStyle from '../Style/CommonStyles';

const BottomScreen = () => {
  return (
    <View style={CommonStyle.safeareaview}>
      <Bottoamtabnavigation />
    </View>
  );
};

export default BottomScreen;

const styles = StyleSheet.create({});
