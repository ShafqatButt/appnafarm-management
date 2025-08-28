import {COLORS} from '@/src/theme/colors';
import {GST} from '@/src/theme/globalStyles';
import {RF} from '@/src/theme/responsive';
import {SPACING} from '@/src/theme/spacing';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.GREEN_500,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: RF(40),
    borderTopRightRadius: RF(40),
  },
  title: {
    marginTop: '28%',
    ...GST.MX4,
  },
  investmentContainer: {
    flex: 1,
    backgroundColor: COLORS.GRAY_600,
    ...GST.MX3,
    borderRadius: RF(20),
    ...GST.MT5,
    ...GST.PB6,
  },
  btnContainer: {
    justifyContent: 'flex-end',
    ...SPACING.MB4,
    ...GST.PX3,
    ...GST.MT3,
  },
  sliderContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: RF(20),
  },
  sliderTrack: {
    height: RF(10),
    borderRadius: RF(20),
  },
  sliderThumb: {
    width: RF(52),
    height: RF(52),
    borderRadius: RF(26),
  },
});
