import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appnavigator from './src/Appnavigator';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={{flex: 1}}>
        <Appnavigator />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
