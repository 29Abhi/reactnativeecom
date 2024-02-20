import {StyleSheet} from 'react-native';
import {ColorScheme} from '../Utils/Color';

const CartStyle = StyleSheet.create({
  listview: {
    width: '95%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
    fontSize: 15,
    color: ColorScheme.greytextcolor,
  },
  listview1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  textprice: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: ColorScheme.greytextcolor,
  },
  firstview: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 6,
  },
  listview2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  textitem: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: ColorScheme.greytextcolor,
  },
  scrollview: {
    paddingBottom: '20%',
  },
  detailview: {
    width: '95%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: ColorScheme.largefontcolor,
  },
  viewinside: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  subtotal: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#616A7D',
  },
  subtotalnum: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
    fontSize: 14,
    color: ColorScheme.greytextcolor,
  },
});

export default CartStyle;
