import {StyleSheet, Platform} from 'react-native';
import Colors from '../contants/color';
export default StyleSheet.create({
  androidTopSafeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
});
