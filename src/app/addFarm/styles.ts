import {COLORS} from '@/src/theme/colors';
import {GST} from '@/src/theme/globalStyles';
import {RF} from '@/src/theme/responsive';
import {StyleSheet} from 'react-native';

const {WHITE, GRAY_100} = COLORS;

export const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    
  },
  modalContainer: {
    backgroundColor: WHITE,
    borderRadius: RF(24),
    padding: RF(24),
  },
  modalSubmitBtnContainer: {
    alignItems: 'flex-end',
    ...GST.MT3,
  },
  mapTypeContainer: {
    backgroundColor: WHITE,
    borderRadius: RF(3),
    ...GST.FLEX_ROW,
    position: 'absolute',
    top: 30,
    left: 15,
    ...GST.SHADOW_LIGHT,
  },
  zoomBtnContainer: {
    backgroundColor: WHITE,
    borderRadius: RF(3),
    position: 'absolute',
    top: 90,
    left: 15,
    ...GST.SHADOW_LIGHT,
  },
  mapTypeDivider: {
    width: RF(1.5),
    height: '100%',
    backgroundColor: GRAY_100,
  },
  zoomBtnDivider: {
    height: RF(1.5),
    width: '100%',
    backgroundColor: GRAY_100,
  },
});
