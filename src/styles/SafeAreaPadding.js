import {StyleSheet, Platform} from 'react-native';
import Colors from '../contents/color';
export default StyleSheet.create({
  androidTopSafeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
});
