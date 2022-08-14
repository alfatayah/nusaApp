import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/fonts';
import {RFValue} from '../../utils/utilization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  buttonCustom: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
    paddingVertical: hp(1.5),
    backgroundColor:  '#46D0D9',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 30
  },
  customStyle:{
    width: '20%',
    marginLeft: 20,
  },
  customInput:{
    backgroundColor: 'white',
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    height: 30,
  },
  title:{
    marginLeft: '4%',
    fontSize: 20,
    fontFamily: fonts.rubik.medium,
    color: '#143656',
  },

  totalCount: {
    marginRight: "7%",
    fontSize: 15,
    fontFamily: fonts.rubik.medium,
    color: '#143656',
  },
  text: {
    fontSize: Platform.OS == 'ios' ? getScaleIos(14) : RFValue(14),
    fontFamily: fonts.rubik.medium,
    color: 'white',
  },
  
});
