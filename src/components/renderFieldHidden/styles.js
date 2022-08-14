import { Platform, StyleSheet } from 'react-native';
import { BAF_COLOR_BLUE } from '../../utils/constant';
import { fonts, FSAlbert } from '../../utils/fonts';
import { getScaleIos, RFValue } from '../../utils/utilization';
export const styles = StyleSheet.create({

  ErrorDesc: {
    color: 'red',
    fontFamily: FSAlbert,
    alignSelf: 'stretch',
    textAlign: 'right',
    fontSize: 10,
  },
});
