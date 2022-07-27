import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/fonts';
import {RFValue} from '../../utils/utilization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  buttonCustom: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
    paddingVertical: hp(2),
    backgroundColor:  '#46D0D9',
    marginTop: 15,
    marginBottom: 10
  },
});
