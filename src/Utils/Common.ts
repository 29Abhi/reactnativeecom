import { Dimensions, Platform } from 'react-native'

const isIOS = () => {
  return Platform.OS === 'ios'
}

const isAndroid = () => {
  return Platform.OS === 'android'
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export { isIOS, isAndroid, SCREEN_WIDTH, SCREEN_HEIGHT,  }