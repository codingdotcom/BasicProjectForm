import {StyleSheet, Platform} from 'react-native';
import Colors from '../contants/color';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: Colors.red,
    // marginBottom: getBottomSpace(),
  },
});
