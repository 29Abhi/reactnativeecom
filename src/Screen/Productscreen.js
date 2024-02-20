import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import CommonStyle from '../Style/CommonStyles';
import {isAndroid, isIOS} from '../Utils/Common';
import Backbutton from '../Utils/Svg/Backbutton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStyle from '../Style/HomeStyle';
import {UseDispatch, useDispatch, useSelector} from 'react-redux';
import {ColorScheme} from '../Utils/Color';
import Star from '../Components/Star';
import Carousel from 'react-native-snap-carousel';
import Button from '../Components/Button';
import {addCartItem} from '../Redux/CartSlice';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const Productscreen = ({navigation, route}) => {
  const addedproduct = useSelector(state => state);
  const Dispatch = useDispatch();

  const {item} = route.params;
  //   console.log('productscreen', item.price);

  const renderItem = ({item, index}) => {
    console.log(index);
    return (
      <View style={{height: viewportHeight}}>
        <Image style={styles.cerosel} source={{uri: item}} />
      </View>
    );
  };

  const handleButtonPress = data => {
    Dispatch(addCartItem(data));
  };

  return (
    <SafeAreaView style={CommonStyle.safeareaview}>
      <StatusBar
        backgroundColor="white"
        style={{
          height: isAndroid() ? StatusBar.currentHeight : 0,
        }}
      />
      <View style={styles.topview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Backbutton />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Icon name="cart-outline" size={25} color="black" />
          <View style={HomeStyle.lengthview}>
            <Text style={HomeStyle.textlength}>
              {addedproduct.products.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.tophead}>{item.title}</Text>
      <Star star={item.rating} review="120  Reviews" />
      <View style={styles.ceroselview}>
        <Carousel
          data={item.images}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          autoplay={true}
        />
      </View>
      <View style={styles.pricepoint}>
        <Text style={styles.pricefont}> ₹ {item.price}</Text>
        <View style={styles.percerntview}>
          <Text style={styles.percentfont1}>
            % {item.discountPercentage} OFF
          </Text>
        </View>
      </View>
      <View style={styles.btnview}>
        <Button
          title="Add to Cart"
          color="white"
          textcolor={ColorScheme.color1}
          width="45%"
          dataitem={item}
          onPress={handleButtonPress}
        />
        <Button
          title="Buy Now"
          width="45%"
          dataitem={item}
          onPress={handleButtonPress}
        />
      </View>
      <Text style={styles.detail}>Detail</Text>
      <Text style={styles.description}>
        Present commodo cursus magna, velsceleruisque Make sure your Redux store
        is properly configured and your reducer returns the appropriate data
        structure.
      </Text>
    </SafeAreaView>
  );
};

export default Productscreen;

const styles = StyleSheet.create({
  topview: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tophead: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '300',
    fontSize: 50,
    color: ColorScheme.headcolor,
    marginLeft: 15,
    lineHeight: 62.5,
    marginTop: 10,
  },
  cerosel: {
    width: '100%',
    height: '30%',
    marginTop: 20,
  },
  pricefont: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '700',
    fontSize: 16,
    color: ColorScheme.color1,
    marginLeft: 15,
    lineHeight: 62.5,
    marginTop: 10,
  },
  ceroselview: {
    height: '30%',
  },
  pricepoint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  percerntview: {
    padding: 5,
    backgroundColor: ColorScheme.color1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  percentfont1: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
  },
  btnview: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  detail: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: ColorScheme.headcolor,
    marginTop: 10,
    marginLeft: 10,
  },
  description: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: ColorScheme.greytextcolor,
    marginTop: 10,
    marginLeft: 10,
  },
});
