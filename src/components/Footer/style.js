import { StyleSheet } from 'react-native';
// import { BAF_COLOR_BLUE } from '../../../utils/constant';
import { fonts } from '../../utils/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { RFValue } from '../../utils/utilization';

export default StyleSheet.create({
  container: {
    height: hp("8%"),
    padding: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: -20,
      width: 1,
    },
    elevation: 20,
  },
  topContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomContent: {
    flex: 1,
  },
  footerIcon: {
    width: wp(90),
    height: hp(20),
    // marginBottom: -15,
  },
  footerTitleActive: {
    fontSize: RFValue(12),
    marginTop: hp('1.5%'),
    textAlign: 'center',
    // color: BAF_COLOR_BLUE,
    fontFamily: fonts.primary.normal,
  },
  footerTitle: {
    fontSize: RFValue(12),
    marginTop: hp('1.5%'),
    textAlign: 'center',
    opacity: 0.7,
    color: 'grey',
    fontFamily: fonts.primary.normal,
  },
});
