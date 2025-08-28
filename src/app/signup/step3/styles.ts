import {COLORS} from '@/src/theme/colors';
import {FONTS, FONT_SIZES} from '@/src/theme/fonts';
import {RF, WP} from '@/src/theme/responsive';
import {StyleSheet} from 'react-native';

const {GRAY_250, GREEN_500} = COLORS;

export const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: RF(12),
    marginBottom: RF(12),
  },
  cell: {
    lineHeight: RF(65),
    fontSize: RF(FONT_SIZES['2XL']),
    fontFamily: FONTS.SEMI_BOLD,
    color: GREEN_500,
    borderWidth: 1.5,
    borderColor: GRAY_250,
    textAlign: 'center',
    borderRadius: RF(12),
    margin: RF(4),
    height: RF(70),
    width: RF(50),
  },
  focusCell: {
    borderColor: GREEN_500,
  },
});
