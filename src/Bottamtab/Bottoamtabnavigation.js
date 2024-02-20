import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import More from '../Screen/More';
import Categories from '../Screen/Categories';
import Favroute from '../Screen/Favroute';
import Homeicon from '../Utils/Svg/Homeicon';
import Categorieicon from '../Utils/Svg/Categorieicon';
import Hearticon from '../Utils/Svg/Hearticon';
import Moreicon from '../Utils/Svg/Moreicon';

const Bottom = createBottomTabNavigator();

const Bottoamtabnavigation = () => {
  const Homefunction = ({focused}) => {
    return (
      <View style={{marginTop: '5%'}}>
        {focused ? <Homeicon color="#E0B420" /> : <Homeicon />}
      </View>
    );
  };

  const Categoriefunction = ({focused}) => {
    return (
      <View style={{marginTop: '5%'}}>
        {focused ? <Categorieicon color="#E0B420" /> : <Categorieicon />}
      </View>
    );
  };

  const Heartfunction = ({focused}) => {
    return (
      <View style={{marginTop: '5%'}}>
        {focused ? <Hearticon color="#E0B420" /> : <Hearticon />}
      </View>
    );
  };

  const Morefunction = ({focused}) => {
    return (
      <View style={{marginTop: '5%'}}>
        {focused ? <Moreicon color="#E0B420" /> : <Moreicon />}
      </View>
    );
  };
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Homefunction focused={focused} />
          ),
        }}
      />
      <Bottom.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Categoriefunction focused={focused} />
          ),
        }}
      />
      <Bottom.Screen
        name="Favroute"
        component={Favroute}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Heartfunction focused={focused} />
          ),
        }}
      />
      <Bottom.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Morefunction focused={focused} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default Bottoamtabnavigation;

const styles = StyleSheet.create({});
