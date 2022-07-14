import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/fonts';
import {RFValue} from '../../utils/utilization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  buttonDefault: data => ({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(5),
    paddingVertical: hp(2),
    backgroundColor: data ? 'rgba(52, 52, 52, 0.3)' : '#46D0D9',
    marginTop: 20,
    marginBottom: 10
  }),

  text: {
    fontSize: Platform.OS == 'ios' ? getScaleIos(18) : RFValue(18),
    fontFamily: fonts.primary.normal,
    color: 'white',
  },
});
