import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent: any) => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: any) => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const iPHONE_11_PRO_HEIGHT = 812;
const iPHONE_11_PRO_WIDTH = 375;

const heightBaseScale = SCREEN_HEIGHT / iPHONE_11_PRO_HEIGHT;
const widthBaseScale = SCREEN_WIDTH / iPHONE_11_PRO_WIDTH;

const normalize = (size: number, based: 'width' | 'height' = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const heightPixel = (size: number) => normalize(size, 'height');

const fontPixel = (size: number) => heightPixel(size);

export {widthPercentageToDP as WP, heightPercentageToDP as HP, fontPixel as RF};
