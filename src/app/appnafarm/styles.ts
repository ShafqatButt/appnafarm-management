import {COLORS} from '@/src/theme/colors';
import {GST} from '@/src/theme/globalStyles';
import {RF} from '@/src/theme/responsive';
import {StyleSheet} from 'react-native';

const {GRAY_130, GRAY_100, WHITE} = COLORS;

export const styles = StyleSheet.create({
  cropStatsContainer: {
    borderRadius: RF(12),
    backgroundColor: GRAY_130,
    ...GST.PY2,
    ...GST.PX4,
  },
  statsMainContainer: {
    padding: RF(12),
    borderRadius: RF(12),
    backgroundColor: GRAY_100,
    ...GST.SHADOW,
    ...GST.MT4,
    ...GST.MB4,
  },
  statsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...GST.MX6,
    ...GST.MT3,
    ...GST.MB5,
  },
  actionBtnContainer: {
    justifyContent: 'center',
    borderRadius: RF(12),
    backgroundColor: WHITE,
    height: RF(40),
    ...GST.SHADOW,
    ...GST.FLEX_ROW,
  },
  viewMoreContainer: {
    alignItems: 'center',
    ...GST.MT10,
  },
});
