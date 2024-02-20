import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CommonStyle from '../Style/CommonStyles';
import {isAndroid, isIOS} from '../Utils/Common';
import Tophead from '../Components/Tophead';
import {UseDispatch, useDispatch, useSelector} from 'react-redux';
import Decrimentbtn from '../Utils/Svg/Decrimentbtn';
import Incrementbtn from '../Utils/Svg/Incrementbtn';
import {TouchableOpacity} from 'react-native';
import CartStyle from '../Style/CartStyles';
import Button from '../Components/Button';
import {addCartItem, removeCartItem, deletitem} from '../Redux/CartSlice';

const Cart = ({navigation}) => {
  const [subTotal, setSubTotal] = useState(0);
  const cartitem = useSelector(state => state.products);
  // console.log('cart', cartitem);

  const Dispatch = useDispatch();

  const getsubtotalprice = () => {
    let total = 0;
    cartitem.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  const gettotalprice = () => {
    let delivery = 2;

    cartitem.map(item => {
      delivery = item.qty * item.price + delivery;
    });
    return delivery;
  };

  const handleButtonPress = data => {};

  const Rendercartproduct = ({item, index}) => {
    return (
      <View style={CartStyle.listview}>
        <View style={CartStyle.listview1}>
          <Image style={CartStyle.image} source={{uri: item.thumbnail}} />
          <View style={CartStyle.firstview}>
            <Text style={CartStyle.text}>{item.brand}</Text>
            <Text style={CartStyle.textprice}> ₹ {item.price}</Text>
          </View>
        </View>
        <View style={CartStyle.listview2}>
          <TouchableOpacity
            onPress={() => {
              if (item.qty > 1) {
                Dispatch(removeCartItem(item));
              } else {
                Dispatch(deletitem(item.id));
              }
            }}>
            <Decrimentbtn />
          </TouchableOpacity>
          <Text style={CartStyle.textitem}>{item.qty}</Text>
          <TouchableOpacity
            onPress={() => {
              Dispatch(addCartItem(item));
            }}>
            <Incrementbtn />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={CommonStyle.safeareaview}>
      <StatusBar
        backgroundColor="white"
        style={{
          height: isAndroid() ? StatusBar.currentHeight : 0,
        }}
      />
      <Tophead
        title="Shopping Cart"
        navigation={navigation}
        length={cartitem.length}
      />
      <ScrollView style={CartStyle.scrollview}>
        <FlatList
          data={cartitem}
          renderItem={Rendercartproduct}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <View style={CartStyle.detailview}>
        <View style={CartStyle.viewinside}>
          <Text style={CartStyle.subtotal}>Subtotal</Text>
          <Text style={CartStyle.subtotalnum}> ₹ {getsubtotalprice()}</Text>
        </View>
        <View style={CartStyle.viewinside}>
          <Text style={CartStyle.subtotal}>Delivery</Text>
          <Text style={CartStyle.subtotalnum}> ₹ {2}</Text>
        </View>
        <View style={CartStyle.viewinside}>
          <Text style={CartStyle.subtotal}>Total</Text>
          <Text style={CartStyle.subtotalnum}> ₹ {gettotalprice()}</Text>
        </View>
        <Button title="Proceed To checkout" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
