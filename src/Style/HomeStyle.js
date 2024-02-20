import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../Utils/Common';
import {ColorScheme} from '../Utils/Color';

const HomeStyle = StyleSheet.create({
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
  lengthview: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: -10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textlength: {
    color: 'black',
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
  },
});

export default HomeStyle;
