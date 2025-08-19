import {Platform} from 'react-native';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';

const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/;

export {ANDROID, IOS, PASSWORD_REGEX};
