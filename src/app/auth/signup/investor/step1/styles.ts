import {COLORS} from '@/src/theme/colors';
import {RF} from '@/src/theme/responsive';
import {StyleSheet} from 'react-native';

const {WHITE, GREEN_500} = COLORS;

export const styles = StyleSheet.create({
  employmentContainer: {
    flex: 1,
    borderTopLeftRadius: RF(40),
    borderTopRightRadius: RF(40),
    backgroundColor: WHITE,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: GREEN_500,
  },
});
