import {StyleSheet} from 'react-native';
import {fonts} from '../../utils/fonts';
import {RFValue} from '../../utils/utilization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
textDetail:{
  fontSize: 12, color: '#143656', fontFamily: fonts.rubik.regular
},
  text: {
    fontSize: Platform.OS == 'ios' ? getScaleIos(14) : RFValue(14),
    fontFamily: fonts.rubik.medium,
    color: 'white',
    marginTop: 10
  },

  title:{
    marginLeft: '4%',
    fontSize: 20,
    fontFamily: fonts.rubik.medium,
    color: '#143656',
    marginTop: 15
  },
  
});
