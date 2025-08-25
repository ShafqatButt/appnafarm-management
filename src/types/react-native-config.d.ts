declare module 'react-native-config' {
  export interface NativeConfig {
    GOOGLE_MAPS_API_KEY_ANDROID?: string;
    GOOGLE_MAPS_API_KEY_IOS?: string;
    PUBLIC_API_URL?: string;
    GOOGLE_PLACES_API_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
