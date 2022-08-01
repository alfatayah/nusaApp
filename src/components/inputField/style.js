import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/fonts';
import {RFValue} from '../../utils/utilization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  defaultStyle: {
    width: '100%',
  },
  inputStyle: {
    backgroundColor: 'white',
    fontFamily: fonts.primary.normal,
    fontSize: 13,
  },
});
