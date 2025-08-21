import { COLORS } from '@/src/theme/colors';
import { GST } from '@/src/theme/globalStyles';
import { RF } from '@/src/theme/responsive';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    fertilizationBtnContainer:{
        alignSelf:'center',
        height:RF(45),
        width:RF(190),
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:COLORS.GRAY_600,
        borderRadius:RF(16),
        ...GST.MT4
    },
    micStyle:{
        alignSelf:'center',
        ...GST.MT8
    },
    recordTxtStyle:{
        alignSelf:'center',
        ...GST.MT2
    },
    inputContainer:{
        ...GST.MX3,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:RF(10),
        height:RF(40),
        ...GST.MT4,
        textAlignVertical:'center'
    }
});
