import { COLORS } from '@/src/theme/colors';
import { GST } from '@/src/theme/globalStyles';
import { RF } from '@/src/theme/responsive';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    addFarmBtn:{
        height:RF(32),
        width:RF(115),
        borderRadius:RF(16),
        backgroundColor:COLORS.GRAY_600,
        alignItems:'center',
        justifyContent:'center'
    },
    farmCardContainer:{
        flexGrow: 0,
        height:RF(160)
    },
    dailyOperationsContainer:{
        height:RF(90),
        borderRadius:RF(16),
        backgroundColor:COLORS.GREEN_200,
        ...GST.FLEX_ROW_SPACED,
        ...GST.PX8,
        ...GST.MB3
    }
});
