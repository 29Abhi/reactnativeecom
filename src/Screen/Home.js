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
import HomeStyle from '../Style/HomeStyle';
import {isAndroid, isIOS} from '../Utils/Common';
import {ColorScheme} from '../Utils/Color';
import Searchicon from '../Utils/Svg/Searchicon';
import Arrowicon from '../Utils/Svg/Arrowicon';
import Card from '../Components/Card';
import image from '../assets/Image/bannerimg.jpg';
import image2 from '../assets/Image/bannerimg2.jpg';
import image3 from '../assets/Image/bannerimg3.jpg';
import Apicalling from '../ApisServices/Apicalling';
import Likeicon from '../Utils/Svg/Likeicon';
import {useDispatch, useSelector} from 'react-redux';
import {addCartItem} from '../Redux/CartSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const Home = ({navigation}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [index1, setIndex1] = useState([]);
  const [loder, setLoder] = useState(false);

  const dispatch = useDispatch();
  const addeditem = useSelector(state => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseurl = 'https://dummyjson.com/products';
        const responseData = await Apicalling(baseurl); // Call the API using the callApi function
        setLoder(true);
        const addqty = responseData.products.map(item => {
          return {...item, qty: 1};
        });
        setData(addqty);
        // console.log('data', addqty);
      } catch (error) {
        setError(error.message);
        setLoder(false);
        console.log('errorget', error);
      }
    };
    fetchData();
  }, []);

  const additem = item => {
    dispatch(addCartItem(item));
    // console.log('added', item);
  };

  const likebtn = index => {
    if (index1.includes(index)) {
      setIndex1(index1.filter(itemid => itemid !== index));
    } else {
      setIndex1([...index1, index]);
    }
  };

  const isfavroute = index => index1.includes(index);

  const renderGridItem = ({item, index}) => {
    return (
      <View style={HomeStyle.singleproduct}>
        <TouchableOpacity
          onPress={() => {
            likebtn(item.id);
          }}
          style={HomeStyle.likebtn}>
          <Likeicon isActive={isfavroute(item.id)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateToNextScreen(item);
          }}>
          <Image style={HomeStyle.imageview} source={{uri: item.thumbnail}} />
        </TouchableOpacity>

        <View style={HomeStyle.priceview}>
          <Text style={HomeStyle.pricetext}>{item.price}</Text>
          <TouchableOpacity onPress={() => additem(item)}>
            <Plus />
          </TouchableOpacity>
        </View>
        <Text style={HomeStyle.productname}>{item.brand}</Text>
      </View>
    );
  };

  const renderGridItem1 = ({item}) => {
    return (
      <ShimmerPlaceholder
        style={[HomeStyle.singleproduct, {height: 200}]}></ShimmerPlaceholder>
    );
  };

  const navigateToNextScreen = item => {
    navigation.navigate('Productscreen', {item});
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
        <View style={HomeStyle.topview}>
          <View style={HomeStyle.insideview}>
            <Text style={HomeStyle.namefont}>Hey, Abhishek</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <Icon name="cart-outline" size={25} color="white" />
              <View style={HomeStyle.lengthview}>
                <Text style={HomeStyle.textlength}>
                  {addeditem.products.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={HomeStyle.searchview}>
            <Searchicon />
            <TextInput
              style={HomeStyle.input}
              placeholder="Search Products and Store"
              placeholderTextColor={ColorScheme.greytextcolor}
            />
          </TouchableOpacity>
          <View style={HomeStyle.lowerinsideview}>
            <View style={HomeStyle.lowerinsideview1}>
              <Text style={HomeStyle.insidehead}>DELIVERY TO</Text>
              <View style={HomeStyle.lowerinsideview11}>
                <Text style={HomeStyle.insidehead2}>Green Way 30000</Text>
                <Arrowicon />
              </View>
            </View>
            <View style={HomeStyle.lowerinsideview1}>
              <Text style={HomeStyle.insidehead}>WITHIN</Text>
              <View style={HomeStyle.lowerinsideview11}>
                <Text style={HomeStyle.insidehead2}>1 Hour</Text>
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
        <Text style={HomeStyle.textheading}>Recommended</Text>
        <View style={HomeStyle.productview}>
          {loder && data ? (
            <FlatList
              data={data}
              scrollEnabled={false}
              numColumns={2}
              renderItem={renderGridItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]}
              scrollEnabled={false}
              numColumns={2}
              renderItem={renderGridItem1}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
