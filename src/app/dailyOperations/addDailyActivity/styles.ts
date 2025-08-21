import { COLORS } from '@/src/theme/colors';
import { GST } from '@/src/theme/globalStyles';
import { HP, RF } from '@/src/theme/responsive';
import {Dimensions, StyleSheet} from 'react-native';

const Containerheight = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    headerContainer: {
        ...GST.FLEX_ROW_SPACED,
        ...GST.PX3,
        ...GST.PT5,
      },
      searchBarMainContainer: {
        flex: 1,
        ...GST.MB0,
        ...GST.MX3,
      },
      searchBarContainer: {
        height: RF(45),
        borderRadius: 30,
        ...GST.SHADOW,
      },
      activityBtnContainer:{
        height:RF(80),
        ...GST.MX3,
        borderRadius:RF(12),
        ...GST.MT4,
        backgroundColor:COLORS.WHITE,
        alignItems:'center',
        justifyContent:'center',
        ...GST.SHADOW_LIGHT
        
      },
      farmSelectionContainer:{
        ...GST.MT6,
        ...GST.FLEX_ROW_SPACED,
        ...GST.MX3
      },
      selectBtn:{
        height:RF(30),
        width:RF(85),
        borderRadius:RF(12),
        ...GST.SHADOW_LIGHT,
        backgroundColor:COLORS.WHITE,
        alignItems:'center',
        justifyContent:'center'
      },
      farmCardContainer:{
        flexGrow: 0,
      },
      filterBtn:{
        height:RF(30),
        width:RF(85),
        borderRadius:RF(12),
        ...GST.SHADOW_LIGHT,
        backgroundColor:COLORS.WHITE,
        alignItems:'center',
        justifyContent:'center'
      },
      
});