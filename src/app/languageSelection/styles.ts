import {GST} from '@/src/theme/globalStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: '15%',
  },
  container: {
    flex: 1,
    ...GST.PX3,
    ...GST.PT5,
  },
});
