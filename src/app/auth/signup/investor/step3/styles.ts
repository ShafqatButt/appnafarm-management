import {COLORS} from '@/src/theme/colors';
import {RF} from '@/src/theme/responsive';
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
  },
});
