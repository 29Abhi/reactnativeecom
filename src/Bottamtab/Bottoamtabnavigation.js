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
      <View style={{marginTop: '15%'}}>
        {focused ? (
          <Animated.View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#1E222B',
              alignItems: 'center',
              justifyContent: 'center',
            }}></Animated.View>
        ) : (
          <Homeicon />
        )}
      </View>
    );
  };

  const Categoriefunction = ({focused}) => {
    return (
      <Animated.View style={{marginTop: '15%'}}>
        {focused ? <Categorieicon /> : <Homeicon />}
      </Animated.View>
    );
  };

  const Heartfunction = ({focused}) => {
    return (
      <Animated.View style={{marginTop: '15%'}}>
        {focused ? <Hearticon /> : <Homeicon />}
      </Animated.View>
    );
  };

  const Morefunction = ({focused}) => {
    return (
      <Animated.View style={{marginTop: '15%'}}>
        {focused ? <Moreicon /> : <Homeicon />}
      </Animated.View>
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
