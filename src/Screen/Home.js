import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonStyle from '../Style/CommonStyles';
import Plus from '../Utils/Svg/Plus';
import Cart from '../Utils/Svg/Cart';
import {isAndroid, isIOS} from '../Utils/Common';
import {ColorScheme} from '../Utils/Color';
import Searchicon from '../Utils/Svg/Searchicon';
import {SCREEN_HEIGHT} from '../Utils/Common';
import Arrowicon from '../Utils/Svg/Arrowicon';
import Card from '../Components/Card';
import image from '../assets/Image/bannerimg.jpg';
import image2 from '../assets/Image/bannerimg2.jpg';
import image3 from '../assets/Image/bannerimg3.jpg';
import Apicalling from '../ApisServices/Apicalling';
import Likeicon from '../Utils/Svg/Likeicon';
import {useDispatch, useSelector} from 'react-redux';
import {fetchproduct} from '../Redux/CartSlice';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  // const product = useSelector(state => state);
  // console.log(product.product.data.products);
  // const alldata = product.product.data.products;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseurl = 'https://dummyjson.com/products';
        const responseData = await Apicalling(baseurl); // Call the API using the callApi function
        setData(responseData.products);
        // console.log('data', responseData.products);
      } catch (error) {
        setError(error.message);
        console.log('errorget', error);
      }
    };

    dispatch(fetchproduct());
    fetchData();
  }, []);

  const renderGridItem = ({item, index}) => {
    return (
      <View style={styles.singleproduct}>
        <TouchableOpacity style={styles.likebtn}>
          <Likeicon />
        </TouchableOpacity>
        <Image style={styles.imageview} source={{uri: item.thumbnail}} />
        <View style={styles.priceview}>
          <Text style={styles.pricetext}>{item.price}</Text>
          <TouchableOpacity>
            <Plus />
          </TouchableOpacity>
        </View>
        <Text style={styles.productname}>{item.brand}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={CommonStyle.safeareaview}>
      <StatusBar
        backgroundColor="#2A4BA0"
        style={{
          height: isAndroid() ? StatusBar.currentHeight : 0,
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.topview}>
          <View style={styles.insideview}>
            <Text style={styles.namefont}>Hey, Abhishek</Text>
            <Cart />
          </View>
          <TouchableOpacity style={styles.searchview}>
            <Searchicon />
            <TextInput
              style={styles.input}
              placeholder="Search Products and Store"
              placeholderTextColor={ColorScheme.greytextcolor}
            />
          </TouchableOpacity>
          <View style={styles.lowerinsideview}>
            <View style={styles.lowerinsideview1}>
              <Text style={styles.insidehead}>DELIVERY TO</Text>
              <View style={styles.lowerinsideview11}>
                <Text style={styles.insidehead2}>Green Way 30000</Text>
                <Arrowicon />
              </View>
            </View>
            <View style={styles.lowerinsideview1}>
              <Text style={styles.insidehead}>WITHIN</Text>
              <View style={styles.lowerinsideview11}>
                <Text style={styles.insidehead2}>1 Hour</Text>
                <Arrowicon />
              </View>
            </View>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
              marginLeft: 10,
              paddingBottom: 10,
              paddingRight: 10,
              paddingLeft: 10,
            }}
            style={{
              width: '100%',
              marginTop: 10,
              alignSelf: 'center',
              marginLeft: 10,
              marginRight: 30,
            }}>
            <Card img={image} color={ColorScheme.color3} />
            <Card img={image2} color={ColorScheme.color5} />
            <Card img={image3} color={ColorScheme.color6} />
          </ScrollView>
        </View>
        <Text style={styles.textheading}>Recommended</Text>
        <View style={styles.productview}>
          {data ? (
            <FlatList
              data={data}
              scrollEnabled={false}
              numColumns={2}
              renderItem={renderGridItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  topview: {
    width: '100%',
    height: SCREEN_HEIGHT - 600,
    backgroundColor: ColorScheme.color1,
  },
  insideview: {
    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '12%',
  },
  namefont: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
    fontSize: 22,
    color: ColorScheme.largefontcolor,
  },
  searchview: {
    width: '90%',
    height: 56,
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: ColorScheme.color2,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    paddingLeft: 20,
  },
  input: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: ColorScheme.greytextcolor,
    width: '90%',
  },
  lowerinsideview: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerinsideview1: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: 5,
  },
  lowerinsideview11: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  insidehead: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '800',
    fontSize: 11,
    color: ColorScheme.largefontcolor,
    opacity: 0.5,
  },
  insidehead2: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
    fontSize: 14,
    color: ColorScheme.largefontcolor,
  },
  textheading: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 30,
    color: ColorScheme.headcolor,
    marginLeft: 10,
  },
  productview: {
    width: '95%',
    alignSelf: 'center',
    paddingBottom: 40,
    marginTop: 20,
  },
  singleproduct: {
    width: '45%',
    paddingBottom: 10,
    backgroundColor: ColorScheme.largefontcolor,
    borderRadius: 12,
    margin: 10,
  },
  likebtn: {
    margin: 20,
  },
  imageview: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: -10,
    borderRadius: 16,
  },
  priceview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  pricetext: {
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: '#1E222B',
  },
  productname: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#616A7D',
    paddingLeft: 10,
  },
});
