import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Bottoamtabnavigation from './Bottamtab/Bottoamtabnavigation';
import Cart from './Screen/Cart';
import Productscreen from './Screen/Productscreen';
const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottoamtabnavigation"
          component={Bottoamtabnavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Productscreen"
          component={Productscreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;

const styles = StyleSheet.create({});
